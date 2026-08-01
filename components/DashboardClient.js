'use client';

import { useMemo, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { SUBJECTS, STATUS_ORDER, STATUS_META } from '@/lib/subjects';

function topicKey(subjectId, idx) {
  return `${subjectId}::${idx}`;
}

function subjectCounts(subject, progress) {
  const counts = { not_started: 0, in_progress: 0, mastered: 0, relearning: 0 };
  subject.topics.forEach((_, idx) => {
    const st = progress[topicKey(subject.id, idx)] || 'not_started';
    counts[st]++;
  });
  return counts;
}

function pct(counts) {
  const total = STATUS_ORDER.reduce((a, k) => a + counts[k], 0) || 1;
  return Math.round((counts.mastered / total) * 100);
}

function PulseStrip({ color, seed }) {
  const pts = [];
  const w = 600,
    h = 34,
    mid = h / 2;
  let x = 0;
  pts.push(`M0,${mid}`);
  const segs = 10 + (seed % 3);
  for (let i = 0; i < segs; i++) {
    const step = w / segs;
    x += step * 0.5;
    pts.push(`L${x.toFixed(1)},${mid}`);
    if (i === Math.floor(segs / 2)) {
      pts.push(`L${(x + step * 0.12).toFixed(1)},${(mid - 3).toFixed(1)}`);
      pts.push(`L${(x + step * 0.22).toFixed(1)},${(mid + 13).toFixed(1)}`);
      pts.push(`L${(x + step * 0.32).toFixed(1)},${(mid - 14).toFixed(1)}`);
      pts.push(`L${(x + step * 0.42).toFixed(1)},${mid}`);
      x += step * 0.5;
    } else {
      x += step * 0.5;
    }
    pts.push(`L${x.toFixed(1)},${mid}`);
  }
  return (
    <svg className="pulse-strip" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <path
        d={pts.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export default function DashboardClient({ initialProgress, userId }) {
  const [progress, setProgress] = useState(initialProgress || {});
  const [openCards, setOpenCards] = useState({});
  const supabase = useMemo(() => createClient(), []);

  const totals = useMemo(() => {
    const t = { not_started: 0, in_progress: 0, mastered: 0, relearning: 0 };
    SUBJECTS.forEach((s) => {
      const c = subjectCounts(s, progress);
      STATUS_ORDER.forEach((k) => (t[k] += c[k]));
    });
    return t;
  }, [progress]);

  const totalTopics = STATUS_ORDER.reduce((a, k) => a + totals[k], 0) || 1;
  const overallPct = pct(totals);
  const circumference = 2 * Math.PI * 56;
  const dash = circumference * (overallPct / 100);

  async function cycleStatus(subjectId, idx) {
    const key = topicKey(subjectId, idx);
    const current = progress[key] || 'not_started';
    const next = STATUS_ORDER[(STATUS_ORDER.indexOf(current) + 1) % STATUS_ORDER.length];

    setProgress((p) => ({ ...p, [key]: next }));

    const { error } = await supabase.from('topic_progress').upsert(
      {
        user_id: userId,
        subject_id: subjectId,
        topic_idx: idx,
        status: next,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,subject_id,topic_idx' }
    );

    if (error) {
      // Roll back on failure
      setProgress((p) => ({ ...p, [key]: current }));
      console.error('Failed to save progress', error);
    }
  }

  const legendItems = [
    ['mastered', 'Mastered', '#1B2230'],
    ['in_progress', 'In Progress', 'var(--amber)'],
    ['relearning', 'Relearning', 'var(--rose)'],
    ['not_started', 'Not Started', 'var(--ink-faint)'],
  ];

  return (
    <>
      <section className="hero">
        <div className="ring-wrap">
          <svg viewBox="0 0 132 132">
            <circle cx="66" cy="66" r="56" stroke="var(--track)" strokeWidth="12" fill="none" />
            <circle
              cx="66"
              cy="66"
              r="56"
              stroke="#1B2230"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${dash.toFixed(1)} ${circumference.toFixed(1)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="ring-center">
            <div className="num">{overallPct}%</div>
            <div className="lbl">Mastered</div>
          </div>
        </div>
        <div className="hero-stats">
          <h2>Overall Coverage</h2>
          <p className="sub">
            {totalTopics} topics across {SUBJECTS.length} subjects
          </p>
          <div className="stat-row">
            {legendItems.map(([key, label, color]) => (
              <div className="stat-chip" key={key}>
                <span className="swatch" style={{ background: color }} />
                <span className="val">{totals[key]}</span>
                <span className="cap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid">
        {SUBJECTS.map((subject) => {
          const counts = subjectCounts(subject, progress);
          const total = subject.topics.length;
          const p = pct(counts);
          const isOpen = !!openCards[subject.id];
          const segWidth = (n) => `${((n / total) * 100).toFixed(2)}%`;

          return (
            <div className={`card ${isOpen ? 'open' : ''}`} key={subject.id}>
              <div
                className="card-head"
                onClick={() => setOpenCards((o) => ({ ...o, [subject.id]: !o[subject.id] }))}
              >
                <div className="card-top">
                  <h3 className="card-title" style={{ color: subject.accent }}>
                    {subject.short}
                    <small style={{ color: 'var(--ink-soft)' }}>{subject.name}</small>
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="card-pct" style={{ color: subject.accent }}>
                      {p}%
                    </span>
                    <svg
                      className="card-chevron"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-seg"
                    style={{ width: segWidth(counts.mastered), background: subject.accent }}
                  />
                  <div
                    className="bar-seg"
                    style={{ width: segWidth(counts.in_progress), background: 'var(--amber)' }}
                  />
                  <div
                    className="bar-seg"
                    style={{ width: segWidth(counts.relearning), background: 'var(--rose)' }}
                  />
                </div>
                <div className="bar-legend">
                  <span>
                    <i style={{ background: subject.accent }} />
                    {counts.mastered} mastered
                  </span>
                  <span>
                    <i style={{ background: 'var(--amber)' }} />
                    {counts.in_progress} in progress
                  </span>
                  <span>
                    <i style={{ background: 'var(--rose)' }} />
                    {counts.relearning} relearning
                  </span>
                  <span>
                    <i style={{ background: 'var(--ink-faint)' }} />
                    {counts.not_started} not started
                  </span>
                </div>
                <PulseStrip color={subject.accent} seed={total} />
              </div>

              <div className="topics">
                <div className="topics-inner">
                  {subject.topics.map((t, idx) => {
                    const key = topicKey(subject.id, idx);
                    const status = progress[key] || 'not_started';
                    const meta = STATUS_META[status];
                    const bg = status === 'mastered' ? subject.accent : meta.bg;
                    const text = status === 'mastered' ? '#fff' : meta.text;
                    return (
                      <div className="topic-row" key={key}>
                        <span className="topic-name">{t}</span>
                        <button
                          className="status-btn"
                          style={{ background: bg, color: text }}
                          onClick={(e) => {
                            e.stopPropagation();
                            cycleStatus(subject.id, idx);
                          }}
                        >
                          <span className="ic">{meta.icon}</span>
                          {meta.label}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
