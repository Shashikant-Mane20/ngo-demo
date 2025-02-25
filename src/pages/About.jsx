import React from 'react'
import Banner from '../components/Banner';
const About = () => {
  return (
    <div>
      <Banner 
              text="About Us" 
              imageUrl="https://plus.unsplash.com/premium_photo-1682092618317-9b50d60e6e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <div className="p-6">
        <p className="text-lg">
          This is the About page content where you can introduce your NGO.
        </p>
      </div>
    </div>
  )
}

export default About
