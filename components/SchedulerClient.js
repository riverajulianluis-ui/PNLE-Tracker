'use client';

import { useMemo, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { SUBJECTS, DAYS, TIME_SLOTS } from '@/lib/subjects';

export default function SchedulerClient({ initialSchedule, userId }) {
  const [schedule, setSchedule] = useState(initialSchedule || {});
  const [activeBrush, setActiveBrush] = useState(null);
  const supabase = useMemo(() => createClient(), []);

  function isActiveBrush(kind, arg) {
    if (!activeBrush) return false;
    if (kind === 'eraser') return activeBrush.kind === 'eraser';
    if (kind === 'subject') return activeBrush.kind === 'subject' && activeBrush.subjectId === arg;
    if (kind === 'fixed') return activeBrush.kind === 'fixed' && activeBrush.label === arg;
    return false;
  }

  async function paintCell(day, hour) {
    if (!activeBrush) return;
    const key = `${day}-${hour}`;
    const previous = schedule[key];

    if (activeBrush.kind === 'eraser') {
      setSchedule((s) => {
        const next = { ...s };
        delete next[key];
        return next;
      });
      const { error } = await supabase
        .from('schedule_blocks')
        .delete()
        .eq('user_id', userId)
        .eq('day', day)
        .eq('hour', hour);
      if (error) {
        setSchedule((s) => ({ ...s, [key]: previous }));
        console.error('Failed to clear cell', error);
      }
      return;
    }

    const cellValue =
      activeBrush.kind === 'subject'
        ? { kind: 'subject', subjectId: activeBrush.subjectId }
        : { kind: 'fixed', label: activeBrush.label };

    setSchedule((s) => ({ ...s, [key]: cellValue }));

    const { error } = await supabase.from('schedule_blocks').upsert(
      {
        user_id: userId,
        day,
        hour,
        kind: cellValue.kind,
        subject_id: cellValue.kind === 'subject' ? cellValue.subjectId : null,
        label: cellValue.kind === 'fixed' ? cellValue.label : null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,day,hour' }
    );

    if (error) {
      setSchedule((s) => ({ ...s, [key]: previous }));
      console.error('Failed to save cell', error);
    }
  }

  async function clearSchedule() {
    if (!confirm('Clear your entire weekly schedule?')) return;
    const previous = schedule;
    setSchedule({});
    const { error } = await supabase.from('schedule_blocks').delete().eq('user_id', userId);
    if (error) {
      setSchedule(previous);
      console.error('Failed to clear schedule', error);
    }
  }

  return (
    <section className="sched-wrap">
      <div className="sched-head">
        <div>
          <h2>Weekly Study Blocks</h2>
          <p>Pick a color below, then click cells to paint your schedule.</p>
        </div>
      </div>

      <div className="palette">
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            className={`brush ${isActiveBrush('subject', s.id) ? 'active' : ''}`}
            onClick={() => setActiveBrush({ kind: 'subject', subjectId: s.id })}
          >
            <span className="sw" style={{ background: s.accent }} />
            {s.short}
          </button>
        ))}
        <button
          className={`brush ${isActiveBrush('fixed', 'Break / Personal') ? 'active' : ''}`}
          onClick={() => setActiveBrush({ kind: 'fixed', label: 'Break / Personal' })}
        >
          <span className="sw" style={{ background: '#B7BFCB' }} />
          Break / Personal
        </button>
        <button
          className={`brush ${isActiveBrush('fixed', 'Flashcards') ? 'active' : ''}`}
          onClick={() => setActiveBrush({ kind: 'fixed', label: 'Flashcards' })}
        >
          <span className="sw" style={{ background: '#2E2E2E' }} />
          Flashcards
        </button>
        <button
          className={`brush ${isActiveBrush('eraser') ? 'active' : ''}`}
          onClick={() => setActiveBrush({ kind: 'eraser' })}
        >
          <span className="sw" style={{ background: '#fff', border: '1px solid var(--border)' }} />
          Eraser
        </button>
      </div>

      <div className="sched-grid">
        <div />
        {DAYS.map((d) => (
          <div className="day-lbl" key={d}>
            {d}
          </div>
        ))}
        {TIME_SLOTS.map((h) => {
          const label = (h % 12 === 0 ? 12 : h % 12) + (h < 12 ? 'am' : 'pm');
          return (
            <div key={h} style={{ display: 'contents' }}>
              <div className="time-lbl">{label}</div>
              {DAYS.map((d) => {
                const key = `${d}-${h}`;
                const cell = schedule[key];
                let style = {};
                let cellLabel = '';
                if (cell) {
                  if (cell.kind === 'subject') {
                    const subj = SUBJECTS.find((s) => s.id === cell.subjectId);
                    style = {
                      background: subj.soft,
                      color: subj.accent,
                      borderColor: `${subj.accent}44`,
                    };
                    cellLabel = subj.short;
                  } else {
                    style = { background: '#F0F1F3', color: '#2E2E2E' };
                    cellLabel = cell.label.length > 10 ? cell.label.split(' ')[0] : cell.label;
                  }
                }
                return (
                  <div
                    key={key}
                    className={`sched-cell ${cell ? 'filled' : ''}`}
                    style={style}
                    onClick={() => paintCell(d, h)}
                  >
                    {cellLabel}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="sched-actions">
        <button className="ghost-btn" onClick={clearSchedule}>
          Clear schedule
        </button>
      </div>
    </section>
  );
}
