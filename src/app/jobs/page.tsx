"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Job {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  seller?: { name: string };
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([
    {id:"1",title:"test tile",description:"test description",price:25, location:"srinagar"}
  ]);
  const [location, setLocation] = useState("Srinagar");

  useEffect(() => {
    async function fetchJobs() {
      const token = localStorage.getItem("token");
      const res:any = await axios.get(`http://localhost:3000/jobs?location=${location}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data.jobs || []);
    }
    fetchJobs();
  }, [location]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Jobs in {location}</h1>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 mt-4"
      >
        <option value="Srinagar">Srinagar</option>
        <option value="Baramulla">Baramulla</option>
        <option value="Anantnag">Anantnag</option>
      </select>

      <div className="mt-6 space-y-4">
        {!jobs ? <h1 className="text-3xl">Jobs not found</h1>:
        (

            jobs.map((job) => (
                <div key={job.id} className="p-4 border rounded shadow">
                <h2 className="font-semibold">{job.title}</h2>
                <p>{job.description}</p>
                <p className="text-blue-600">₹{job.price}</p>
                <p className="text-gray-500">Seller: {job.seller?.name}</p>
                </div>
            ))
        )
        }
        
      </div>
    </div>
  );
}
