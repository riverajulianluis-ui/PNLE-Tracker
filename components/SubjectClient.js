'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { STATUS_ORDER, STATUS_META } from '@/lib/subjects';

function topicKey(subjectId, idx) {
  return `${subjectId}::${idx}`;
}

export default function SubjectClient({ subject, initialProgress, userId }) {
  const [progress, setProgress] = useState(initialProgress || {});
  const supabase = useMemo(() => createClient(), []);

  const counts = { not_started: 0, in_progress: 0, mastered: 0, relearning: 0 };
  subject.topics.forEach((_, idx) => {
    const st = progress[topicKey(subject.id, idx)] || 'not_started';
    counts[st]++;
  });
  const total = subject.topics.length || 1;
  const masteredPct = Math.round((counts.mastered / total) * 100);

  async function cycleStatus(idx) {
    const key = topicKey(subject.id, idx);
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
            {counts.mastered} of {subject.topics.length} topics mastered
          </p>
        </div>
        <div className="subject-pct" style={{ color: subject.accent }}>
          {masteredPct}%
        </div>
      </section>

      <div className="bar-track" style={{ marginBottom: 24 }}>
        <div
          className="bar-seg"
          style={{ width: `${(counts.mastered / total) * 100}%`, background: subject.accent }}
        />
        <div
          className="bar-seg"
          style={{ width: `${(counts.in_progress / total) * 100}%`, background: 'var(--amber)' }}
        />
        <div
          className="bar-seg"
          style={{ width: `${(counts.relearning / total) * 100}%`, background: 'var(--rose)' }}
        />
      </div>

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
                onClick={() => cycleStatus(idx)}
              >
                <span className="ic">{meta.icon}</span>
                {meta.label}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
