import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob, setLoading } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT, JOBS_API_END_POINT} from "@/utils/constant";
import Loading from "@/components/Loading";
import axios from "axios";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob, loading } = useSelector((store) => store.jobs);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;

  const applyJobHandler = async () => {
    if (isApplied) return;

    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {},
        { withCredentials: true }
      );

      if (res.data.success) {
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to apply for job");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axios.get(`${JOBS_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log("API ERROR:", error.response?.data);
        toast.error(error.response?.data?.message || "Failed to fetch job");
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (jobId) {
      fetchSingleJob();
    }
    return () => {
      dispatch(setSingleJob(null));
    };
  }, [jobId, dispatch, user?._id]);

  if (loading) return <Loading />;

  if (!singleJob) {
    return (
      <div className="max-w-7xl mx-auto my-10 px-4 text-center">
        <p className="text-red-500 font-semibold text-lg">Job not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-bold text-xl select-none">{singleJob.title}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <Badge
              className="text-blue-700 font-bold select-none"
              variant="ghost"
            >
              {singleJob.position} Positions
            </Badge>
            <Badge
              className="text-[#F83002] font-bold select-none"
              variant="ghost"
            >
              {singleJob.jobType}
            </Badge>
            <Badge
              className="text-[#7209b7] font-bold select-none"
              variant="ghost"
            >
              Rs.{singleJob.salary}
            </Badge>
          </div>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg select-none ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-300 font-medium py-4 mt-6 select-none">
        Job Description
      </h1>

      <div className="my-4 space-y-2 text-sm sm:text-base">
        <p className="font-bold">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.title}
          </span>
        </p>
        <p className="font-bold">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.location}
          </span>
        </p>
        <p className="font-bold">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.description}
          </span>
        </p>
        <p className="font-bold">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob.experience} yrs
          </span>
        </p>
        <p className="font-bold">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Rs.{singleJob.salary}
          </span>
        </p>
        <p className="font-bold">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.applications?.length}
          </span>
        </p>
        <p className="font-bold">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {new Date(singleJob.createdAt).toLocaleDateString("en-GB")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
