import React from 'react';
import outcomeImage from '/outcomes.png';

const Outcomes = () => {
  return (
    <section className='outcome w-full bg-[#ebf3ff] py-12'>
      {/* outcome section */}
      <div className="outcome-content w-[90%] md:w-[75%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* image content */}
        <div className="image-content flex items-center justify-center relative">
          <img
            src={outcomeImage}
            alt="Learner Outcomes"
            className='w-full h-auto scale-[1.05]'
          />
        </div>
        {/* text content */}
        <div className="text-content flex flex-col p-4 md:p-8 gap-6 md:gap-8 items-start justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
            Learner Outcomes on EduQuest
          </h1>
          <p className="text-base md:text-lg font-medium text-center md:text-left">
            77% of learners report career benefits, such as new skills, increased pay, and new job opportunities. 
            <span className="text-[#0056d2] hover:underline cursor-pointer">
              2023 EduQuest Learner Outcomes Report
            </span>
          </p>
          <button className="bg-[#0056d2] px-4 py-2 text-base md:text-lg rounded-lg text-white font-semibold mx-auto md:mx-0">
            Join for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
