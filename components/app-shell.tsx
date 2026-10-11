import Link from 'next/link';
import { BarChart3, Coins, Gamepad2, ShieldCheck, Swords, Trophy, Users } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Dashboard', icon: BarChart3 },
  { href: '/football', label: 'Football', icon: Swords },
  { href: '/tournaments', label: 'Tournaments', icon: Trophy },
  { href: '/sports', label: 'Sports', icon: Gamepad2 },
  { href: '/wallet', label: 'Wallet', icon: Coins },
  { href: '/friends', label: 'Friends', icon: Users },
  { href: '/rankings', label: 'Rankings', icon: BarChart3 },
  { href: '/admin', label: 'Admin', icon: ShieldCheck },
  { href: '/help', label: 'Help', icon: ShieldCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-[#edf8fd] text-slate-900'>
      <div className='mx-auto max-w-7xl px-4 pb-24 pt-4 md:px-6 lg:px-8'>
        <header className='sticky top-0 z-30 mb-6 rounded-full border border-slate-200 bg-white/80 p-3 shadow-soft backdrop-blur md:p-4'>
          <div className='flex items-center justify-between gap-3'>
            <div className='flex items-center gap-3'>
              <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-lg font-black text-brand-700'>KA</div>
              <div>
                <p className='text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700'>KARMA ARENA</p>
                <p className='text-sm text-slate-600'>Play Your Way.</p>
              </div>
            </div>
            <nav className='hidden items-center gap-2 rounded-full bg-slate-50 p-1 md:flex'>
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} className='nav-pill text-slate-600 hover:bg-white hover:text-brand-700'>
                  <Icon className='h-4 w-4' />
                  {label}
                </Link>
              ))}
            </nav>
            <div className='flex items-center gap-2'>
              <button className='rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700'>EN</button>
              <Link href='/login' className='rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white'>Login</Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <nav className='fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 px-3 py-3 shadow-[0_-10px_20px_rgba(15,23,42,0.05)] backdrop-blur md:hidden'>
          <div className='grid grid-cols-5 gap-2'>
            {navItems.slice(0, 5).map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className='flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[10px] font-semibold text-slate-600'>
                <Icon className='h-4 w-4' />
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
