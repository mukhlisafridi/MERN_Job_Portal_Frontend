import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import FilterCard from "@/components/FilterCard";
import Job from "@/components/Job";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const Jobs = () => {
  const [filters, setFilters] = useState({});
  const jobsArray = [1, 2, 3, 4, 5];

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
            {jobsArray.length === 0 ? (
              <span>Job not found</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobsArray.map((job, index) => (
                  <motion.div
                    key={index}
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
