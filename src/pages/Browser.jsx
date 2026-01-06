import React from "react";
import Navbar from "@/components/common/Navbar";
import Job from "@/components/Job";

const allJobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    description: "React developer required with Tailwind experience.",
    location: "Karachi",
    salary: "0-40k",
    company: {
      name: "TechSoft",
      logo: "https://i.pravatar.cc/150?img=1",
    },
  },
  {
    _id: "2",
    title: "Backend Developer",
    description: "Node.js & Express backend developer.",
    location: "Lahore",
    salary: "1 Lakh",
    company: {
      name: "DevSolutions",
      logo: "https://i.pravatar.cc/150?img=2",
    },
  },
  {
    _id: "3",
    title: "Full Stack Developer",
    description: "MERN Stack developer required.",
    location: "Islamabad",
    salary: "1 Lakh to 5 Lakh",
    company: {
      name: "CodeLabs",
      logo: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    _id: "4",
    title: "React Developer",
    description: "Frontend React developer (Junior).",
    location: "Hyderabad",
    salary: "0-40k",
    company: {
      name: "UIX Studio",
      logo: "https://i.pravatar.cc/150?img=4",
    },
  },
  {
    _id: "5",
    title: "Software Engineer",
    description: "General software engineer role.",
    location: "Quetta",
    salary: "1 Lakh",
    company: {
      name: "SoftCorp",
      logo: "https://i.pravatar.cc/150?img=5",
    },
  },
];

const Browser = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allJobs.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browser;
