import React from "react";
import logos from "../assets/companyLogosObject";

const Collaboration = () => {
  return (
    <section className="collaboration w-full min-h-[30vh] bg-[#f5f5f5] py-16">
      {/* collaboration section  */}
      <div className="content w-[90%] md:w-[75%] m-auto">
        {/* heading */}
        <div className="heading flex items-center justify-center p-3 text-center">
          <p className="text-lg md:text-2xl font-medium">
            We collaborate with{" "}
            <span className="text-[#0056d2]">
              325+ leading universities and companies
            </span>
          </p>
        </div>
        {/* company logos */}
        <div className="company-logos w-full m-auto p-4 md:p-8">
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {logos.map((logo) => {
              return (
                <li key={logo.id} className="cursor-pointer">
                  <img
                    src={logo.src}
                    alt=""
                    className="w-20 md:w-28 lg:w-32 h-auto"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
