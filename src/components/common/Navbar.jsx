import React, { useState } from "react";
import { Menu, X, User2, LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector((store) => store.auth.user);

  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/logout`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(null));
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <nav className="bg-white border-b relative">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-8">
        <h1 className="text-2xl font-bold cursor-pointer">
          Jobs<span className="text-[#F83002]">Land</span>
        </h1>

        <ul className="hidden md:flex gap-4 font-medium items-center">
          <Link to="/" className="cursor-pointer hover:text-[#F83002]">
            Home
          </Link>
          <Link to="/jobs" className="cursor-pointer hover:text-[#F83002]">
            Jobs
          </Link>
          <Link to="/browser" className="cursor-pointer hover:text-[#F83002] mr-5">
            Browser
          </Link>

          {user ? (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer ml-4 h-10 w-10">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                  <h4 className="font-medium text-base">{user.fullName}</h4>
                </div>

                <div className="flex flex-col">
                  <Button variant="ghost" className="justify-start" asChild>
                    <Link to="/profile" className="flex items-center gap-2">
                      <User2 size={17} />
                      Profile
                    </Link>
                  </Button>

                  <Button
                    variant="ghost"
                    className="justify-start flex items-center gap-2 text-red-500 cursor-pointer"
                    onClick={logoutHandler}
                  >
                    <LogOut size={17} />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-3 ml-4 ">
              <Link to="/login">
                <Button variant="outline" className="cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-700 hover:bg-purple-800 text-white cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 shadow-md md:hidden px-8 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 font-medium">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/jobs" onClick={() => setOpen(false)}>
              Jobs
            </Link>
            <Link to="/browser" onClick={() => setOpen(false)}>
              Browser
            </Link>
          </ul>

          {user ? (
            <>
              <div className="flex items-center gap-3 border-t pt-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user?.profile?.profilePhoto}/>
                </Avatar>
                <span className="font-medium">{user.fullName}</span>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/profile" onClick={() => setOpen(false)} className="flex items-center gap-2">
                    <User2 size={18} />
                    Profile
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  className="justify-start flex items-center gap-2 text-red-500 cursor-pointer"
                  onClick={logoutHandler}
                >
                  <LogOut size={18} />
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex gap-3 border-t pt-4">
              <Button variant="outline" asChild>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </Button>

              <Button className="bg-purple-600 text-white hover:bg-purple-700" asChild>
                <Link to="/signup" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
