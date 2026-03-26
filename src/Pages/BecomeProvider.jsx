import React from 'react'
import Component16 from '../Components/Component16'
import Component9 from '../Components/Component9'
import Component18 from '../Components/Component18'

const BecomeProvider = () => {
  return (
    <main className="pt-20">
      <Component16
        titlePart1="Ready to Get Started?"
        description="Fill out the form below and we'll get you set up in no time."
        onSubmit={(formData) => {
          console.log('Provider application submitted:', formData)
        }}
      />
      <Component9
        titlePart1="Why Partner with <span>FreshFold?</span>"
        description="We provide everything you need to succeed in the laundry business."
      />
      <Component18
        titlePart1="How We <span>Help</span>"
        description="FreshFold creates value for both customers and service providers"
      />
    </main>
  )
}

export default BecomeProvider

