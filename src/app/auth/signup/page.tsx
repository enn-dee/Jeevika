import { FormContainer } from '@/components/auth/Signup';
import Link from 'next/link';
export default function Signup() {
  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/30 shadow-lg shadow-black/40 text-white p-6 rounded-lg flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-white text-center">
        Welcome to <span className="text-emerald-400">Jeevika</span>
      </h1>
      <p className="text-white/80 text-sm text-center">
        Join our platform to connect and grow.
      </p>

      <FormContainer />

      <div className="text-white/80 text-sm text-center mt-4">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-emerald-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}