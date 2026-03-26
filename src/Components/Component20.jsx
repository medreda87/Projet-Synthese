import React from 'react'
import TitleSectionText from './ui/TitleSectionText'
import Button from './Button'

const Component20 = ({
  tagText = null,
  titlePart1 = "Join the FreshFold <span>Community</span>",
  description = "Whether you need laundry services or provide them, we're here to help.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Contact Us",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-b from-[#F1FAFD] to-[#E8F5F9] rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="text-center max-w-3xl mx-auto">
            {/* Title and Description using TitleSectionText */}
            <div className="text-center">
              <TitleSectionText
                titlePart1={titlePart1}
                description={description}
                descriptionClass="mx-auto"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                variant="primary"
                onClick={onPrimaryClick}
                className="w-full sm:w-auto"
              >
                {primaryButtonText}
              </Button>
              <button
                onClick={onSecondaryClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-gray-300 bg-white text-[#1E2A36] font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component20

