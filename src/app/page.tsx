import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}

export default page
