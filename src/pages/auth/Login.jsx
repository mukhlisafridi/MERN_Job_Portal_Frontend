import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { setLoading, setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const loading = useSelector((store) => store.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, formData, {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
        dispatch(setUser(res.data.user));

      }
      console.log("Response:", res.data);
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed!");
      console.log("error in user api", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const inputClass =
    "focus:border-black focus:ring-black focus:ring-0 focus:outline-none";

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-15">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Login
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
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
                value={formData.password}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <Button type="submit" className="mt-4" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-600 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
