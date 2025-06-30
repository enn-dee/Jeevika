'use client'

import service from "@/data/services.json";
import type { Service } from "@/types/service";
import { useRouter } from "next/navigation";
import { LocationEdit, Star, UsersRound } from "lucide-react";

interface JobListProps {
    IndivService: Service;
}
export default function ServiceList({ IndivService }: JobListProps) {
    const router = useRouter();

    const ShowCard = (service: Service) => {

        const slug = encodeURIComponent(IndivService.service_name)
        router.push(`/service/${slug}`)
    }

    return (
        <div className="card bg-amber-50/50 w-96 shadow-sm text-black/70 backdrop-blur-md border border-black/30 hover:bg-amber-50/60 hover:shadow-lg hover:scale-95 hover:cursor-pointer transition-all ease-in-out duration-400 shrink-0" onClick={() => ShowCard(IndivService)}>

            <div className="card-body w-full flex flex-col gap-4 ">
                <div className="flex flex-row gap-4 items-center">
                    <h2 className="card-title">{IndivService.service_name}</h2>
                    <p className="badge badge-secondary min-w-[100px] h-fit font-semibold">{IndivService.rate}</p>
                </div>
                <div className="flex flex-row justify-around items-center">
                    <p className="flex items-center gap-1"><LocationEdit /> {IndivService.location}</p>
                    <span>distance kms</span>
                </div>
                <div className="flex flex-row justify-around items-center ">
                    <p><UsersRound className="inline"/> {IndivService.availability}</p>

                    <span>
                        {IndivService.rating} <Star className="inline-block h-4" /> ({IndivService.reviews.length} reviews)
                    </span>

                </div>
                <div className=" max-h-[100px] overflow-y-hidden">
                    <p>{IndivService.about}</p>
                </div>
                <span className="font-semibold">Read More...</span>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Call Now</button>
                </div>
            </div>
        </div>
    );
}

export function ServiceCard() {
    return (
        <>
            {service.map((indivService, index) => (
                <ServiceList key={index} IndivService={indivService} />
            ))}
        </>
    );
}
