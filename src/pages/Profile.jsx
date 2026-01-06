import AppliedJobTable from "@/components/AppliedJobTable";
import Navbar from "@/components/common/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import UpdateProfileDialog from "@/components/UpdateProfileDialog";
import { Contact, Mail, Pen } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((store) => store.auth.user);
  const skills = user?.profile?.skills || [];
  const isResume = Boolean(user?.profile?.resume);
  console.log("USER FROM STORE:", user);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border rounded-2xl my-5 p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
            </Avatar>

            <div className="text-center sm:text-left">
              <h1 className="font-semibold text-xl">
                {user?.fullName || "No name"}
              </h1>

              <p className="text-gray-600 text-sm mt-1 max-w-xl">
                {user?.profile?.bio || "No bio added yet"}
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="self-end sm:self-start"
          >
            <Pen size={16} />
          </Button>
        </div>

        <div className="my-6 space-y-2 text-sm">
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span>{user?.email || "Not available"}</span>
          </div>

          <div className="flex items-center gap-3">
            <Contact size={16} />
            <span>{user?.phoneNumber || "Not available"}</span>
          </div>
        </div>

        <div className="my-6">
          <h1 className="font-medium mb-2">Skills</h1>
          <div className="flex flex-wrap gap-2">
            {skills.length > 0 ? (
              skills.map((skill, index) => <Badge key={index}>{skill}</Badge>)
            ) : (
              <span className="text-gray-500">No skills added</span>
            )}
          </div>
        </div>

        <div className="grid gap-1.5">
          <Label className="text-md font-bold">Resume</Label>

          {isResume ? (
            <a
              href={user.profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.profile.resumeOriginalName || "View Resume"}
            </a>
          ) : (
            <span className="text-gray-500 text-sm">Not uploaded</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5 sm:p-8">
        <h1 className="font-bold text-lg mb-4 select-none">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
