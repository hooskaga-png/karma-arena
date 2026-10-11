import { Flag, Gauge, ShieldAlert, Trophy, Users, Zap } from 'lucide-react';
import { AppShell } from '@/components/app-shell';

const challengeCards = [
  { title: 'Friendly match', detail: 'Invite a friend for a casual 1v1 fixture', badge: 'Ready', icon: Users },
  { title: 'Season ladder', detail: 'Earn points and climb the regional ladder', badge: 'Live', icon: Trophy },
  { title: 'Secure verify', detail: 'Match results require authorized validation', badge: 'Protected', icon: ShieldAlert },
  { title: 'Quick play', detail: 'Jump in for short challenge rounds', badge: 'Fast', icon: Zap },
];

const matchHistory = [
  { opponent: 'Liam', result: 'Win', value: '+120', status: 'Verified' },
  { opponent: 'Nia', result: 'Loss', value: '-50', status: 'Updated' },
  { opponent: 'Tariq', result: 'Draw', value: '+10', status: 'Closed' },
  { opponent: 'Mina', result: 'Win', value: '+300', status: 'Verified' },
];

export default function FootballPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Karma football</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>1v1 match arena</h1>
            </div>
            <button className='rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white'>Create challenge</button>
          </div>

          <div className='mt-5 grid gap-4 md:grid-cols-4'>
            {challengeCards.map(({ title, detail, badge, icon: Icon }) => (
              <div key={title} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm'>
                  <Icon className='h-5 w-5' />
                </div>
                <p className='mt-4 text-lg font-bold text-slate-900'>{title}</p>
                <p className='mt-2 text-sm text-slate-600'>{detail}</p>
                <span className='mt-3 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700'>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-4 xl:grid-cols-[1.2fr_0.8fr]'>
          <div className='card p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-slate-900'>Challenge queue</h2>
              <button className='tab-button'>Invite friend</button>
            </div>
            <div className='space-y-3'>
              {[
                { user: 'Liam', mode: 'Classic 3x3', stake: '120 coins', time: 'Today • 19:30', status: 'Scheduled' },
                { user: 'Nia', mode: 'Pro Cup', stake: '250 coins', time: 'Tomorrow • 07:00', status: 'Awaiting response' },
                { user: 'Tariq', mode: 'Friendly Run', stake: '80 coins', time: 'Sat • 18:15', status: 'Open' },
              ].map((match) => (
                <div key={match.user} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div>
                    <p className='font-bold text-slate-900'>{match.user}</p>
                    <p className='text-xs text-slate-500'>{match.mode} • {match.stake}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xs text-slate-500'>{match.time}</p>
                    <span className='mt-2 inline-flex rounded-full bg-brand-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700'>{match.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='card p-5'>
            <h2 className='text-xl font-bold text-slate-900'>Match summary</h2>
            <div className='mt-4 space-y-4'>
              <div className='rounded-2xl bg-brand-50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Wins</p>
                <p className='mt-3 text-3xl font-black text-slate-900'>38</p>
              </div>
              <div className='rounded-2xl bg-slate-50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Losses</p>
                <p className='mt-3 text-3xl font-black text-slate-900'>12</p>
              </div>
              <div className='rounded-2xl bg-amber-50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-amber-700'>Draws</p>
                <p className='mt-3 text-3xl font-black text-slate-900'>6</p>
              </div>
            </div>
          </div>
        </div>

        <div className='card p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-bold text-slate-900'>Match history</h2>
            <button className='tab-button'>Report dispute</button>
          </div>
          <div className='overflow-hidden rounded-2xl border border-slate-200'>
            <table className='min-w-full text-left text-sm'>
              <thead className='bg-slate-50 text-slate-600'>
                <tr>
                  <th className='px-4 py-3 font-semibold'>Opponent</th>
                  <th className='px-4 py-3 font-semibold'>Result</th>
                  <th className='px-4 py-3 font-semibold'>Coins</th>
                  <th className='px-4 py-3 font-semibold'>Status</th>
                </tr>
              </thead>
              <tbody>
                {matchHistory.map((match) => (
                  <tr key={match.opponent} className='border-t border-slate-200'>
                    <td className='px-4 py-3 font-medium text-slate-900'>{match.opponent}</td>
                    <td className='px-4 py-3'>
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-bold ${match.result === 'Win' ? 'bg-emerald-100 text-emerald-700' : match.result === 'Loss' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                        {match.result}
                      </span>
                    </td>
                    <td className='px-4 py-3 font-bold text-slate-900'>{match.value}</td>
                    <td className='px-4 py-3 text-slate-600'>{match.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
