import About from '@/components/About'
import CEOMessage from '@/components/CEOMessage'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Videos from '@/components/Videos'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero />
    <Feature />
    <About />
    <Packages />
    <Videos />
    <CEOMessage />
    </>
  )
}

export default page