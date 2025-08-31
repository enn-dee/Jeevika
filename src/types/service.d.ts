// export interface Review {
//     name: string;
//     rating: string;
//     time_ago: string;
//     text: string;
// }

// export interface Service {
//     title: string;
//     service_name: string;
//     rating: string;
//     member_since: string;
//     rate: string;
//     availability: string;
//     location: string;
//     about: string;
//     skills: string[];
//     full_location: string;
//     reviews: Review[];
// }

// export type ServiceList = Service[];



export type Role = "WORKER" | "BUYER";
export type Status = "AVAILABLE" | "BUSY" | "AWAY";
export type Unit = "DAY" | "HOUR" | "PIECE";

export interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
  password: string;
  location?: string;
  skills: string[];
  proofOfWork: string[];
  status: Status;
  jobs: Job[];
  messages: Message[];
  chats: Chat[];
  createdAt: string; 
}

export interface Job {
  id: string;
  worker: User;
  workerId: string;
  title: string;
  category: string;
  description?: string;
  price: number;
  unit: Unit;
  location: string;
  createdAt: string; 
}

export interface Chat {
  id: string;
  participants: User[];
  messages: Message[];
  createdAt: string; 
}

export interface Message {
  id: string;
  chat: Chat;
  chatId: string;
  sender: User;
  senderId: string;
  text: string;
  timestamp: string;
}
