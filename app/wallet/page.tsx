import { AppShell } from '@/components/app-shell';
import { ArrowUpRight, CreditCard, Landmark, ShieldCheck, Wallet2 } from 'lucide-react';

const transactions = [
  { label: 'Reward bonus', amount: '+1200', meta: 'Daily challenge • Completed', status: 'Completed' },
  { label: 'Friendly match entry', amount: '-150', meta: 'Virtual coin spend', status: 'Completed' },
  { label: 'Tournament reward', amount: '+500', meta: 'Regional Cup prize', status: 'Pending' },
  { label: 'Wallet top-up', amount: '+2500', meta: 'Sandbox top-up • Demo only', status: 'Sandbox' },
];

export default function WalletPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Wallet</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Karma wallet</h1>
            </div>
            <div className='rounded-full bg-amber-100 px-3 py-2 text-sm font-bold text-amber-700'>Sandbox mode</div>
          </div>

          <div className='mt-5 rounded-[30px] bg-gradient-to-r from-slate-900 to-brand-700 p-5 text-white'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-slate-300'>Virtual balance</p>
                <p className='mt-3 text-4xl font-black'>12,480</p>
              </div>
              <Wallet2 className='h-10 w-10 text-amber-300' />
            </div>
            <div className='mt-5 flex items-center gap-3 text-sm text-slate-200'>
              <ShieldCheck className='h-4 w-4' /> Secure server-side validation enabled
            </div>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          <div className='card p-4'>
            <CreditCard className='h-5 w-5 text-brand-700' />
            <p className='mt-4 text-sm text-slate-500'>Compatible future payment rails</p>
            <p className='mt-2 text-lg font-bold text-slate-900'>Cards, mobile money, transfers</p>
          </div>
          <div className='card p-4'>
            <Landmark className='h-5 w-5 text-brand-700' />
            <p className='mt-4 text-sm text-slate-500'>Country-ready architecture</p>
            <p className='mt-2 text-lg font-bold text-slate-900'>Regional rules and limits</p>
          </div>
          <div className='card p-4'>
            <ArrowUpRight className='h-5 w-5 text-brand-700' />
            <p className='mt-4 text-sm text-slate-500'>Audit-ready</p>
            <p className='mt-2 text-lg font-bold text-slate-900'>Immutable records + anti-fraud checks</p>
          </div>
        </div>

        <div className='card p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <h2 className='text-xl font-bold text-slate-900'>Recent transactions</h2>
            <button className='tab-button'>Download history</button>
          </div>
          <div className='space-y-3'>
            {transactions.map((item) => (
              <div key={item.label} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3'>
                <div>
                  <p className='font-bold text-slate-900'>{item.label}</p>
                  <p className='text-xs text-slate-500'>{item.meta}</p>
                </div>
                <div className='text-right'>
                  <p className={`font-black ${item.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'}`}>{item.amount}</p>
                  <p className='text-[10px] uppercase tracking-[0.15em] text-slate-400'>{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
