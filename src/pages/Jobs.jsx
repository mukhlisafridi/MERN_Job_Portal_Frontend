import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import FilterCard from "@/components/FilterCard";
import Job from "@/components/Job";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Filter, AlertCircle } from "lucide-react";
import { useSelector } from "react-redux";

const Jobs = () => {
  const [filters, setFilters] = useState({});
  const allJobs = useSelector((store) => store.jobs.allJobs);

  return (
    <>
      <Navbar />
<div className="max-w-7xl mx-auto mt-5 px-4">
        <div className="flex justify-end mb-4 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>

            <SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
              <FilterCard
                selectedFilters={filters}
                setSelectedFilters={setFilters}
                onClose={() => document.body.click()}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-5">
          <div className="hidden lg:block w-1/5">
            <FilterCard
              selectedFilters={filters}
              setSelectedFilters={setFilters}
            />
          </div>

          <div className="flex-1">
            {allJobs.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-20 gap-4">
                <AlertCircle className="w-10 h-10 text-red-600" />
                <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
                  Job Not Found
                </h1>
                <p className="text-gray-500 text-center max-w-md">
                  Sorry, we couldn't find any jobs matching your filters. Try
                  adjusting your search criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
