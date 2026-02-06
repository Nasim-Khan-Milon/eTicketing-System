import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import { Navbar } from '@/components/ui/navbar'

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
