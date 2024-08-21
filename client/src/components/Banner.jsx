import React from "react";
import bannerImage from '/banner_image.png'

const Banner = () => {
  return (
    <section className="banner w-full min-h-[60vh] pb-10">
        {/* banner  */}
      <div className="banner-content w-[75%]  m-auto h-[60vh] grid grid-cols-2">
        {/* banner text content  */}
        <div className="text-content flex flex-col gap-7 justify-center p-4">
            <h1 className="text-7xl font-semibold">Learn without <br />limits</h1>
            <p className="text-lg text-pretty font-medium">Start, switch or advance your career with more that 7,000 course, Professional Certificates and degrees from World-class universities and companies. </p>
            <div className="buttons flex gap-7 items-center">
            <button className="bg-[#0056d2] px-8 py-6 text-xl rounded-lg text-white font-semibold">Join for Free</button>
            <button className="px-8 py-6 text-xl rounded-lg font-semibold text-[#0056d2] border-2 border-[#0056d2]">Try EduQuest For Business</button>
            </div>
        </div>
        {/* banner image content  */}
        <div className="image-content w-full">
            <img src={bannerImage} alt="" className="m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
