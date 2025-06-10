import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const[featuredJobs,setFeaturedJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/jobs").then(res => setFeaturedJobs(res.data));
  }, []);

  return (
    <div>
      <h1>Welcome to the Job Website</h1>
      <h2>Featured Jobs</h2>
      <ul>
        {featuredJobs.slice(0, 3).map(job => (
          <li key={job._id}>{job.title} at {job.company}</li>
        ))}
      </ul>
    </div>
  );
}
