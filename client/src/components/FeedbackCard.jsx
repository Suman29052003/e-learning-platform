import React from 'react'

const FeedbackCard = ({image,name,country,feedback}) => {
  return (
    <section className='feedback-card w-[280px] max-h-[300px] flex p-4 flex-col'>
      <div className="image w-full m-2">
        <img src={image} alt="" className='mx-auto' />
      </div>

      <div className="description w-full text-center p-4 ">
        <h2 className="text-xl font-semibold text-[#382d8b]">{name}</h2>
        <h4 className="text-lg ">{country}</h4>
<div className="underline border-2 border-[#4575c1] w-[50%] mt-4 mx-auto"></div>
      </div>

      <div className="feedback text-center">
        <p className="font-normal">{feedback}</p>
      </div>
    </section>
  )
}

export default FeedbackCard
