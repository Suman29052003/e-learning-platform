import React from 'react';
import imageNextStep from '/Image-Next-Step.png';

const Nextstep = () => {
  return (
    <section className='next-step w-full bg-[#f5f7f8] min-h-[60vh] flex items-center justify-center py-12'>
      <div className="main-content w-[90%] md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* image content */}
        <div className="image-content w-full flex items-center justify-center">
            <img src={imageNextStep} alt="Next Step" className='w-full max-w-md object-cover' />
        </div>

        {/* text content */}
        <div className="text-content flex flex-col gap-6 md:gap-8 m-auto text-center md:text-left">
            <p className="text-2xl md:text-4xl text-[#1f1f1f] font-bold">
              Take the next step toward <br />
              your personal and <br />
              professional goals <br />
              with EduQuest.
            </p>
            <span className="text-base md:text-lg font-medium">
              Join now to receive personalized recommendations from the full EduQuest catalog.
            </span>
            <button className="bg-[#0056d2] px-6 py-3 text-base md:text-lg rounded-lg text-white font-semibold">
              Join for Free
            </button>
        </div>
      </div>
    </section>
  );
};

export default Nextstep;
