import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import SchedulerClient from '@/components/SchedulerClient';

export default async function SchedulerPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: rows } = await supabase
    .from('schedule_blocks')
    .select('day, hour, kind, subject_id, label')
    .eq('user_id', user.id);

  const initialSchedule = {};
  (rows || []).forEach((r) => {
    initialSchedule[`${r.day}-${r.hour}`] =
      r.kind === 'subject'
        ? { kind: 'subject', subjectId: r.subject_id }
        : { kind: 'fixed', label: r.label };
  });

  return (
    <div className="shell">
      <Header active="scheduler" userEmail={user.email} />
      <SchedulerClient initialSchedule={initialSchedule} userId={user.id} />
      <footer className="note">Your schedule is private and saved to your account.</footer>
    </div>
  );
}
