import React from "react";
import bannerImage from "/banner_image.png";

const Banner = () => {
  return (
    <section className="banner w-full min-h-[60vh] pb-12">
      {/* banner */}
      <div className="banner-content w-[90%] md:w-[75%] m-auto h-auto md:h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        {/* banner text content */}
        <div className="text-content flex flex-col gap-5 md:gap-7 justify-center p-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
            Learn without <br /> limits
          </h1>
          <p className="text-base md:text-lg text-pretty font-medium">
            Start, switch, or advance your career with more than 7,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="buttons flex flex-col sm:flex-row gap-4 md:gap-7 items-center justify-center md:justify-start">
            <button className="bg-[#0056d2] px-6 py-4 md:px-8 md:py-6 text-lg md:text-xl rounded-lg text-white font-semibold">
              Join for Free
            </button>
            <button className="px-6 py-4 md:px-8 md:py-6 text-lg md:text-xl rounded-lg font-semibold text-[#0056d2] border-2 border-[#0056d2]">
              Try EduQuest For Business
            </button>
          </div>
        </div>
        {/* banner image content */}
        <div className="image-content w-full flex justify-center md:justify-end">
          <img src={bannerImage} alt="Banner" className="w-[80%] h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
