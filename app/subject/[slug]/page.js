import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import SubjectClient from '@/components/SubjectClient';
import Credits from '@/components/Credits';
import { SUBJECTS } from '@/lib/subjects';
import { WEEKLY_CONTENT } from '@/lib/weeklyContent';

export default async function SubjectPage({ params }) {
  const { slug } = await params;
  const subject = SUBJECTS.find((s) => s.id === slug);
  if (!subject) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const weekly = WEEKLY_CONTENT[slug];
  const initialProgress = {};
  const initialWeekGoals = {};
  const initialNotes = {};

  const notesQuery = supabase
    .from('topic_notes')
    .select('topic_key, note')
    .eq('user_id', user.id)
    .eq('subject_id', slug);

  if (weekly) {
    const [{ data: rows }, { data: goalRows }, { data: noteRows }] = await Promise.all([
      supabase
        .from('week_topic_progress')
        .select('topic_id, status')
        .eq('user_id', user.id)
        .eq('subject_id', slug),
      supabase
        .from('week_goals')
        .select('week_number, done')
        .eq('user_id', user.id)
        .eq('subject_id', slug),
      notesQuery,
    ]);
    (rows || []).forEach((r) => {
      initialProgress[r.topic_id] = r.status;
    });
    (goalRows || []).forEach((r) => {
      initialWeekGoals[r.week_number] = r.done;
    });
    (noteRows || []).forEach((r) => {
      initialNotes[r.topic_key] = r.note;
    });
  } else {
    const [{ data: rows }, { data: noteRows }] = await Promise.all([
      supabase
        .from('topic_progress')
        .select('subject_id, topic_idx, status')
        .eq('user_id', user.id)
        .eq('subject_id', slug),
      notesQuery,
    ]);
    (rows || []).forEach((r) => {
      initialProgress[`${r.subject_id}::${r.topic_idx}`] = r.status;
    });
    (noteRows || []).forEach((r) => {
      initialNotes[r.topic_key] = r.note;
    });
  }

  return (
    <div className="shell">
      <Header active="dashboard" userEmail={user.email} />
      <SubjectClient
        subject={subject}
        initialProgress={initialProgress}
        initialWeekGoals={initialWeekGoals}
        initialNotes={initialNotes}
        userId={user.id}
      />
      <footer className="note">Your progress is private and saved to your account.</footer>
      <Credits />
    </div>
  );
}
