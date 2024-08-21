import React from "react";
import logos from "../assets/companyLogosObject";

const Collaboration = () => {
  return (
    <section className="collaboration w-full min-h-[30vh] bg-[#f5f5f5] py-16">
        {/* collaboration section  */}
      <div className="content w-[75%] m-auto ">
        {/* heading  */}
        <div className="heading flex items-center justify-center p-3">
          <p className="text-2xl font-medium">
            We collaborate with{" "}
            <span className="text-[#0056d2]">325+ leading universities and companies</span>
          </p>
        </div>
        {/* company logos  */}
        <div className="company-logos w-full m-auto p-8">
            <ul className="flex items-center justify-center gap-8">
                {
                    logos.map((logo)=>{
                        return (
                            <li key={logo.id} className="cursor-pointer">
                                <img src={logo.src} alt="" className="" />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
