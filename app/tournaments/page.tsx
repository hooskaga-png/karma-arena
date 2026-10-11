import { AppShell } from '@/components/app-shell';
import { CalendarDays, Flag, Medal, ShieldCheck, Users, Zap } from 'lucide-react';

const tournaments = [
  { name: 'East Africa Prestige Cup', status: 'Registration Open', entries: '24 teams', prize: '1,250 coins', time: 'Starts in 6d' },
  { name: 'KARMA Legends Open', status: 'In Progress', entries: '12 teams', prize: '900 coins', time: 'Quarter finals' },
  { name: 'Weekend Sprint League', status: 'Upcoming', entries: '32 teams', prize: '600 coins', time: 'Starts in 2d' },
];

const bracket = ['QF1', 'QF2', 'SF1', 'Final'];

export default function TournamentsPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Tournaments</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Elite competition board</h1>
            </div>
            <button className='rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white'>Create event</button>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {tournaments.map((item) => (
            <div key={item.name} className='card p-4'>
              <div className='flex items-center justify-between'>
                <span className='rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700'>{item.status}</span>
                <CalendarDays className='h-4 w-4 text-slate-400' />
              </div>
              <h2 className='mt-4 text-lg font-bold text-slate-900'>{item.name}</h2>
              <div className='mt-3 space-y-2 text-sm text-slate-600'>
                <p>{item.entries}</p>
                <p>{item.prize}</p>
                <p>{item.time}</p>
              </div>
              <button className='mt-4 w-full rounded-full bg-brand-100 px-3 py-2 text-sm font-bold text-brand-700'>Register</button>
            </div>
          ))}
        </div>

        <div className='grid gap-4 xl:grid-cols-[1.2fr_0.8fr]'>
          <div className='card p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h2 className='text-xl font-bold text-slate-900'>Bracket preview</h2>
              <button className='tab-button'>View full bracket</button>
            </div>
            <div className='grid gap-3 md:grid-cols-2'>
              {bracket.map((match, index) => (
                <div key={match} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>{match}</p>
                  <div className='mt-3 space-y-2'>
                    <div className='flex items-center justify-between'>
                      <span className='font-semibold text-slate-900'>Apex FC</span>
                      <span className='text-sm text-slate-600'>2</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='font-semibold text-slate-900'>North Stars</span>
                      <span className='text-sm text-slate-600'>1</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='card p-5'>
            <h2 className='text-xl font-bold text-slate-900'>League table</h2>
            <div className='mt-4 space-y-3'>
              {[
                { team: 'Apex FC', points: 18, played: 6 },
                { team: 'North Stars', points: 15, played: 6 },
                { team: 'Harbor United', points: 13, played: 6 },
                { team: 'Crown City', points: 12, played: 6 },
              ].map((team) => (
                <div key={team.team} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div>
                    <p className='font-bold text-slate-900'>{team.team}</p>
                    <p className='text-xs text-slate-500'>{team.played} matches</p>
                  </div>
                  <span className='text-lg font-black text-slate-900'>{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
