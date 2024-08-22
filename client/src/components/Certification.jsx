import React, { useState } from "react";
import courses from "../assets/certiificatesCoursesObject";
import Cards from "./Cards";
import Button from "@mui/material/Button";

const Certification = () => {
  const [showMore, setShowMore] = useState(6);
  const courseLength = courses.slice(0, showMore);

  return (
    <section className="certification w-full py-12">
      <div className="certification-content w-[90%] md:w-[75%] m-auto">
        {/* heading */}
        <div className="heading flex flex-col gap-3 text-center md:text-left">
          <h4 className="text-lg md:text-xl text-[#494da2] font-semibold">
            Specializations and Professional Certificates
          </h4>
          <h1 className="text-3xl md:text-5xl font-light">
            Most Popular Certificates
          </h1>
          <p className="font-normal text-base md:text-xl">
            Explore our most popular programs, get job-ready for an in-demand
            career.
          </p>
        </div>

        {/* course cards */}
        <div className="cards-section w-full flex flex-wrap gap-6 md:gap-8 justify-center pt-8">
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

        {/* buttons */}
        <div className="button w-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-3">
          <Button
            disabled={showMore >= courses.length}
            variant="contained"
            onClick={() => setShowMore(showMore + 3)}
          >
            Show More
          </Button>
          <Button
            disabled={showMore <= 6}
            variant="outlined"
            onClick={() => setShowMore(showMore - 3)}
          >
            Show Less
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certification;
