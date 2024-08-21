import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full p-4 border-b-2 border-gray-200 shadow-sm flex items-center justify-around">
      {/*logo*/}
      <div className="logo w-[250px]">
        <span className="font-[Ubuntu] text-4xl font-semibold text-[#0358d2] cursor-pointer">
          EduQuest
        </span>
      </div>
      {/*search bar*/}
      <div className="search-bar w-[30%] flex border-2 border-gray-200 p-2 rounded-full">
        <input
          type="text"
          className="w-full bg-transparent border-0 outline-none ml-3"
          placeholder="search courses ..."
        />
        <span class="material-symbols-outlined text-[2rem] bg-[#0358d2] text-white rounded-full p-[5px]">
          search
        </span>
      </div>
      {/*nav links*/}
      <div className="nav-links  ">
        <ul className="flex gap-6 items-center justify-center">
          <li className=" cursor-pointer text-[#8f7979] hover:text-[#0358d2]">Online Degrees</li>
          <li className=" cursor-pointer text-[#8f7979] hover:text-[#0358d2]">Find Your New Career</li>
          <li className=" cursor-pointer">
            <button className="bg-[#0358d2] p-3 rounded-lg font-medium text-lg text-white">Log In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
