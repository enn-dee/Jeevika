'use client';

import Link from 'next/link';
import { LoginContainer } from '@/components/auth/Login';

export default function Login() {
  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/30 shadow-lg shadow-black/40 text-white p-6 rounded-lg flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-white text-center">Welcome Back</h1>
      <p className="text-white/80 text-sm text-center">Login to continue</p>

      <LoginContainer />

      <div className="text-white/80 text-sm text-center mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/auth/signup" className="text-emerald-400 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
