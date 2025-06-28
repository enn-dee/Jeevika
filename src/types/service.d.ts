export interface Review {
    name: string;
    rating: string;
    time_ago: string;
    text: string;
}

export interface Service {
    title: string;
    service_name: string;
    rating: string;
    member_since: string;
    rate: string;
    availability: string;
    location: string;
    about: string;
    skills: string[];
    full_location: string;
    reviews: Review[];
}

export type ServiceList = Service[];
