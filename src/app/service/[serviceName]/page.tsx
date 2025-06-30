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

    if (!serviceData) return <p>Service not found</p>;

    return (
        <div className='flex flex-col p-2 h-full'>
            <Link href="/service" className='btn btn-soft absolute left-3 top-3 transition-all duration-300 '>
                <ArrowLeft  /> All Services
            </Link>

            <div className='md:max-w-[650px] relative top-10 bg-white/90 p-5 shadow-lg shadow-black/60  border-white/60 rounded-md text-black/80 font-medium'>

                <div className='flex flex-col items-baseline'>
                    <h1 className='text-2xl text-center items-center flex justify-around gap-4 font-semibold '>
                        {serviceData.service_name}
                    </h1>
                    <div className='flex flex-row gap-2 items-center justify-around m-2 bg-gray-300/60 p-2 rounded-md w-full flex-wrap-reverse'>

                        <span className=''>
                            <Star className='text-yellow-400 fill-amber-300/90 w-8 h-5 inline-block' />{serviceData.rating}({serviceData.reviews.length} reviews)</span>

                        <span>Member since {serviceData.member_since}</span>
                    </div>

                    <div className='flex flex-row flex-wrap items-center justify-around gap-2  w-full '>
                        <span className='bg-sky-200/40 text-green-700/90 font-semibold p-2  rounded-md'>
                            {serviceData.rate}</span>
                        <span className='bg-slate-300 p-2 rounded-md'>
                            <PersonIcon className='inline' />  {serviceData.availability}
                        </span>
                        <span className='bg-slate-300 p-2 rounded-md'>
                            <LocationEdit className='inline' />  {serviceData.location}
                        </span>
                    </div>
                </div>
                <hr className='my-2' />

                <div>
                    <h1 className='font-bold my-2'>About the Service</h1>
                    <p>{serviceData.about}</p>
                </div>

                <div className='my-2'>
                    <h1 className='font-semibold'>Skills:</h1>
                    <div className='flex flex-row flex-wrap gap-3'>
                        {serviceData.skills.map((skill, index) => {
                            return <span className='bg-slate-200 p-2 rounded-md' key={index}>{skill}</span>
                        })}
                    </div>
                </div>

                <div className='my-2 '>
                    <h1 className='text-lg font-semibold'>Location</h1>
                    <div className='bg-slate-200 max-w-[85%] rounded-md h-[200px] mx-auto '>
                        {/* place map here */}
                    </div>
                    <p>{serviceData.full_location}</p>
                </div>

            </div>
        </div>
    );
}
