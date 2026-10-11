import { AppShell } from '@/components/app-shell';
import { ArrowRight, CheckCircle2, MessageCircleQuestion, ShieldCheck } from 'lucide-react';

const faq = [
  { q: 'How do I verify a result?', a: 'Results are checked through the game server and require admin or approved verification.' },
  { q: 'What is the wallet type?', a: 'Karma Coins are virtual credits for gameplay and rewards only.' },
  { q: 'How do I create a challenge?', a: 'Open Karma Football, select a mode and invite a friend or accept an incoming challenge.' },
];

export default function HelpPage() {
  return (
    <AppShell>
      <div className='space-y-6 pb-20 md:pb-8'>
        <div className='card p-5'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-brand-700'>Support center</p>
              <h1 className='mt-2 text-3xl font-black text-slate-900'>Help & customer support</h1>
            </div>
            <button className='rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white'>Contact support</button>
          </div>
        </div>

        <div className='grid gap-4 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='card p-5'>
            <h2 className='text-xl font-bold text-slate-900'>Frequently asked questions</h2>
            <div className='mt-4 space-y-3'>
              {faq.map((item) => (
                <div key={item.q} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                  <p className='font-bold text-slate-900'>{item.q}</p>
                  <p className='mt-2 text-sm text-slate-600'>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='card p-5'>
            <h2 className='text-xl font-bold text-slate-900'>Report a problem</h2>
            <div className='mt-4 space-y-3'>
              <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <p className='font-semibold text-slate-900'>Wallet or transaction issue</p>
              </div>
              <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <p className='font-semibold text-slate-900'>Tournament dispute</p>
              </div>
              <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                <p className='font-semibold text-slate-900'>Account recovery</p>
              </div>
              <button className='mt-2 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-2 text-sm font-bold text-brand-700'>Open ticket <ArrowRight className='h-4 w-4' /></button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
