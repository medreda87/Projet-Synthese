import React from 'react'
import Button from './Button'
import Icon from './ui/Icon'
import { FaSearch, FaBalanceScale, FaCalendarPlus, FaTruck, FaStar, FaArrowRight } from 'react-icons/fa'
import TitleSectionText from './ui/TitleSectionText'


const Component23 = ({
  tagText = "Rejoignez + 100 prestataires",
  titlePart1 = "Getting Started is <span>Easy</span>",
  description = "Book your first laundry service in minutes and enjoy fresh, perfectly cleaned clothes without the hassle. Simple scheduling, reliable pickup, and fast delivery—so you can focus on what matters most.",
  ctaButtonText = "Become a Provider",
  rightSideItems  = [
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
  ]
}) => {
  return (
    <div className="bg-white min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-6 md:sticky top-[40px]">
            {/* Tag */}
            <TitleSectionText tagText={tagText} titlePart1={titlePart1} description={description} />
            {/* CTA Button */}
            <div>
              <Button variant="primary" icon={<Icon icon={FaArrowRight} theme="light" size="md" />}>
                {ctaButtonText}
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {rightSideItems && rightSideItems.length > 0 && rightSideItems.map((item, index) => (
              <div key={index} className="flex gap-4 mb-[30px]">
                {/* Icon Box */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon icon={item.icon || FaSearch} theme="light" size="md" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#62707D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component23

