import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate()
  const jobId ="ssbrgr"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 w-full">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500"></p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-3 my-2">
        <Avatar className="w-12 h-12 flex-shrink-0">
          <AvatarImage
            src={job?.company?.logo || "https://i.pravatar.cc/150"}
            className="rounded-full object-cover w-full h-full"
          />
        </Avatar>
        <div className="flex-1 min-w-0">
          <h1 className="font-medium text-lg truncate">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500 truncate">Pakistan</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 truncate">Title</h1>
        <p className="text-sm text-gray-600 line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa incidunt est eligendi ratione, inventore reiciendis.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">Positions</Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">frontend</Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">LPA</Badge>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <Button onClick={()=> navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
