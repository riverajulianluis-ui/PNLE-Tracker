'use client';

import { useMemo, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { STATUS_ORDER, STATUS_META } from '@/lib/subjects';
import { WEEKLY_CONTENT } from '@/lib/weeklyContent';

function FlatTopicItem({ label, meta, note, onCycle, onNoteChange, onNoteSave }) {
  const hasNote = !!(note && note.trim());
  const [showNote, setShowNote] = useState(hasNote);
  const textareaRef = useRef(null);
  const shouldFocusRef = useRef(false);

  const handleToggle = () => {
    shouldFocusRef.current = true;
    setShowNote((s) => !s);
  };

  useEffect(() => {
    if (showNote && shouldFocusRef.current) {
      textareaRef.current?.focus();
      shouldFocusRef.current = false;
    }
  }, [showNote]);

  return (
    <div className="topic-block">
      <div className="topic-row">
        <span className="topic-name">{label}</span>
        <div className="topic-actions">
          <button
            className={`note-toggle-btn${hasNote ? ' has-note' : ''}`}
            onClick={handleToggle}
          >
            {showNote ? '− Comment' : '+ Comment'}
          </button>
          <button
            className="status-btn"
            style={{ background: meta.bg, color: meta.text }}
            onClick={onCycle}
          >
            <span className="ic">{meta.icon}</span>
            {meta.label}
          </button>
        </div>
      </div>
      {showNote && (
        <textarea
          ref={textareaRef}
          className="topic-note"
          placeholder="Add a note (e.g. 'Needs more work on this part')"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          onBlur={onNoteSave}
          rows={1}
        />
      )}
    </div>
  );
}

function flatTopicKey(subjectId, idx) {
  return `${subjectId}::${idx}`;
}

function collectLeaves(topic) {
  if (!topic.children || topic.children.length === 0) return [topic];
  return topic.children.flatMap(collectLeaves);
}

function TopicNode({ topic, progress, onCycle, notes, onNoteChange, onNoteSave, depth = 0 }) {
  const isLeaf = !topic.children || topic.children.length === 0;
  const hasNote = !!(notes[topic.id] && notes[topic.id].trim());
  const [showNote, setShowNote] = useState(hasNote);
  const textareaRef = useRef(null);
  const shouldFocusRef = useRef(false);

  const handleToggle = () => {
    shouldFocusRef.current = true;
    setShowNote((s) => !s);
  };

  useEffect(() => {
    if (showNote && shouldFocusRef.current) {
      textareaRef.current?.focus();
      shouldFocusRef.current = false;
    }
  }, [showNote]);

  if (isLeaf) {
    const status = progress[topic.id] || 'not_started';
    const meta = STATUS_META[status];
    return (
      <div className="topic-block" style={{ '--depth': depth }}>
        <div className="topic-row">
          <span className="topic-name">{topic.label}</span>
          <div className="topic-actions">
            <button
              className={`note-toggle-btn${hasNote ? ' has-note' : ''}`}
              onClick={handleToggle}
            >
              {showNote ? '− Comment' : '+ Comment'}
            </button>
            <button
              className="status-btn"
              style={{ background: meta.bg, color: meta.text }}
              onClick={() => onCycle(topic.id)}
            >
              <span className="ic">{meta.icon}</span>
              {meta.label}
            </button>
          </div>
        </div>
        {showNote && (
          <textarea
            ref={textareaRef}
            className="topic-note"
            placeholder="Add a note (e.g. 'Needs more work on this part')"
            value={notes[topic.id] || ''}
            onChange={(e) => onNoteChange(topic.id, e.target.value)}
            onBlur={() => onNoteSave(topic.id)}
            rows={1}
          />
        )}
      </div>
    );
  }

  const leaves = collectLeaves(topic);
  const masteredCount = leaves.filter(
    (l) => (progress[l.id] || 'not_started') === 'mastered'
  ).length;

  return (
    <div className="topic-group" style={{ '--depth': depth }}>
      <div className="topic-group-head">
        <span className="topic-group-title">{topic.label}</span>
        <span className="topic-group-rollup">
          {masteredCount}/{leaves.length} mastered
        </span>
      </div>
      {topic.children.map((child) => (
        <TopicNode
          key={child.id}
          topic={child}
          progress={progress}
          onCycle={onCycle}
          notes={notes}
          onNoteChange={onNoteChange}
          onNoteSave={onNoteSave}
          depth={depth + 1}
        />
      ))}
    </div>
  );
}

export default function SubjectClient({
  subject,
  initialProgress,
  initialWeekGoals,
  initialNotes,
  userId,
}) {
  const [progress, setProgress] = useState(initialProgress || {});
  const [weekGoals, setWeekGoals] = useState(initialWeekGoals || {});
  const [notes, setNotes] = useState(initialNotes || {});
  const supabase = useMemo(() => createClient(), []);

  // Just updates what's on screen as she types — no network call yet.
  function handleNoteChange(topicKey, value) {
    setNotes((n) => ({ ...n, [topicKey]: value }));
  }

  // Saves to Supabase once she taps/clicks away from the note box,
  // instead of on every keystroke, to keep writes cheap.
  async function saveNote(topicKey) {
    const { error } = await supabase.from('topic_notes').upsert(
      {
        user_id: userId,
        subject_id: subject.id,
        topic_key: topicKey,
        note: notes[topicKey] || '',
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,topic_key' }
    );
    if (error) console.error('Failed to save note', error);
  }
  const weekly = WEEKLY_CONTENT[subject.id];

  // Per-week and overall mastery stats, used for the segmented header bar
  const weekStats = useMemo(() => {
    if (!weekly) return [];
    return weekly.weeks.map((week) => {
      if (week.reviewWeek) {
        return {
          number: week.number,
          review: true,
          leafCount: 0,
          masteredCount: 0,
          inProgressCount: 0,
          relearningCount: 0,
        };
      }
      const leaves = week.topics.flatMap(collectLeaves);
      const statuses = leaves.map((l) => progress[l.id] || 'not_started');
      const masteredCount = statuses.filter((s) => s === 'mastered').length;
      const inProgressCount = statuses.filter((s) => s === 'in_progress').length;
      const relearningCount = statuses.filter((s) => s === 'relearning').length;
      return {
        number: week.number,
        review: false,
        leafCount: leaves.length,
        masteredCount,
        inProgressCount,
        relearningCount,
      };
    });
  }, [weekly, progress]);

  const overall = useMemo(() => {
    const totalLeaves = weekStats.reduce((a, w) => a + w.leafCount, 0) || 1;
    const totalMastered = weekStats.reduce((a, w) => a + w.masteredCount, 0);
    return { pct: Math.round((totalMastered / totalLeaves) * 100), totalLeaves, totalMastered };
  }, [weekStats]);

  // --- New week-view save functions ---
  async function cycleWeeklyStatus(topicId) {
    const current = progress[topicId] || 'not_started';
    const next = STATUS_ORDER[(STATUS_ORDER.indexOf(current) + 1) % STATUS_ORDER.length];
    setProgress((p) => ({ ...p, [topicId]: next }));

    const { error } = await supabase.from('week_topic_progress').upsert(
      {
        user_id: userId,
        subject_id: subject.id,
        topic_id: topicId,
        status: next,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,topic_id' }
    );
    if (error) {
      setProgress((p) => ({ ...p, [topicId]: current }));
      console.error('Failed to save progress', error);
    }
  }

  async function toggleWeekGoal(weekNumber) {
    const current = !!weekGoals[weekNumber];
    const next = !current;
    setWeekGoals((w) => ({ ...w, [weekNumber]: next }));

    const { error } = await supabase.from('week_goals').upsert(
      {
        user_id: userId,
        subject_id: subject.id,
        week_number: weekNumber,
        done: next,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,subject_id,week_number' }
    );
    if (error) {
      setWeekGoals((w) => ({ ...w, [weekNumber]: current }));
      console.error('Failed to save week goal', error);
    }
  }

  // --- Old flat-list save function (used only as a fallback) ---
  async function cycleFlatStatus(idx) {
    const key = flatTopicKey(subject.id, idx);
    const current = progress[key] || 'not_started';
    const next = STATUS_ORDER[(STATUS_ORDER.indexOf(current) + 1) % STATUS_ORDER.length];
    setProgress((p) => ({ ...p, [key]: next }));

    const { error } = await supabase.from('topic_progress').upsert(
      {
        user_id: userId,
        subject_id: subject.id,
        topic_idx: idx,
        status: next,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,subject_id,topic_idx' }
    );
    if (error) {
      setProgress((p) => ({ ...p, [key]: current }));
      console.error('Failed to save progress', error);
    }
  }

  return (
    <>
      <Link href="/" className="back-link">
        ← All Subjects
      </Link>

      <section className="subject-hero" style={{ borderColor: `${subject.accent}33` }}>
        <div>
          <h2 style={{ color: subject.accent }}>{subject.name}</h2>
          <p className="sub">
            {weekly
              ? `${overall.totalMastered} of ${overall.totalLeaves} topics mastered`
              : `${subject.topics.length} topics`}
          </p>
        </div>
        {weekly && (
          <div className="subject-pct" style={{ color: 'var(--purple)' }}>
            {overall.pct}%
          </div>
        )}
      </section>

      {weekly && (
        <>
          <div className="week-progress-bar">
            {weekStats.map((w) => (
              <div
                key={w.number}
                className={`week-progress-seg ${w.review ? 'review' : ''}`}
                style={{
                  flexGrow: w.review ? 0 : Math.max(w.leafCount, 1),
                  flexBasis: w.review ? 14 : 0,
                }}
                title={
                  w.review
                    ? `Week ${w.number}: Review`
                    : `Week ${w.number}: ${w.masteredCount} mastered, ${w.inProgressCount} in progress, ${w.relearningCount} relearning (of ${w.leafCount})`
                }
              >
                {!w.review && w.leafCount > 0 && (
                  <>
                    <div
                      className="week-progress-fill mastered"
                      style={{ width: `${(w.masteredCount / w.leafCount) * 100}%` }}
                    />
                    <div
                      className="week-progress-fill in-progress"
                      style={{ width: `${(w.inProgressCount / w.leafCount) * 100}%` }}
                    />
                    <div
                      className="week-progress-fill relearning"
                      style={{ width: `${(w.relearningCount / w.leafCount) * 100}%` }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="week-progress-legend">
            <span>
              <i style={{ background: 'var(--purple)' }} />
              Mastered
            </span>
            <span>
              <i style={{ background: 'var(--amber)' }} />
              In progress
            </span>
            <span>
              <i style={{ background: 'var(--rose)' }} />
              Relearning
            </span>
          </div>
        </>
      )}

      {weekly ? (
        weekly.weeks.map((week) => (
          <div className="week-block" key={week.number}>
            <div className="week-block-head">
              <span className="week-block-title">Week {week.number}</span>
              {!week.reviewWeek && (
                <label className="week-goal">
                  <input
                    type="checkbox"
                    checked={!!weekGoals[week.number]}
                    onChange={() => toggleWeekGoal(week.number)}
                  />
                  Goal met
                </label>
              )}
            </div>
            {week.reviewWeek ? (
              <div className="review-week-note">Review Week</div>
            ) : (
              week.topics.map((topic) => (
                <TopicNode
                  key={topic.id}
                  topic={topic}
                  progress={progress}
                  onCycle={cycleWeeklyStatus}
                  notes={notes}
                  onNoteChange={handleNoteChange}
                  onNoteSave={saveNote}
                />
              ))
            )}
          </div>
        ))
      ) : (
        <div className="topics-inner">
          <p className="sub" style={{ marginBottom: 12 }}>
            The week-by-week view for this subject hasn&apos;t been added yet — here&apos;s the
            full topic list for now.
          </p>
          {subject.topics.map((t, idx) => {
            const key = flatTopicKey(subject.id, idx);
            const status = progress[key] || 'not_started';
            const meta = STATUS_META[status];
            return (
              <FlatTopicItem
                key={key}
                label={t}
                meta={meta}
                note={notes[key] || ''}
                onCycle={() => cycleFlatStatus(idx)}
                onNoteChange={(value) => handleNoteChange(key, value)}
                onNoteSave={() => saveNote(key)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
