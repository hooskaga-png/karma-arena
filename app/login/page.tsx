import { AppShell } from '@/components/app-shell';
import { ArrowRight, CheckCircle2, LockOpen, UserRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <AppShell>
      <div className='mx-auto max-w-xl pb-20 md:pb-8'>
        <div className='card p-6'>
          <div className='mb-6 text-center'>
            <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-2xl font-black text-brand-700'>KA</div>
            <p className='mt-4 text-xs uppercase tracking-[0.3em] text-brand-700'>KARMA ARENA</p>
            <h1 className='mt-3 text-3xl font-black text-slate-900'>Play Your Way.</h1>
          </div>

          <div className='space-y-4'>
            <label className='block'>
              <span className='mb-1 block text-sm font-semibold text-slate-700'>Email</span>
              <input className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-brand-400' placeholder='you@example.com' />
            </label>
            <label className='block'>
              <span className='mb-1 block text-sm font-semibold text-slate-700'>Password</span>
              <input type='password' className='w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-400' placeholder='••••••••' />
            </label>
          </div>

          <div className='mt-5 flex items-center justify-between text-sm'>
            <label className='inline-flex items-center gap-2 text-slate-600'>
              <input type='checkbox' className='h-4 w-4 rounded border-slate-300' /> Remember me
            </label>
            <a href='/help' className='font-semibold text-brand-700'>Forgot password?</a>
          </div>

          <button className='mt-6 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-bold text-white'>Sign in</button>
          <button className='mt-3 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800'>Continue with Google</button>

          <div className='mt-6 flex items-center justify-center gap-2 text-sm text-slate-600'>
            <span>Need an account?</span>
            <a href='/' className='font-bold text-brand-700'>Create account</a>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
