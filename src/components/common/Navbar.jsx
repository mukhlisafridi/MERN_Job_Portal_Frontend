import React, { useState } from "react";
import { Menu, X, User2, LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <nav className="bg-white border-b relative">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          Jobs<span className="text-[#F83002]">Land</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 font-medium items-center">
          <li className="cursor-pointer hover:text-[#F83002]">Home</li>
          <li className="cursor-pointer hover:text-[#F83002]">Jobs</li>
          <li className="cursor-pointer hover:text-[#F83002] mr-5">Browser</li>

          {user ? (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer ml-4 h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <h4 className="font-medium text-base">Mukhlis Afridi</h4>
                </div>
                <div className="flex flex-col">
                  <Button variant="link" className="justify-start">
                    <User2 size={17} /> Profile
                  </Button>
                  <Button variant="link" className="justify-start">
                    <LogOut size={17} /> Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex items-center gap-3 ml-4">
              <Link to="login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="signup">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (FIXED) */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 shadow-md md:hidden px-8 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browser</li>
          </ul>

          {!user && (
            <div className="flex gap-3">
              <Button variant="outline">Login</Button>
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
