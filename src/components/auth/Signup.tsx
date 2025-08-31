'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Loader2, LocateFixed, Trash2 } from 'lucide-react';
import { reverseLocation } from '@/lib/ReverseLocation';
import { Button } from '../ui/button';

export const SignupContainer = () => {
  type UserTypes = 'buyer' | 'seller';

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [userType, setUserType] = useState<UserTypes>('buyer');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [password, setPassword] = useState('');
  const [locationName, setLocationName] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (name.trim().length < 3) throw new Error('Name must be at least 3 characters');
      if (number.trim().length < 9) throw new Error('Invalid phone number');
      if (password.length < 5) throw new Error('Password should be at least 5 characters');
      console.log("location: ", location)
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
    if (!navigator.geolocation) {
      return toast.error('Geolocation not supported');
    }

    toast.loading('Detecting location...');
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });
        const locationName = await reverseLocation(latitude, longitude);
        setLocationName(locationName);
        toast.dismiss();
        toast.success('Location detected');
        setIsLoading(false);
      },
      (err) => {
        toast.error('Location error: ' + err.message);
        toast.dismiss();
        setIsLoading(false);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-2">
      {/* Full Name */}
      <div>
        <label className="text-sm font-semibold">Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. John Doe"
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
          placeholder:text-gray-400 dark:placeholder:text-gray-500 
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Phone Number */}
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
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
          placeholder:text-gray-400 dark:placeholder:text-gray-500 
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-semibold">Set Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 5 characters"
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
          placeholder:text-gray-400 dark:placeholder:text-gray-500 
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-semibold">Location (Auto-detect)</label>
        <input
          type="text"
          readOnly
          value={locationName}
          placeholder="No location selected"
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
          placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />

        <div className="flex gap-2 mt-3">
          <Button
            variant="emerald"
            onClick={detectLocation}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
            ) : (
              <LocateFixed size={16} />
            )}
            Detect Location
          </Button>

          <Button
            variant="dangerGradient"
            onClick={() => {
              setLocationName('');
              setLocation(null);
            }}
          >
            <Trash2 size={16} /> Clear
          </Button>
        </div>
      </div>

      {/* User Type */}
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
              className="accent-emerald-600"
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
              className="accent-emerald-600"
            />
            Seller
          </label>
        </div>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg"
      >
        Register
      </Button>
    </form>
  );
};
