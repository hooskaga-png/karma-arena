import { AppShell } from '@/components/app-shell';
import { CalendarClock, MapPinned, Search, ShieldCheck, Star } from 'lucide-react';

const fixtures = [
  { league: 'Premier League', home: 'Manchester City', away: 'Arsenal', kickOff: '18:30', status: 'Live' },
  { league: 'CAF Champions League', home: 'Mamelodi', away: 'Al Ahly', kickOff: '19:00', status: 'Upcoming' },
  { league: 'La Liga', home: 'Real Madrid', away: 'Barcelona', kickOff: '21:00', status: 'Scheduled' },
];

export default function SportsPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Sports center</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Live fixtures & stats</h1>
            </div>
            <div className='flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2'>
              <Search className='h-4 w-4 text-slate-400' />
              <input className='w-40 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400' placeholder='Search fixture' />
            </div>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {fixtures.map((fixture) => (
            <div key={`${fixture.home}-${fixture.away}`} className='card p-4'>
              <div className='flex items-center justify-between'>
                <span className='rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700'>{fixture.status}</span>
                <Star className='h-4 w-4 text-amber-400' />
              </div>
              <div className='mt-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>{fixture.league}</p>
                <div className='mt-3 space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span className='font-bold text-slate-900'>{fixture.home}</span>
                    <span className='text-sm text-slate-500'>2</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='font-bold text-slate-900'>{fixture.away}</span>
                    <span className='text-sm text-slate-500'>1</span>
                  </div>
                </div>
                <div className='mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm text-slate-600'>
                  <span className='flex items-center gap-2'><CalendarClock className='h-4 w-4' /> {fixture.kickOff}</span>
                  <span className='flex items-center gap-2'><MapPinned className='h-4 w-4' /> Local time</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='card p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-bold text-slate-900'>Supported sports</h2>
            <span className='inline-flex items-center gap-2 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700'>
              <ShieldCheck className='h-3 w-3' /> Provider-ready
            </span>
          </div>
          <div className='grid gap-3 md:grid-cols-4'>
            {['Football', 'Basketball', 'Esports', 'Cricket'].map((sport) => (
              <div key={sport} className='rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center'>
                <p className='text-base font-bold text-slate-900'>{sport}</p>
                <p className='mt-1 text-sm text-slate-500'>Sample / API-ready</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
