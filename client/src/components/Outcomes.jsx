import React from 'react'
import outcomeImage from '/outcomes.png'

const Outcomes = () => {
  return (
    <section className='outcome w-full bg-[#ebf3ff] max-h-[70vh]'>
      <div className="outcome-content w-[75%] m-auto grid grid-cols-2 gap-10">
        <div className="image-content flex items-center justify-center relative">
            <img src={outcomeImage}alt="" className='scale-[1.05]'/>
        </div>
        <div className="text-content flex flex-col p-8 gap-8 items-left justify-center">
            <h1 className="text-5xl font-semibold">Learner Outcomes on EduQuest</h1>
            <p className="text-lg font-medium">77% of learners report career benefits, such as new skills, increased pay, and new job opportunities. <span className="text-[#0056d2] hover:underline cursor-pointer">2023 EduQuest Learner Outcomes Report</span></p>
            <button className="bg-[#0056d2] px-2 py-3 text-lg rounded-lg text-white font-semibold">Join for Free</button>
        </div>
      </div>
    </section>
  )
}

export default Outcomes
