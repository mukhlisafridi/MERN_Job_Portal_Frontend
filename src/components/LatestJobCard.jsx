import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCard = ({ job }) => {
  return (
    <div className="p-4 sm:p-5 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all cursor-pointer">
      
      {/* Company */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="font-medium text-base sm:text-lg">
          {job.company.name}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">Pakistan</p>
      </div>

      {/* Job Info */}
      <div className="mt-2">
        <h1 className="font-bold text-base sm:text-lg my-1">
          {job.title}
        </h1>
        <p className="text-sm text-gray-600 line-clamp-2">
          {job.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge variant="ghost" className="text-blue-700 font-bold text-xs sm:text-sm">
          {job.position} Positions
        </Badge>

        <Badge variant="ghost" className="text-[#F83002] font-bold text-xs sm:text-sm">
          {job.jobType}
        </Badge>

        <Badge variant="ghost" className="text-[#7209b7] font-bold text-xs sm:text-sm">
          {job.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCard;
