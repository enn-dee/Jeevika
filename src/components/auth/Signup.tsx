'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { LocateFixed, Trash2 } from 'lucide-react';
import { reverseLocation } from '@/lib/ReverseLocation';



export const SignupContainer = () => {
  type UserTypes = 'buyer' | 'seller';

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [userType, setUserType] = useState<UserTypes>('buyer');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [password, setPassword] = useState('');
  const [locationName, setLocationName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (name.trim().length < 3) throw new Error('Name must be at least 3 characters');
      if (number.trim().length < 9) throw new Error('Invalid phone number');
      if (password.length < 5) throw new Error('Password should be at least 5 characters');

      toast.success('Registration successful');
      setName('');
      setNumber('');
      setLocation(null);
      setUserType('buyer');
      setPassword('');
    } catch (error) {
      toast.error((error as Error).message || 'Something went wrong');
    }
  };

  const detectLocation = async () => {
    console.log("location: ", location)
    if (!navigator.geolocation) return toast.error('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });
        const locationName = await reverseLocation(latitude, longitude);
        setLocationName(locationName);
      },
      (err) => {
        toast.error('Location error: ' + err.message);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-4">

      <div>
        <label className="text-sm font-semibold">Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jhon Doe"
          className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>


      <div>
        <label className="text-sm font-semibold">Phone Number</label>
        <input
          type="tel"
          required
          pattern="[0-9]*"
          inputMode="numeric"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="e.g. 9876543210"
          className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>


      <div>
        <label className="text-sm font-semibold">Set Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 5 characters"
          className="w-full mt-1 p-2 rounded bg-white/20 text-white placeholder:text-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>


      <div>
        <label className="text-sm font-semibold">Location (Auto-detect)</label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            readOnly
            value={locationName}
            placeholder="No location selected"
            className="w-full p-2 rounded bg-white/20 text-white placeholder:text-white/50 border border-white/30"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <button
            type="button"
            onClick={detectLocation}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500 text-white hover:bg-emerald-600 text-sm"
          >
            <LocateFixed size={16} /> Detect Location
          </button>
          <button
            type="button"
            onClick={() => setLocationName("")}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-rose-500 text-white hover:bg-rose-600 text-sm"
          >
            <Trash2 size={16} /> Clear
          </button>
        </div>
      </div>


      <div>
        <label className="text-sm font-semibold">User Type</label>
        <div className="flex items-center gap-4 mt-1">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="userType"
              value="buyer"
              checked={userType === 'buyer'}
              onChange={() => setUserType('buyer')}
              className="accent-emerald-500"
            />
            Buyer
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="userType"
              value="seller"
              checked={userType === 'seller'}
              onChange={() => setUserType('seller')}
              className="accent-emerald-500"
            />
            Seller
          </label>
        </div>
      </div>


      <button
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded font-semibold text-sm mt-2"
      >
        Register
      </button>
    </form>
  );
};
