import React from 'react'
import BlackRingSection from '../components/BlackRingSection'
import Blogs from '../components/Blogs'
import BraceletSection from '../components/BraceletSection'
import ComfortCollection from '../components/ComfortCollection'
import Companies from '../components/Companies'
import Footer from '../components/Footer'
import GoldCollection from '../components/GoldCollection'
import HeaderJ from '../components/HeaderJ'
import Join from '../components/Join'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import TrendySection from '../components/TrendySection'

const Template = () => {
  return (
    <div>
        <Navbar/>
        <HeaderJ/>
        <BraceletSection/>
        <BlackRingSection/>
        <ComfortCollection/>
        <GoldCollection/>
        <TrendySection/>
        <Companies/>
        <Testimonials/>
        <Join/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Template