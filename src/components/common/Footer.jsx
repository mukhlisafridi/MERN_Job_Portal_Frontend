import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-50 flex flex-col">
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Jobs<span className="text-[#F83002]">Land</span>
                </h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pakistan ki sabse bari job portal. Apne career ki shuruat yahan
                se karein aur behtar mustaqbil banayein. <br />
                Developed by Mukhlis Ur Rehman
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/companies"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Job Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/category/it-software"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    IT & Software
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/marketing"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/engineering"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/healthcare"
                    className="text-gray-600 hover:text-[#6A38C2] transition-colors"
                  >
                    Healthcare
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 text-[#6A38C2]" />
                  <span className="text-sm">info@jobsland.pk</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-[#6A38C2]" />
                  <span className="text-sm">+92 300 1234567</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-[#6A38C2]" />
                  <span className="text-sm">Karachi, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} JobsLand. Developed by Mukhlis Ur
                Rehman. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="bg-gray-100 hover:bg-[#6A38C2] hover:text-white text-gray-600 p-2 rounded-lg transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="bg-gray-100 hover:bg-[#6A38C2] hover:text-white text-gray-600 p-2 rounded-lg transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="bg-gray-100 hover:bg-[#6A38C2] hover:text-white text-gray-600 p-2 rounded-lg transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="bg-gray-100 hover:bg-[#6A38C2] hover:text-white text-gray-600 p-2 rounded-lg transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
