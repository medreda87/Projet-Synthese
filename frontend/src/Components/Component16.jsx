import React, { useState } from 'react'
import TitleSectionText from './ui/TitleSectionText'
import Button from './Button'
import Icon from './ui/Icon'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
const Component16 = ({
  tagText = null,
  titlePart1 = "Ready to Get <span>Started ?</span>",
  description = "Fill out the form below and we'll get you set up in no time.",
  formFields = {
    laudry_name: {
      label: "Business Name",
      placeholder: "Your Laundry Shop",
      value: ""
    },
    provider_name: {
      label: "Owner Name",
      placeholder: "John Doe",
      value: ""
    },
    email: {
      label: "Email Address",
      placeholder: "john@example.com",
      value: ""
    },
    password: {
  label: "Password",
  placeholder: "********",
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
    laudry_name: formFields.laudry_name.value || "",
    provider_name: formFields.provider_name.value || "",
    email: formFields.email.value || "",
    phone: formFields.phone.value || "",
    address: formFields.address.value || "",
    password: formFields.password.value || ""
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
const [toast, setToast] = useState({ message: '', type: '', show: false });
  const handleSubmit = (e) => {
  e.preventDefault();

  axios.post('http://localhost:8000/api/providers', formData)
    .then(res => {
      // Provider created
      setToast({ message: 'Provider added successfully!', type: 'success', show: true });

      // reset form
      setFormData({
        laudry_name: '',
        provider_name: '',
        email: '',
        phone: '',
        address: '',
        password: ''
      });
    })
    .catch(err => {
      let errorMsg = 'Something went wrong!';
      if (err.response && err.response.data.errors) {
        errorMsg = Object.values(err.response.data.errors).flat().join(', ');
      }
      setToast({ message: errorMsg, type: 'error', show: true });
    });
};

  return (
    <div className="bg-primary-light py-16 px-4">
      <div className="container">
{toast.show && (
  <div
    className={`fixed top-6 right-6 z-50 max-w-sm w-full px-5 py-4 rounded-2xl shadow-2xl
      flex items-start gap-4 transition-transform duration-500 ease-out
      ${toast.type === 'success' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'}
      transform animate-slideIn`}
  >
    {/* Icon */}
    <div className="flex-shrink-0 mt-1 text-2xl">
      {toast.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
    </div>

    {/* Message */}
    <div className="flex-1 text-white font-medium text-sm md:text-base">
      {toast.message}
    </div>

    {/* Close Button */}
    <button
      onClick={() => setToast({ ...toast, show: false })}
      className="flex-shrink-0 text-white font-bold text-lg hover:text-gray-200 transition"
    >
      ✖
    </button>
  </div>
)}
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
                <label htmlFor="laudry_name" className="block text-sm font-medium text-[#1E2A36] mb-2">
                  {formFields.laudry_name.label}
                </label>
                <input
                  type="text"
                  id="laudry_name"
                  name="laudry_name"
                  value={formData.laudry_name}
                  onChange={handleChange}
                  placeholder={formFields.laudry_name.placeholder}
                  className="w-full px-4 py-3 bg-[#F7F9FA] border border-[#DDE2E8] rounded-lg text-[#1E2A36] placeholder-[#62707D] focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                />
              </div>

              {/* Owner Name */}
              <div>
                <label htmlFor="provider_name" className="block text-sm font-medium text-[#1E2A36] mb-2">
                  {formFields.provider_name.label}
                </label>
                <input
                  type="text"
                  id="provider_name"
                  name="provider_name"
                  value={formData.provider_name}
                  onChange={handleChange}
                  placeholder={formFields.provider_name.placeholder}
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
              {/* Password */}
<div>
  <label htmlFor="password" className="block text-sm font-medium text-[#1E2A36] mb-2">
    {formFields.password.label}
  </label>
  <input
    type="password"
    id="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder={formFields.password.placeholder}
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

