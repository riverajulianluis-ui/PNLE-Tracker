'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { SUBJECTS, STATUS_ORDER } from '@/lib/subjects';

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

export default function DashboardClient({ initialProgress }) {
  const progress = initialProgress || {};

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
          const segWidth = (n) => `${((n / total) * 100).toFixed(2)}%`;

          return (
            <Link href={`/subject/${subject.id}`} className="card" key={subject.id}>
              <div className="card-head">
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
                        d="M9 6l6 6-6 6"
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
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
