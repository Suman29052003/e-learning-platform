import React from "react";
import FeedbackCard from "./FeedbackCard";
import feedbackArray from "../assets/feedbackObject";

const Feedback = () => {
  return (
    <section className="feedback w-full min-h-[100vh] py-12">
      <div className="feedback-content m-auto w-[90%] md:w-[75%]">
        {/* header */}
        <div className="header w-full flex flex-col gap-4 items-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold">
            From The EduQuest Community
          </h1>
          <h4 className="text-lg md:text-2xl font-thin">
            148+ million people have already joined EduQuest
          </h4>
        </div>

        {/* feedback cards */}
        <div className="feedback-cards w-full flex flex-wrap gap-6 md:gap-8 items-center justify-center pt-8">
          {feedbackArray.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              image={feedback.image}
              name={feedback.name}
              country={feedback.country}
              feedback={feedback.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
