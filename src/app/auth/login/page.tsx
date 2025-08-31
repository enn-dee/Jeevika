'use client';

import Link from 'next/link';
import { LoginContainer } from '@/components/auth/Login';
import { motion } from 'framer-motion';
import { FaSignInAlt, FaLeaf, FaWater, FaSeedling } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Login() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative  bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-all duration-500">
      
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl"></div>
      </div>

  
      <div className="absolute top-10 left-10 opacity-40 dark:opacity-20">
        <FaLeaf className="text-emerald-500 w-16 h-16 animate-float" />
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-40 dark:opacity-20">
        <FaWater className="text-blue-400 w-14 h-14 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="absolute top-1/3 right-1/4 opacity-40 dark:opacity-20">
        <FaSeedling className="text-green-400 w-12 h-12 animate-float" style={{ animationDelay: '2s' }} />
      </div>


      <svg
        className="absolute top-0 left-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#d4f0f0"
          d="M44.7,-76.2C59.1,-69.8,72.7,-60.4,81.1,-47.3C89.5,-34.2,92.7,-17.1,91.5,-0.6C90.3,15.9,84.7,31.8,75.1,44.6C65.5,57.4,51.9,67.1,37.1,73.2C22.3,79.3,6.4,81.7,-7.9,79.4C-22.2,77.1,-34.8,70,-46.2,60.2C-57.6,50.4,-67.7,37.9,-74.3,23.4C-80.9,8.9,-83.9,-7.6,-80.7,-22.8C-77.5,-38,-68,-51.9,-55.8,-59.5C-43.6,-67.1,-28.7,-68.4,-13.8,-73.2C1.1,-78,15.9,-86.3,44.7,-76.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 opacity-20 dark:opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#c5e8e8"
          d="M38.8,-68.2C51.1,-60.8,62.4,-51.3,71.3,-39.3C80.2,-27.3,86.7,-12.9,87.5,1.8C88.3,16.5,83.4,31.5,74.1,43.1C64.8,54.7,51.2,62.9,36.6,68.7C22,74.5,6.5,77.9,-7.8,76.7C-22.2,75.4,-35.3,69.5,-46.1,60.2C-56.9,50.8,-65.3,38,-71.1,23.8C-76.8,9.6,-79.9,-6.1,-77.4,-20.7C-75,-35.3,-67,-48.9,-56.1,-57.1C-45.2,-65.3,-31.5,-68.2,-17.9,-73.5C-4.3,-78.9,9.2,-86.8,38.8,-68.2Z"
          transform="translate(100 100)"
        />
      </svg>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 flex flex-col items-center gap-6 border border-white/20 dark:border-gray-700/30 mt-5"
      >
        
        <div className="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-full mb-2 transition-colors duration-300">
          <FaSignInAlt className="text-emerald-600 dark:text-emerald-400 text-3xl transition-colors duration-300" />
        </div>

       
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-extrabold text-center  dark:text-emerald-400 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent transition-colors duration-300"
        >
          Welcome Back
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 dark:text-gray-400 text-center text-sm transition-colors duration-300"
        >
          Login to continue your journey with us.
        </motion.p>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full h-full"
        >
          <LoginContainer />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 dark:text-gray-400 text-sm text-center mt-4 transition-colors duration-300"
        >
          Don&apos;t have an account?{' '}
          <Link
            href="/auth/signup"
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium transition-colors duration-300"
          >
            Sign up
          </Link>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}