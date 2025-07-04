'use client';
import { useParams } from 'next/navigation';
import service from '@/data/services.json';
import Link from 'next/link';
import { ArrowLeft, LocationEdit, Star } from 'lucide-react';
import { PersonIcon } from '@radix-ui/react-icons';

export default function ServiceDetails() {
  const params = useParams();
  const { serviceName } = params;

  const serviceData = service.find(
    (item) => encodeURIComponent(item.service_name) === serviceName
  );

  if (!serviceData) return <p className="text-center text-xl text-black font-semibold">Service not found.</p>;

  return (
    <div className="flex flex-col items-center w-full ">

      <section className="w-full max-w-4xl flex justify-start mb-4 ">
        <Link
          href="/service"
          className="flex items-center gap-2 text-sm px-3 py-1 bg-white/80 text-black rounded hover:bg-white transition duration-200 shadow dark:bg-gray-800 dark:text-white"
        >
          <ArrowLeft className="w-4 h-4" /> All Services
        </Link>
      </section>


      <section className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl border border-white/50 rounded-lg p-6 text-gray-800 space-y-6 dark:bg-gray-800 dark:text-white dark:border-gray-400">


        <section className="space-y-2">
          <h1 className="text-2xl font-bold text-center">{serviceData.service_name}</h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-yellow-300" />
              {serviceData.rating} ({serviceData.reviews.length} reviews)
            </span>
            <span className="text-gray-600 dark:text-gray-300">Member since {serviceData.member_since}</span>
          </div>
        </section>


        <section className="flex flex-wrap gap-4 justify-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded font-semibold shadow-sm dark:bg-green-900 dark:text-green-100">
            {serviceData.rate}
          </span>
          <span className="bg-slate-200 px-4 py-2 rounded flex items-center gap-1 shadow-sm dark:bg-slate-700 dark:text-slate-100">
            <PersonIcon /> {serviceData.availability}
          </span>
          <span className="bg-slate-200 px-4 py-2 rounded flex items-center gap-1 shadow-sm dark:bg-slate-700 dark:text-slate-100">
            <LocationEdit /> {serviceData.location}
          </span>
        </section>


        <section>
          <h2 className="text-lg font-semibold mb-1">About the Service</h2>
          <p className="text-sm text-gray-700 leading-relaxed dark:text-gray-400">{serviceData.about}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {serviceData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-md shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>


        <section>
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <div className="bg-slate-300/50 h-52 w-full rounded-lg flex items-center justify-center text-gray-500 text-sm italic dark:bg-slate-700 dark:text-slate-100">

            Map coming soon...
          </div>
          <p className="text-sm mt-2">{serviceData.full_location}</p>
        </section>
      </section>
    </div>
  );
}
