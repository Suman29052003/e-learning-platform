import React from 'react'
import imageNextStep from '/Image-Next-Step.png'

const Nextstep = () => {
  return (
    <section className='next-step w-full bg-[#f5f7f8] min-h-[60vh] flex items-center justify-center'>
      <div className="main-content w-[75%] grid grid-cols-2">
        <div className="image-content w-full ">
            <img src={imageNextStep} alt="" className=''/>
        </div>
        <div className="text-content m-auto flex flex-col gap-8">
            <p className="text-4xl text-[#1f1f1f] font-bold">Take the next step toward <br />your personal and <br />professional goals <br />with EduQuest.</p>
            <span className="text-lg font-medium">Join now to receive personalized recommendations from the full EduQuest catalog.</span>
            <button className="bg-[#0056d2] px-2 py-3 text-lg rounded-lg text-white font-semibold">Join for Free</button>
        </div>
      </div>
    </section>
  )
}

export default Nextstep
