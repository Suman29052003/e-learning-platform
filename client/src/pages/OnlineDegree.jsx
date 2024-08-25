import React, { useState } from 'react'
import onlineDegrees from '../assets/degreeObject'
import Cards from '../components/Cards'
import Button from "@mui/material/Button";
import CarouselComponent from '../components/Carousel';
import { useParams } from 'react-router-dom';

const OnlineDegree = () => {

  const [showMore, setShowMore] = useState(8);
  const onlineDegreesLength = onlineDegrees.slice(0, showMore);

  return (
    <section id='degree' className='w-full'>
      {/* Header Section */}
      <div className="header w-full bg-[#002761] min-h-[150px] flex items-center">
        <h2 className='text-white font-semibold text-2xl md:text-4xl w-[90%] m-auto text-center'>
          Take your career to the next level with an online degree
        </h2>
      </div>

      {/* Degree Cards Section */}
      <div className="w-[90%] m-auto min-h-[100vh] py-8">
        <h2 className="text-xl md:text-2xl font-medium">
          Find the right degree for you
        </h2>

        <div className="degree-card m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 w-full">
          {onlineDegreesLength.map((degree, index) => (
            <Cards
              key={index}
              id={degree.id}
              image={degree.image}
              title={degree.title}
              desc={degree.description}
              maxHeight={'550px'}
            />
          ))}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="button w-full flex flex-col md:flex-row items-center justify-center gap-3 p-4">
          <Button
            disabled={showMore >= onlineDegrees.length}
            variant="contained"
            onClick={() => setShowMore(showMore + 3)}
          >
            Show More
          </Button>
          <Button
            disabled={showMore <= 6}
            variant="outlined"
            onClick={() => setShowMore(showMore - 3)}
          >
            Show Less
          </Button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className='w-full bg-[#002761] min-h-[60vh] flex items-center justify-center'>
        <div className="w-[90%]">
          <CarouselComponent />
        </div>
      </div>
    </section>
  )
}

export default OnlineDegree