import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const JobDescription = () => {
  // 🔹 Static Job Data
  const singleJob = {
    _id: "1",
    title: "Frontend Developer",
    postion: 3,
    jobType: "Full Time",
    salary: 8,
    location: "Karachi, Pakistan",
    experience: 2,
    description:
      "We are looking for a Frontend Developer with strong React skills and good UI sense.",
    applications: [{ id: 1 }, { id: 2 }, { id: 3 }],
    createdAt: "2025-01-15T10:30:00Z",
  };

  // 🔹 Static applied state
  const [isApplied, setIsApplied] = useState(false);

  const applyJobHandler = () => {
    setIsApplied(true);
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-bold text-xl select-none">{singleJob.title}</h1>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold select-none" variant="ghost">
              {singleJob.postion} Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold select-none" variant="ghost">
              {singleJob.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-bold select-none" variant="ghost">
              {singleJob.salary} LPA
            </Badge>
          </div>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg select-none cursor-pointer ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Description */}
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4 mt-6 select-none">
        Job Description
      </h1>

      <div className="my-4 space-y-2 text-sm sm:text-base">
        <p className="font-bold">
          Role:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.title}
          </span>
        </p>

        <p className="font-bold">
          Location:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.location}
          </span>
        </p>

        <p className="font-bold">
          Description:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.description}
          </span>
        </p>

        <p className="font-bold">
          Experience:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.experience} yrs
          </span>
        </p>

        <p className="font-bold">
          Salary:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.salary} LPA
          </span>
        </p>

        <p className="font-bold">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.applications.length}
          </span>
        </p>

        <p className="font-bold">
          Posted Date:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.createdAt.split("T")[0]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
