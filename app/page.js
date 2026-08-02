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

  if (weekly) {
    const { data: rows } = await supabase
      .from('week_topic_progress')
      .select('topic_id, status')
      .eq('user_id', user.id)
      .eq('subject_id', slug);
    (rows || []).forEach((r) => {
      initialProgress[r.topic_id] = r.status;
    });

    const { data: goalRows } = await supabase
      .from('week_goals')
      .select('week_number, done')
      .eq('user_id', user.id)
      .eq('subject_id', slug);
    (goalRows || []).forEach((r) => {
      initialWeekGoals[r.week_number] = r.done;
    });
  } else {
    const { data: rows } = await supabase
      .from('topic_progress')
      .select('subject_id, topic_idx, status')
      .eq('user_id', user.id)
      .eq('subject_id', slug);
    (rows || []).forEach((r) => {
      initialProgress[`${r.subject_id}::${r.topic_idx}`] = r.status;
    });
  }

  return (
    <div className="shell">
      <Header active="dashboard" userEmail={user.email} />
      <SubjectClient
        subject={subject}
        initialProgress={initialProgress}
        initialWeekGoals={initialWeekGoals}
        userId={user.id}
      />
      <footer className="note">Your progress is private and saved to your account.</footer>
      <Credits />
    </div>
  );
}
