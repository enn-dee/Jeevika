'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { GlassWrapper } from '../ui/GlassWrapper';

export function LoginContainer() {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (number.trim().length < 9) throw new Error('Invalid phone number');
      if (password.trim().length < 5) throw new Error('Password must be at least 5 characters');

      toast.success('Login successful');
      setNumber('');
      setPassword('');
    } catch (error) {
      toast.error((error as Error).message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-4">

      <div>
        <label className="text-sm font-semibold">Phone Number</label>
        <input
          type="tel"
          required
          pattern="[0-9]*"
          inputMode="numeric"
          autoFocus
          placeholder="e.g. 9876543210"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>


      <div>
        <label className="text-sm font-semibold">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>

      <GlassWrapper>
        <Button variant="glass"
          type="submit"
          className='w-[50%]'
        >
          Login
        </Button>
      </GlassWrapper>

    </form>
  );
}
