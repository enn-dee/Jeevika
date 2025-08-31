"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Job } from "@/types/service";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [location, setLocation] = useState("Srinagar");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        
        const res = await axios.get<{ jobs: Job[] }>(
          `http://localhost:3000/jobs?location=${location}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setJobs(res.data.jobs || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch jobs.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
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
        {loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !jobs.length && <h1 className="text-3xl">Jobs not found</h1>}

        {jobs.map((job) => (
          <div key={job.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p className="text-blue-600">₹{job.price}</p>
            <p className="text-gray-500">Seller: {job.worker?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
