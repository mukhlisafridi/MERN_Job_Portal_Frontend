import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '@/components/HeroSection'
import CategoryCarousel from '@/components/CategoryCarousel'
import LatestJobs from '@/components/LatestJobs'
import Footer from '@/components/common/Footer'
import useGetAllJobs from '@/hooks/useGetALLJobs'
const Home = () => {
  useGetAllJobs()
  return (
    <div>
      <Navbar/>
        <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home
