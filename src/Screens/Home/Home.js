import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'
import Project from '../../components/Project/Project'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Feature/>
        <Project/>
    </div>
  )
}

export default Home