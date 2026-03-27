import React from 'react'
import Icon from './ui/Icon'
import { FaBullseye, FaEye } from 'react-icons/fa'

const Component30 = ({
  mission = {
    title: "Our Mission",
    description: "To simplify laundry for everyone by creating a trusted marketplace that connects customers with quality service providers. We believe clean clothes shouldn't require stress, time, or guesswork.",
    icon: FaBullseye
  },
  vision = {
    title: "Our Vision",
    description: "A world where finding reliable laundry services is as easy as ordering food online. We envision empowering local laundry businesses to thrive while giving customers unmatched convenience.",
    icon: FaEye
  }
}) => {
  return (
    <div className="bg-[#F7F9FA] py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#0EA5C9] to-[#1BB38C] flex items-center justify-center">
                <Icon icon={mission.icon} theme="light" size="xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A36] mb-4">
              {mission.title}
            </h3>
            <p className="text-[#62707D] leading-relaxed">
              {mission.description}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#0EA5C9] flex items-center justify-center">
                <Icon icon={vision.icon} theme="light" size="xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#1E2A36] mb-4">
              {vision.title}
            </h3>
            <p className="text-[#62707D] leading-relaxed">
              {vision.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component30

