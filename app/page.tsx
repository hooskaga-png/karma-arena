import { AppShell } from '@/components/app-shell';
import { featuredMatches, recentChallenges, rankings, tournaments, walletSummary } from '@/lib/mock-data';
import Link from 'next/link';
import { ArrowRight, Bell, ChevronRight, Coins, Crown, Flame, Gamepad2, MapPin, ShieldCheck, Sparkles, Swords, Trophy, Users } from 'lucide-react';

const dashboardCards = [
  { title: 'Karma Football', href: '/football', icon: Swords, description: '1v1 matches and challenge invites', accent: 'from-brand-500 to-teal-500' },
  { title: 'Tournaments', href: '/tournaments', icon: Trophy, description: 'Join elite competitions and brackets', accent: 'from-brand-700 to-brand-500' },
  { title: 'Sports', href: '/sports', icon: Flame, description: 'Live fixtures and match info', accent: 'from-cyan-500 to-sky-500' },
  { title: 'Wallet', href: '/wallet', icon: Coins, description: 'Balance, rewards and transactions', accent: 'from-amber-400 to-yellow-500' },
  { title: 'Friends', href: '/friends', icon: Users, description: 'Invite players and track status', accent: 'from-emerald-500 to-teal-500' },
  { title: 'Rankings', href: '/rankings', icon: Crown, description: 'Global and country leaderboards', accent: 'from-indigo-500 to-violet-500' },
];

export default function HomePage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5 md:p-6'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <div className='flex items-center gap-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-xl font-bold text-brand-700'>KA</div>
              <div>
                <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>KARMA ARENA</p>
                <h1 className='text-2xl font-black text-slate-900'>Welcome back, Amina</h1>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700'>
                <MapPin className='h-4 w-4 text-brand-700' />
                Nairobi, KE
              </div>
              <button className='relative rounded-full bg-slate-100 p-3 text-slate-700'>
                <Bell className='h-5 w-5' />
                <span className='absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-amber-400' />
              </button>
            </div>
          </div>

          <div className='mt-5 grid gap-4 md:grid-cols-[1.5fr_1fr]'>
            <div className='rounded-[28px] bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 p-5 text-white'>
              <div className='flex items-center justify-between'>
                <span className='rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]'>Karma Coins</span>
                <Sparkles className='h-5 w-5 text-amber-200' />
              </div>
              <div className='mt-5 flex items-end justify-between'>
                <div>
                  <p className='text-sm text-brand-100'>Current balance</p>
                  <p className='mt-2 text-4xl font-black'>12,480</p>
                </div>
                <button className='rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-slate-900'>Top up</button>
              </div>
              <div className='mt-4 flex items-center gap-3 text-sm text-brand-100'>
                <ShieldCheck className='h-4 w-4' />
                Protected virtual wallet • sandbox ready
              </div>
            </div>

            <div className='rounded-[28px] bg-slate-900 p-5 text-white'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-slate-300'>Rank</span>
                <span className='rounded-full bg-amber-300 px-2.5 py-1 text-xs font-bold text-slate-900'>#128</span>
              </div>
              <p className='mt-6 text-3xl font-black'>7,620 XP</p>
              <p className='mt-2 text-sm text-slate-300'>Next tier: Emerald • 380 XP to unlock</p>
              <div className='mt-4 h-2.5 overflow-hidden rounded-full bg-white/10'>
                <div className='h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-amber-300' />
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {dashboardCards.map(({ title, href, icon: Icon, description, accent }) => (
            <Link key={title} href={href} className='group card p-4 transition hover:-translate-y-0.5 hover:shadow-xl'>
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white`}>
                <Icon className='h-5 w-5' />
              </div>
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <h2 className='text-lg font-bold text-slate-900'>{title}</h2>
                  <p className='mt-1 text-sm text-slate-600'>{description}</p>
                </div>
                <ChevronRight className='mt-1 h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-700' />
              </div>
            </Link>
          ))}
        </div>

        <div className='grid gap-4 xl:grid-cols-[1.4fr_0.8fr]'>
          <div className='card p-4 md:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>Featured matches</p>
                <h3 className='mt-2 text-xl font-bold text-slate-900'>Live football picks</h3>
              </div>
              <Link href='/sports' className='text-sm font-semibold text-brand-700'>View all</Link>
            </div>
            <div className='space-y-3'>
              {featuredMatches.map((match) => (
                <div key={match.id} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-black text-brand-700'>{match.home.slice(0, 2)}</div>
                    <div>
                      <p className='font-bold text-slate-900'>{match.home} vs {match.away}</p>
                      <p className='text-xs text-slate-500'>{match.league} • {match.time}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='text-lg font-black text-slate-900'>{match.score}</p>
                    <p className='text-[10px] uppercase tracking-[0.2em] text-emerald-600'>{match.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='card p-4 md:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-xl font-bold text-slate-900'>Daily challenges</h3>
              <span className='rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700'>3 active</span>
            </div>
            <div className='space-y-3'>
              {recentChallenges.map((challenge) => (
                <div key={challenge.title} className='rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-semibold text-slate-900'>{challenge.title}</p>
                      <p className='text-xs text-slate-500'>{challenge.progress}% complete</p>
                    </div>
                    <span className='text-sm font-bold text-brand-700'>{challenge.reward}</span>
                  </div>
                  <div className='mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200'>
                    <div className='h-full rounded-full bg-gradient-to-r from-brand-500 to-amber-400' style={{ width: `${challenge.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='grid gap-4 xl:grid-cols-[1.1fr_0.9fr]'>
          <div className='card p-4 md:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>Tournaments</p>
                <h3 className='mt-2 text-xl font-bold text-slate-900'>Upcoming competitions</h3>
              </div>
              <Link href='/tournaments' className='text-sm font-semibold text-brand-700'>Open bracket</Link>
            </div>
            <div className='space-y-3'>
              {tournaments.map((tournament) => (
                <div key={tournament.name} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div>
                    <p className='font-bold text-slate-900'>{tournament.name}</p>
                    <p className='text-xs text-slate-500'>{tournament.format} • {tournament.entries} teams</p>
                  </div>
                  <div className='text-right'>
                    <span className='inline-flex rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700'>{tournament.status}</span>
                    <p className='mt-2 text-xs text-slate-500'>Starts {tournament.startsIn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='card p-4 md:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-xl font-bold text-slate-900'>Recent activity</h3>
              <Link href='/wallet' className='text-sm font-semibold text-brand-700'>See all</Link>
            </div>
            <div className='space-y-3'>
              {walletSummary.slice(0, 4).map((item) => (
                <div key={item.label} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div>
                    <p className='font-semibold text-slate-900'>{item.label}</p>
                    <p className='text-xs text-slate-500'>{item.meta}</p>
                  </div>
                  <div className='text-right'>
                    <p className={`font-bold ${item.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'}`}>{item.amount}</p>
                    <p className='text-[10px] uppercase tracking-[0.15em] text-slate-400'>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='grid gap-4 lg:grid-cols-[0.8fr_1.2fr]'>
          <div className='card p-4 md:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-xl font-bold text-slate-900'>Friends online</h3>
              <Link href='/friends' className='text-sm font-semibold text-brand-700'>View all</Link>
            </div>
            <div className='space-y-3'>
              {['Zuri', 'Tariq', 'Nia', 'Liam'].map((friend, index) => (
                <div key={friend} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-300 text-sm font-bold text-brand-700'>{friend.slice(0, 1)}</div>
                    <div>
                      <p className='font-semibold text-slate-900'>{friend}</p>
                      <p className='text-xs text-slate-500'>Ready for a challenge</p>
                    </div>
                  </div>
                  <span className='h-2.5 w-2.5 rounded-full bg-emerald-500' />
                </div>
              ))}
            </div>
          </div>

          <div className='card p-4 md:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>Players</p>
                <h3 className='mt-2 text-xl font-bold text-slate-900'>Leaderboard snapshot</h3>
              </div>
              <Link href='/rankings' className='text-sm font-semibold text-brand-700'>Full board</Link>
            </div>
            <div className='space-y-3'>
              {rankings.slice(0, 4).map((player) => (
                <div key={player.name} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white'>{player.rank}</div>
                    <div>
                      <p className='font-bold text-slate-900'>{player.name}</p>
                      <p className='text-xs text-slate-500'>{player.country}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='font-black text-slate-900'>{player.points}</p>
                    <p className='text-[10px] uppercase tracking-[0.2em] text-brand-600'>pts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='card p-4 md:p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='text-xl font-bold text-slate-900'>Announcements</h3>
            <div className='flex items-center gap-2 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700'>
              <Gamepad2 className='h-3.5 w-3.5' />
              Community update
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-3'>
            {[{ title: 'Regional Cup Launch', detail: 'Top 8 players from East Africa will qualify to the round-robin stage.' }, { title: 'Rewards reset', detail: 'Daily challenge rewards refresh every 00:00 UTC.' }, { title: 'Provider status', detail: 'Live sports data currently using sample and provider-ready data mode.' }].map((item) => (
              <div key={item.title} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <p className='font-bold text-slate-900'>{item.title}</p>
                <p className='mt-2 text-sm text-slate-600'>{item.detail}</p>
                <button className='mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700'>Read more <ArrowRight className='h-4 w-4' /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
