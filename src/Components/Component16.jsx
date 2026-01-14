import React, { useState } from 'react'
import TitleSectionText from './ui/TitleSectionText'
import Button from './Button'
import Icon from './ui/Icon'
import { FaCheck, FaArrowRight } from 'react-icons/fa'

const Component16 = ({
  tagText = null,
  titlePart1 = "Ready to Get <span>Started ?</span>",
  description = "Fill out the form below and we'll get you set up in no time.",
  formFields = {
    businessName: {
      label: "Business Name",
      placeholder: "Your Laundry Shop",
      value: ""
    },
    ownerName: {
      label: "Owner Name",
      placeholder: "John Doe",
      value: ""
    },
    email: {
      label: "Email Address",
      placeholder: "john@example.com",
      value: ""
    },
    phone: {
      label: "Phone Number",
      placeholder: "+1 234 567 890",
      value: ""
    },
    address: {
      label: "Business Address",
      placeholder: "123 Main Street, City, State",
      value: ""
    }
  },
  termsText = "By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll contact you within 24 hours to complete your registration.",
  submitButtonText = "Submit Application",
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    businessName: formFields.businessName.value || "",
    ownerName: formFields.ownerName.value || "",
    email: formFields.email.value || "",
    phone: formFields.phone.value || "",
    address: formFields.address.value || ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  return (
    <div className="bg-primary-light py-16 px-4">
      <div className="container">
      <div className="text-center mb-8">
            <TitleSectionText
              tagText={tagText}
              titlePart1={titlePart1}
              description={description}
              descriptionClass="mx-auto"
            />
          </div>

        {/* White Rounded Card */}
        <div className="bg-white md:w-[70%] w-full mx-auto rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header Section */}
         
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two Column Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-[#1E2A36] mb-2">
                  {formFields.businessName.label}
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder={formFields.businessName.placeholder}
                  className="w-full px-4 py-3 bg-[#F7F9FA] border border-[#DDE2E8] rounded-lg text-[#1E2A36] placeholder-[#62707D] focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                />
              </div>

              {/* Owner Name */}
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-[#1E2A36] mb-2">
                  {formFields.ownerName.label}
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder={formFields.ownerName.placeholder}
                  className="w-full px-4 py-3 bg-[#F7F9FA] border border-[#DDE2E8] rounded-lg text-[#1E2A36] placeholder-[#62707D] focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1E2A36] mb-2">
                  {formFields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={formFields.email.placeholder}
                  className="w-full px-4 py-3 bg-[#F7F9FA] border border-[#DDE2E8] rounded-lg text-[#1E2A36] placeholder-[#62707D] focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1E2A36] mb-2">
                  {formFields.phone.label}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={formFields.phone.placeholder}
                  className="w-full px-4 py-3 bg-[#F7F9FA] border border-[#DDE2E8] rounded-lg text-[#1E2A36] placeholder-[#62707D] focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                />
              </div>
            </div>

            {/* Business Address - Full Width */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-[#1E2A36] mb-2">
                {formFields.address.label}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={formFields.address.placeholder}
                className="w-full px-4 py-3 bg-[#F7F9FA] border border-[#DDE2E8] rounded-lg text-[#1E2A36] placeholder-[#62707D] focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="bg-[#F7F9FA] rounded-lg p-4 flex items-start gap-3">
              <Icon icon={FaCheck} theme="primary" size="md" className="flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#62707D] leading-relaxed">
                {termsText}
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                icon={<Icon icon={FaArrowRight} theme="light" size="sm" />}
                className="w-full bg-gradient-to-r from-[#0EA5C9] to-[#1BB38C] hover:from-[#0d94b8] hover:to-[#16a077] text-white px-8 py-4 rounded-lg text-lg"
              >
                {submitButtonText}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Component16

