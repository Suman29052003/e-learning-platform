import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <nav className="w-full p-4 border-b-2 border-gray-200 shadow-sm flex items-center justify-between md:justify-around flex-wrap">
      {/* Logo */}
      <div className="logo w-auto mb-2 md:mb-0">
        <span className="font-[Ubuntu] text-3xl md:text-4xl font-semibold text-[#0358d2] cursor-pointer">
          EduQuest
        </span>
      </div>

      {/* Search Bar */}
      <div className="search-bar w-full md:w-[30%] flex border-2 border-gray-200 p-2 rounded-full mb-2 md:mb-0">
        <input
          type="text"
          className="w-full bg-transparent border-0 outline-none ml-3"
          placeholder="Search courses ..."
        />
        <span className="material-symbols-outlined text-[1.5rem] md:text-[2rem] bg-[#0358d2] text-white rounded-full p-[5px] cursor-pointer">
          search
        </span>
      </div>

      {/* Nav Links */}
      <div className="nav-links w-full md:w-auto flex items-center justify-center md:justify-between flex-wrap">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <li className="cursor-pointer text-[#8f7979] hover:text-[#0358d2] text-center">
            Online Degrees
          </li>
          <li className="cursor-pointer text-[#8f7979] hover:text-[#0358d2] text-center">
            Find Your New Career
          </li>
          <li className="cursor-pointer">
            <Link to="/login">
            <Button variant="outlined" >
       Log In
      </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
