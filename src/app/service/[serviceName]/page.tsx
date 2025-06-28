'use client';
import { useParams } from 'next/navigation';
import service from '@/data/services.json';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function ServiceDetails() {
    const params = useParams();
    const { serviceName } = params;

    const serviceData = service.find(
        (item) => encodeURIComponent(item.service_name) === serviceName
    );

    if (!serviceData) return <p>Service not found</p>;

    return (
        <div className='flex flex-col '>
            <Link href="/service" className='btn btn-soft absolute left-3 top-3'>All Services</Link>

            <div className='relative top-10 bg-white/90 p-5 shadow-lg shadow-black/60 min-w-[500px]  border-white/60 rounded-md text-black/80 font-semibold text-lg'>

                <div >
                    <h1 className='text-2xl text-center items-center flex justify-around gap-4'>
                        <Star className='text-yellow-400 fill-amber-300/90' />
                        {serviceData.service_name}
                    </h1>
                    <p><span> </span></p>
                </div>
            </div>
        </div>
    );
}
