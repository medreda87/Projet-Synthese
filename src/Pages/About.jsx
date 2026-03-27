import React from 'react'
import Component14 from '../Components/Component14'
import Component18 from '../Components/Component18'
import Component17 from '../Components/Component17'
import Component30 from '../Components/Component30'

const About = () => {
  return (
    <main className="pt-20">
      <Component14
        buttonText="About FreshFold"
        titlePart1="About <span>FreshFold</span>"
        description="We're building the future of laundry services — connecting customers with trusted local providers for a seamless, hassle-free experience."
      />
      <Component30 />
      <Component18
        titlePart1="How We <span>Help</span>"
        description="FreshFold creates value for both customers and service providers"
      />
      <Component17 />
    </main>
  )
}

export default About

