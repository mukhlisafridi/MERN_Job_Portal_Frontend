import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant.js";
import axios from "axios";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((store) => store.auth.user);

  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null, // optional
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] || null });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) formData.append("file", input.file);

    try {
      dispatch(setLoading(true));
      const res = await axios.patch(
        `${USER_API_END_POINT}/profile-update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      console.log("Response:", res.data);
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message || "Profile updated successfully!");
      }
    } catch (error) {
      console.error("API Error:", error);
      const message = error?.response?.data?.message || "Something went wrong!";
      toast.error(message);
    } finally {
      dispatch(setLoading(false));
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md w-full mx-auto px-4 py-6 sm:px-6 sm:py-12 select-none">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-bold text-center">
            Update Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler} className="space-y-4">
          {[
            { label: "Name", name: "fullName", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Number", name: "phoneNumber", type: "text" },
            { label: "Bio", name: "bio", type: "text" },
            { label: "Skills", name: "skills", type: "text" },
          ].map((field, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <Label className="sm:w-1/4 text-left sm:text-right">
                {field.label}
              </Label>
              <Input
                name={field.name}
                type={field.type}
                value={input[field.name]}
                onChange={changeEventHandler}
                disabled={loading}
                className="sm:flex-1 w-full"
              />
            </div>
          ))}

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <Label className="sm:w-1/4 text-left sm:text-right">
              Resume (PDF)
            </Label>
            <Input
              type="file"
              accept="application/pdf"
              onChange={fileChangeHandler}
              disabled={loading}
              className="sm:flex-1 w-full"
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
