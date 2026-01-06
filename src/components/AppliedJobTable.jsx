import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {

  // 🔹 Static Data (temporary)
  const allAppliedJobs = [
    {
      _id: "1",
      createdAt: "2025-01-10T12:30:00Z",
      status: "accepted",
      job: {
        title: "Frontend Developer",
        company: {
          name: "TechSoft",
        },
      },
    },
    
  ];

  return (
    <div className="w-full overflow-x-auto select-none">
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allAppliedJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                You haven't applied for any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>
                  {appliedJob.createdAt.split("T")[0]}
                </TableCell>

                <TableCell>{appliedJob.job.title}</TableCell>

                <TableCell>{appliedJob.job.company.name}</TableCell>

                <TableCell className="text-right">
                  <Badge
                    className={
                      appliedJob.status === "rejected"
                        ? "bg-red-400"
                        : appliedJob.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
