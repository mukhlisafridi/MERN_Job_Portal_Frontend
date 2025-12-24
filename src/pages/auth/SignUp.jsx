import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    profileImage: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInput({ ...input, profileImage: file });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.profileImage) {
      formData.append("profileImage", input.profileImage);
    }

    try {
      setIsSubmitting(true);
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        withCredentials: true,
      });

      if (res.data?.success) {
        toast.success(res.data.message || "Registered successfully!");
        navigate("/login");
      }

      setInput({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        profileImage: null,
      });
      setIsSubmitting(false);
    } catch (error) {
      console.log("error in user api", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-15">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create Account
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={input.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={input.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={input.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={input.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2 my-2">
              <Label>Role</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    id="student"
                    className="cursor-pointer"
                    checked={input.role === "student"}
                    onChange={handleChange}
                    required
                  />
                  <Label htmlFor="student">Student</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    id="recruiter"
                    className="cursor-pointer"
                    checked={input.role === "recruiter"}
                    onChange={handleChange}
                    required
                  />
                  <Label htmlFor="recruiter">Recruiter</Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="profileImage">Profile Image</Label>
              <Input
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="cursor-pointer"
              />
            </div>

            <Button
              type="submit"
              className="mt-4 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up…" : "Sign Up"}
            </Button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-purple-600 font-medium hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
