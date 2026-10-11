import { AppShell } from '@/components/app-shell';
import { Medal, Trophy, Users } from 'lucide-react';

const rankings = [
  { rank: 1, name: 'Ayo K.', country: 'Nigeria', points: '9,820' },
  { rank: 2, name: 'Nabir A.', country: 'Kenya', points: '9,240' },
  { rank: 3, name: 'Miroslav', country: 'South Africa', points: '8,905' },
  { rank: 4, name: 'Amina D.', country: 'Ethiopia', points: '8,420' },
  { rank: 5, name: 'Khalid', country: 'Somalia', points: '7,980' },
];

export default function RankingsPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Rankings</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Global leaderboard</h1>
            </div>
            <div className='rounded-full bg-brand-100 px-3 py-2 text-sm font-bold text-brand-700'>Weekly reset</div>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {[
            { label: 'Global rank', value: '#128', icon: Trophy },
            { label: 'Country rank', value: '#12', icon: Medal },
            { label: 'Friends rank', value: '#7', icon: Users },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className='card p-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700'>
                <Icon className='h-5 w-5' />
              </div>
              <p className='mt-4 text-sm text-slate-500'>{label}</p>
              <p className='mt-2 text-3xl font-black text-slate-900'>{value}</p>
            </div>
          ))}
        </div>

        <div className='card p-5'>
          <h2 className='text-xl font-bold text-slate-900'>Leaderboard table</h2>
          <div className='mt-4 overflow-hidden rounded-2xl border border-slate-200'>
            <table className='min-w-full text-left text-sm'>
              <thead className='bg-slate-50 text-slate-600'>
                <tr>
                  <th className='px-4 py-3 font-semibold'>Rank</th>
                  <th className='px-4 py-3 font-semibold'>Player</th>
                  <th className='px-4 py-3 font-semibold'>Country</th>
                  <th className='px-4 py-3 font-semibold'>Points</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((player) => (
                  <tr key={player.name} className='border-t border-slate-200'>
                    <td className='px-4 py-3 font-bold text-slate-900'>#{player.rank}</td>
                    <td className='px-4 py-3 font-semibold text-slate-900'>{player.name}</td>
                    <td className='px-4 py-3 text-slate-600'>{player.country}</td>
                    <td className='px-4 py-3 font-black text-slate-900'>{player.points}</td>
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
