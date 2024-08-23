import React from 'react';

const FeedbackCard = ({ image, name, country, feedback }) => {
  return (
    <section className='feedback-card w-full sm:w-[300px] md:w-[320px] min-h-[450px] max-h-[450px] flex flex-col p-6 border border-gray-200 rounded-lg shadow-md'>
      {/* image */}
      <div className="image w-full mb-4 flex items-center justify-center">
        <img src={image} alt={name} className='w-[80px] h-[80px] rounded-full object-cover' />
      </div>

      {/* description */}
      <div className="description w-full text-center mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-[#382d8b]">{name}</h2>
        <h4 className="text-md md:text-lg">{country}</h4>
        <div className="underline border-2 border-[#4575c1] w-[50%] mt-4 mx-auto"></div>
      </div>

      {/* feedback */}
      <div className="feedback text-center">
        <p className="text-sm md:text-base font-normal">{feedback}</p>
      </div>
    </section>
  );
};

export default FeedbackCard;
