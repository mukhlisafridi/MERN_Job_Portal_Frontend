import React from "react";
import LatestJobCard from "./LatestJobCard";

const LatestJobs = () => {
  const jobs = [
    {
      company: { name: "Cigul Technologies" },
      title: "MERN Stack Developer",
      description:
        "We are looking for a MERN Stack Developer with good knowledge of React, Node.js, Express, and MongoDB.",
      position: 3,
      jobType: "Full Time",
      salary: 8,
    },
    {
      company: { name: "TechSoft" },
      title: "Frontend Developer",
      description: "Strong React and Tailwind CSS skills required.",
      position: 2,
      jobType: "Remote",
      salary: 6,
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <LatestJobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
