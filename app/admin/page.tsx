import { AppShell } from '@/components/app-shell';
import { Activity, BarChart3, ShieldCheck, Users } from 'lucide-react';

const stats = [
  { label: 'Active users', value: '48.2k' },
  { label: 'Tournaments', value: '182' },
  { label: 'Disputes resolved', value: '96%' },
  { label: 'System health', value: '99.9%' },
];

const audit = [
  { title: 'User support queue', detail: '18 tickets pending review' },
  { title: 'Reward configuration', detail: '3 new challenge packs enabled' },
  { title: 'Sports provider', detail: 'Data feed in read-only sample mode' },
  { title: 'Audit log', detail: '12 actions recorded in the last 24 hours' },
];

export default function AdminPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Admin control</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Operations dashboard</h1>
            </div>
            <span className='inline-flex items-center gap-2 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700'>
              <ShieldCheck className='h-3 w-3' /> Secured
            </span>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-4'>
          {stats.map((item) => (
            <div key={item.label} className='card p-4'>
              <p className='text-sm text-slate-500'>{item.label}</p>
              <p className='mt-3 text-3xl font-black text-slate-900'>{item.value}</p>
            </div>
          ))}
        </div>

        <div className='grid gap-4 xl:grid-cols-[1.1fr_0.9fr]'>
          <div className='card p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-slate-900'>Operations center</h2>
              <BarChart3 className='h-5 w-5 text-brand-700' />
            </div>
            <div className='space-y-3'>
              {audit.map((item) => (
                <div key={item.title} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                  <p className='font-bold text-slate-900'>{item.title}</p>
                  <p className='mt-1 text-sm text-slate-600'>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='card p-5'>
            <h2 className='text-xl font-bold text-slate-900'>Moderation</h2>
            <div className='mt-4 space-y-3'>
              {['User suspension requests', 'Tourney result approval', 'Fraud review queue', 'Reward approval'].map((action) => (
                <div key={action} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <span className='font-medium text-slate-800'>{action}</span>
                  <button className='rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-700'>Review</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
