'use client';
import * as React from "react";
import { Search, Hammer, UserPlus2, Building2, PhoneCall, Sparkles, Users, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLeaf, FaWater, FaSeedling } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden relative">

   
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

      
      <section className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Find Trusted Workers Near You
        </motion.h1>
        <motion.p 
          className="text-lg max-w-2xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Connect with skilled daily-wage workers and service providers in your area for tasks like construction, plastering, roofing, and more.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href="/search"
            className="bg-emerald-600 hover:bg-emerald-700 text-white dark:text-gray-100 px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 font-medium"
          >
            <Search size={22} />
            Search Services
          </Link>
          <Link
            href="/post"
            className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-gray-500/10 transition-all duration-300 font-medium"
          >
            <Hammer size={22} />
            Post Your Service
          </Link>
        </motion.div>
      </section>

     
      <section className="py-16 px-6 relative z-10">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Jeevika?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Building2 className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />,
              title: "Local Services",
              desc: "Find skilled workers from your own city or town.",
            },
            {
              icon: <PhoneCall className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />,
              title: "Direct Contact",
              desc: "Call or WhatsApp workers directly — no middleman.",
            },
            {
              icon: <UserPlus2 className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />,
              title: "Free to Use",
              desc: "Post or search services completely free.",
            },
            {
              icon: <Shield className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />,
              title: "Verified Workers",
              desc: "All profiles are verified for your safety.",
            },
            {
              icon: <Star className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />,
              title: "Ratings & Reviews",
              desc: "Choose the best workers based on community feedback.",
            },
            {
              icon: <Sparkles className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />,
              title: "Quick Matching",
              desc: "Get connected with the right worker in minutes.",
            },
          ].map(({ icon, title, desc }, index) => (
            <motion.div 
              key={title} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

   
      <section className="py-16 px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-10 text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Are You a Skilled Worker?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">Join thousands of workers who are finding new opportunities every day on Jeevika.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/auth/signup"
              className="inline-block bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
            >
              Register Your Service
            </Link>
          </motion.div>
        </motion.div>
      </section>

     
      <section className="py-16 px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Active Workers" },
            { number: "50K+", label: "Completed Jobs" },
            { number: "100+", label: "Cities" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

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
    </main>
  );
}