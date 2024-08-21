import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Collaboration from '../components/Collaboration'
import Certification from '../components/Certification'
import Outcomes from '../components/Outcomes'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Collaboration/>
      <Certification/>
      <Outcomes/>
    </div>
  )
}

export default Home
