'use client';
import * as React from "react"

import { Search, Hammer, UserPlus2, Building2, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800 ddark:from-gray-900 dark:to-gray-800 dark:text-gray-100">



      <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          Find Trusted Workers Near You
        </h1>
        <p className="text-lg max-w-xl text-gray-600 dark:text-gray-200">
          Connect with skilled daily-wage workers and service providers in your area for tasks like construction, plastering, roofing, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/search"
            className="bg-green-600 hover:bg-green-700 text-white dark:text-gray-100 px-6 py-3 rounded-lg flex items-center gap-2 shadow-md"
          >
            <Search size={20} />
            Search Services
          </Link>
          <Link
            href="/post"
            className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm"
          >
            <Hammer size={20} />
            Post Your Service
          </Link>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900 py-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Why Use Our Platform?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Building2 className="text-green-600 w-6 h-6" />,
              title: "Local Services",
              desc: "Find skilled workers from your own city or town.",
            },
            {
              icon: <PhoneCall className="text-green-600 w-6 h-6" />,
              title: "Contact Easily",
              desc: "Call or WhatsApp workers directly — no middleman.",
            },
            {
              icon: <UserPlus2 className="text-green-600 w-6 h-6" />,
              title: "Free to Use",
              desc: "Post or search services completely free.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-gray-50 p-5 dark:bg-gray-900 rounded-md shadow hover:shadow-lg transition">
              <div className="mb-3">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-12 bg-gradient-to-r from-green-100 to-green-50 px-6 text-center dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-2xl font-bold mb-2">Are You a Worker?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Join now and get discovered by people looking for your skills.</p>
        <Link
          href="/auth/signup"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-semibold"
        >
          Register Your Service
        </Link>
      </section>
    </main>

  );
}
