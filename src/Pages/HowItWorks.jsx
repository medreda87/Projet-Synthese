import React from 'react'
import Component23 from '../Components/Component23'
import Component24 from '../Components/Component24'
import { FaSearch, FaBalanceScale, FaCalendarPlus, FaTruck, FaStar } from 'react-icons/fa'
import Component14 from '../Components/Component14'
import Component20 from '../Components/Component20'

const HowItWorks = () => {
  return (
    <main className="pt-20">

        <Component14
            buttonText = "About FreshFold"
            titlePart1 = "How <span>FreshFold</span> Works"
            description = "Whether you're looking for laundry services or offering them, our platform makes it simple, secure, and efficient."
        />
      <Component23
        tagText="For Customers"
        titlePart1="Getting Started is <span>Easy</span>"
        description="Book your first laundry service in minutes and enjoy fresh, perfectly cleaned clothes without the hassle."
        rightSideItems={[
          {
            icon: FaSearch,
            title: "Find Providers",
            description: "Browse local laundry shops and independent providers. Use filters to find the perfect match for your needs."
          },
          {
            icon: FaBalanceScale,
            title: "Compare Options",
            description: "View detailed profiles, services, prices, and customer reviews. Make informed decisions with complete transparency."
          },
          {
            icon: FaCalendarPlus,
            title: "Book Service",
            description: "Select your services, choose pickup time, and confirm your booking in just a few clicks."
          },
          {
            icon: FaTruck,
            title: "Receive Delivery",
            description: "Track your order in real-time. Get fresh, clean clothes delivered right to your doorstep."
          },
          {
            icon: FaStar,
            title: "Rate & Review",
            description: "Share your experience to help others find quality services and reward great providers."
          }
        ]}
      />
      <Component23
        tagText="For Providers"
        titlePart1="Grow Your Laundry  <span>Business</span>"
        description="Join our marketplace and reach thousands of customers"
        rightSideItems={[
          {
            icon: FaSearch,
            title: "Find Providers",
            description: "Browse local laundry shops and independent providers. Use filters to find the perfect match for your needs."
          },
          {
            icon: FaBalanceScale,
            title: "Compare Options",
            description: "View detailed profiles, services, prices, and customer reviews. Make informed decisions with complete transparency."
          },
          {
            icon: FaCalendarPlus,
            title: "Book Service",
            description: "Select your services, choose pickup time, and confirm your booking in just a few clicks."
          },
          {
            icon: FaTruck,
            title: "Receive Delivery",
            description: "Track your order in real-time. Get fresh, clean clothes delivered right to your doorstep."
          },
          {
            icon: FaStar,
            title: "Rate & Review",
            description: "Share your experience to help others find quality services and reward great providers."
          }
        ]}
      />
      <Component24 />
      <Component20 />
    </main>
  )
}

export default HowItWorks

