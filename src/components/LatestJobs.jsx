import { useSelector } from "react-redux";
import LatestJobCard from "./LatestJobCard";

const LatestJobs = () => {
  const alljobs = useSelector((store) => store.jobs.allJobs); 

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      {alljobs && alljobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alljobs.slice(0,6).map((job) => (
            <LatestJobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[#F83002] text-lg">
          No jobs found...!
        </p>
      )}
    </div>
  );
};

export default LatestJobs;
