import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Collaboration from '../components/Collaboration'
import Certification from '../components/Certification'
import Outcomes from '../components/Outcomes'
import Feedback from '../components/Feedback'
import Nextstep from '../components/Nextstep'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Collaboration/>
      <Certification/>
      <Outcomes/>
      <Feedback/>
      <Nextstep/>
      <Footer/>
    </div>
  )
}

export default Home
