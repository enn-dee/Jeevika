'use client';

import { useRouter } from 'next/navigation';
import service from '@/data/services.json';
import type { Service, ServiceList } from '@/types/service';
import { LocationEdit, Star, UsersRound } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';

interface JobListProps {
    IndivService: Service;
}

export default function ServiceList({ IndivService }: JobListProps) {
    const router = useRouter();

    const goToDetails = () => {
        const slug = encodeURIComponent(IndivService.service_name);
        router.push(`/service/${slug}`);
    };


    return (
        <div
            onClick={goToDetails}
            className="cursor-pointer transition-all duration-300 transform hover:scale-[0.97] hover:shadow-xl rounded-lg border border-gray-300 bg-white/80 backdrop-blur-md shadow-md w-full max-w-md text-gray-800 hover:bg-white"
        >
            <div className="p-5 flex flex-col gap-4">

                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{IndivService.service_name}</h2>
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-sm px-3 py-1 rounded">
                        {IndivService.rate}
                    </span>
                </div>


                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <LocationEdit className="w-4 h-4" /> {IndivService.location}
                    </span>
                    <span className="text-xs italic text-gray-500">distance kms</span>
                </div>


                <div className="flex items-center justify-between text-sm text-gray-700">
                    <span className="flex items-center gap-1">
                        <UsersRound className="w-4 h-4" /> {IndivService.availability}
                    </span>
                    <span>
                        {IndivService.rating}
                        <Star className="inline w-4 h-4 fill-yellow-400 text-yellow-500 ml-1" /> (
                        {IndivService.reviews.length} reviews)
                    </span>
                </div>


                <div className="text-sm text-gray-700 max-h-[80px] overflow-hidden">
                    {IndivService.about}
                </div>


                <div className="text-sm text-blue-600 font-medium hover:underline">Read More...</div>


                <div className="pt-2 flex justify-end">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            alert("Calling worker… (integrate phone number feature)");
                        }}
                        className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded shadow"
                    >
                        Call Now
                    </button>
                </div>
            </div>
        </div>
    );
}


export function ServiceCard() {
    const { keyword } = useSearch();
    const filteredData = service.filter((item) => {
        return item.service_name.toLowerCase().includes(String(keyword).toLowerCase())
    })

    return (
        <div className="w-full flex flex-wrap justify-center gap-6">
            {filteredData.length > 0 ? (
                filteredData.map((indivService, index) => (
                    <ServiceList key={index} IndivService={indivService} />
                ))
            ) : (
                <p className="text-gray-500">No matching services found.</p>
            )}
        </div>
    );
}
