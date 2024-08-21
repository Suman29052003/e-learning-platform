import React, { useState } from "react";
import courses from "../assets/certiificatesCoursesObject";
import Cards from "./Cards";
import Button from "@mui/material/Button";

const Certification = () => {
  const [showMore, setShowMore] = useState(6);
  const courseLength = courses.slice(0, showMore);


  return (
    <section className="certification w-full py-12">
      <div className="certification-content w-[75%] m-auto">
        <div className="heading flex flex-col gap-3">
          <h4 className="text-xl text-[#494da2] font-semibold">
            Specializations and Professional Certificates
          </h4>
          <h1 className="text-5xl font-light">Most Popular Certificates</h1>
          <p className="font-normal text-xl">
            Explore our most popular programs, get job-ready for an in-demand
            career.
          </p>
        </div>

        {/* course cards */}
        <div className="cards-section w-full flex flex-wrap gap-8 justify-center pt-8">
          {courseLength.map((course, i) => {
            return (
              <Cards
                key={course.id}
                title={course.title}
                image={course.image}
                companyLogo={course.companyLogo}
                type={course.type}
                desc={course.description}
              />
            );
          })}
        </div>
        <div className="button w-full flex items-center justify-center p-8 gap-3">
          <Button disabled={showMore >= 12} variant="contained" onClick={() => setShowMore(showMore + 3)}>
            Show More
          </Button>
          <Button disabled={showMore <= 6} variant={`courseLength>0?${'disabled'}:${'contained'}`} onClick={() => setShowMore(showMore - 3)}>
            Show Less
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certification;
