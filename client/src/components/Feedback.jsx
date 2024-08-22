import React from "react";
import FeedbackCard from "./FeedbackCard";
import feedbackArray from "../assets/feedbackObject";

const Feedback = () => {
  return (
    <section className="feedback w-full min-h-[100vh] pt-12 pb-12">
      <div className="feedback-content m-auto w-[75%]">
        <div className="header w-full flex gap-4 flex-col items-center">
          <h1 className="text-4xl font-semibold">
            From The EduQuest Community
          </h1>
          <h4 className="text-2xl font-thin">
            148+ million people have already joined EduQuest
          </h4>
        </div>
        <div className="feedback-cards w-full flex flex-wrap items-center justify-around pb-5">
         {
          feedbackArray.map((feedback)=>{
            return <FeedbackCard key={feedback.id} image={feedback.image} name={feedback.name} country={feedback.country} feedback={feedback.feedback}/>
          })
         }
        </div>
      </div>
    </section>
  );
};

export default Feedback;
