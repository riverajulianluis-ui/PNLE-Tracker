import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import DashboardClient from '@/components/DashboardClient';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: rows } = await supabase
    .from('topic_progress')
    .select('subject_id, topic_idx, status')
    .eq('user_id', user.id);

  const { data: weeklyRows } = await supabase
    .from('week_topic_progress')
    .select('topic_id, status')
    .eq('user_id', user.id);

  const initialProgress = {};
  (rows || []).forEach((r) => {
    initialProgress[`${r.subject_id}::${r.topic_idx}`] = r.status;
  });
  (weeklyRows || []).forEach((r) => {
    initialProgress[r.topic_id] = r.status;
  });

  return (
    <div className="shell">
      <Header active="dashboard" userEmail={user.email} />
      <DashboardClient initialProgress={initialProgress} userId={user.id} />
      <footer className="note">Your progress is private and saved to your account.</footer>
    </div>
  );
}
