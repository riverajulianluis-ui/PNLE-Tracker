import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import SubjectClient from '@/components/SubjectClient';
import { SUBJECTS } from '@/lib/subjects';

export default async function SubjectPage({ params }) {
  const { slug } = await params;
  const subject = SUBJECTS.find((s) => s.id === slug);
  if (!subject) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: rows } = await supabase
    .from('topic_progress')
    .select('subject_id, topic_idx, status')
    .eq('user_id', user.id)
    .eq('subject_id', slug);

  const initialProgress = {};
  (rows || []).forEach((r) => {
    initialProgress[`${r.subject_id}::${r.topic_idx}`] = r.status;
  });

  return (
    <div className="shell">
      <Header active="dashboard" userEmail={user.email} />
      <SubjectClient subject={subject} initialProgress={initialProgress} userId={user.id} />
    </div>
  );
}
