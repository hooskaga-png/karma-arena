import { AppShell } from '@/components/app-shell';
import { Search, Shield, UserPlus, Users } from 'lucide-react';

const friends = [
  { name: 'Zuri', status: 'Online', score: '2,410', actions: 'Challenge' },
  { name: 'Tariq', status: 'In match', score: '2,180', actions: 'Message' },
  { name: 'Nia', status: 'Offline', score: '1,890', actions: 'Invite' },
  { name: 'Liam', status: 'Online', score: '2,980', actions: 'Challenge' },
];

export default function FriendsPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Friends</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Community & invites</h1>
            </div>
            <button className='inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white'>
              <UserPlus className='h-4 w-4' /> Add friend
            </button>
          </div>

          <div className='mt-5 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2'>
            <Search className='h-4 w-4 text-slate-400' />
            <input className='w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400' placeholder='Search username or email' />
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          {friends.map((friend) => (
            <div key={friend.name} className='card p-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-300 text-sm font-black text-brand-700'>{friend.name.slice(0, 1)}</div>
                  <div>
                    <p className='font-bold text-slate-900'>{friend.name}</p>
                    <p className='text-xs text-slate-500'>{friend.status}</p>
                  </div>
                </div>
                <span className={`h-2.5 w-2.5 rounded-full ${friend.status === 'Online' ? 'bg-emerald-500' : friend.status === 'In match' ? 'bg-amber-400' : 'bg-slate-400'}`} />
              </div>
              <div className='mt-4 flex items-center justify-between rounded-2xl bg-slate-50 p-3'>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Rank</p>
                  <p className='mt-1 text-lg font-black text-slate-900'>{friend.score}</p>
                </div>
                <button className='rounded-full bg-brand-100 px-3 py-2 text-sm font-bold text-brand-700'>{friend.actions}</button>
              </div>
            </div>
          ))}
        </div>

        <div className='card p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-bold text-slate-900'>Privacy controls</h2>
            <span className='inline-flex items-center gap-2 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700'><Shield className='h-3 w-3' /> Protected</span>
          </div>
          <div className='grid gap-3 md:grid-cols-3'>
            {['Public profile', 'Friend-only activity', 'Block & report'].map((label) => (
              <div key={label} className='rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800'>{label}</div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
