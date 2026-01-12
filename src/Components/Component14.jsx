import React from 'react'

const Component14 = ({ 
  buttonText = "About FreshFold",
  titlePart1 = "Making Laundry <span>Effortless</span>",
  description = "We're building the future of laundry services — connecting customers with trusted local providers for a seamless, hassle-free experience.",
  steps = null
}) => {
  return (
    <div className="bg-primary-light min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-4xl mx-auto">
        {/* About FreshFold Button */}
        <div className="mb-8">
          <button className="bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0EA5C9] font-medium px-6 py-2 rounded-full transition-colors duration-200">
            {buttonText}
          </button>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl bg-background-primary-light title-hero-section lg:text-7xl font-bold mb-6 leading-tight"
  dangerouslySetInnerHTML={{ __html: titlePart1 }} />


        {/* Descriptive Text */}
        <p className="text-lg md:text-xl text-[#62707D] max-w-2xl mx-auto leading-relaxed mb-12">
          {description}
        </p>

        {/* Steps Section - Only renders if steps array exists and has items */}
        {steps && steps.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0EA5C9] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                {/* Step Text */}
                <p className="text-[#1E2A36] text-lg leading-relaxed text-left pt-2">
                  {step}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Component14

