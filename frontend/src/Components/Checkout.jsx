import React, { useState } from 'react'
import Icon from './ui/Icon'
import Button from './Button'
import { FaArrowLeft, FaCheck, FaMapMarkerAlt } from 'react-icons/fa'
import LocationForm from './Location'
import { sendEmail } from '../utils/send_email'

const Checkout = ({
  initialStep = 1,
  onBackToHome,
  onSubmit,
  orderSummary = {
    deliveryInfo: {
      title: "Livraison payante",
      message: "Si le prix du ramassage est supérieur à 100 DH, la livraison sera gratuite"
    }
  },
  onUseCurrentLocation,
  mapComponent = null
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const [allFormData, setAllFormData] = useState({
    // Step 1 data
    fullName: "Imran",
    phoneNumber: "0687910242",
    saveInfo: true,
    // Step 2 data
    pickupAddress: "",
    pickupDate: "",
    pickupTime: "",
    // Step 3 data
    deliveryAddress: "",
    deliveryDate: "",
    deliveryTime: ""
  })

  const [errors , setErros ] = useState({})

  const validate=(currentStep)=>{
    if(currentStep === 1 ){
      if(!allFormData.fullName){
      
        setErros({
          ...errors , fullName :"Please enter your name"
        })
        return false
      }
      else if(!allFormData.phoneNumber){
        setErros({
          ...errors , phoneNumber :"Please enter your name"
        })
        return false 
      }

      return true
      
    }
    if(currentStep === 2){
      if(!allFormData.pickupAddress){
        setErros({
          ...errors , pickupAddress :"Please enter your adresse"
        })
        return false 

      }
      else if(!allFormData.pickupDate){
        setErros({
          ...errors , pickupDate :"Please enter date of pickup"
        })
        return false 

      }
      else if(!allFormData.pickupTime){
        setErros({
          ...errors , pickupTime :"Please enter time of pickup"
        })
        return false 
      }
      return true
    }

    if(!allFormData.deliveryAddress){
      setErros({
        ...errors , deliveryAddress :"Please enter your adresse"
      })
      return false 

    }
    if(!allFormData.deliveryDate){
      setErros({
        ...errors , deliveryDate :"Please enter date of delivery"
      })
      return false 
      
    }
    if(!allFormData.deliveryTime){
      setErros({
        ...errors , pickupTime :"Please enter time of pickup"
      })
      return false 
    }
    return true
  }

  const [positionRamassage, setPositionRamassage] = useState({
    latitude: 35.74804478729811,
    longitude: -5.818333625793458,
  });

  const [positionLivraison, setPositionLivraison] = useState({
    latitude: 35.74804478729811,
    longitude: -5.818333625793458,
  });

  const handleStep1Change = (e) => {
    const { name, value, type, checked } = e.target
    setAllFormData({
      ...allFormData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleStep2Change = (e) => {
    const { name, value } = e.target
    setAllFormData({
      ...allFormData,
      [name]: value
    })
  }

  const handleStep3Change = (e) => {
    const { name, value } = e.target
    setAllFormData({
      ...allFormData,
      [name]: value
    })
  }

  const handleNext = () => {
    if (currentStep < 3) {
   
      if(currentStep == 2){
        setAllFormData({
          ...allFormData , locationRamassage : positionRamassage
        })
      }

      if(validate(currentStep)){
        
        setCurrentStep(currentStep + 1)
      }
    } 
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      onBackToHome && onBackToHome()
    }
  }

  const handleFinalSubmit = () => {
  

    if (validate(currentStep)) {
      sendEmail()
    }
  }

  const renderProgressSteps = () => {
    return (
      <div className="flex items-center gap-4">
        {/* Step 1 */}
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            currentStep > 1 
              ? 'bg-[#0EA5C9] text-white' 
              : currentStep === 1 
              ? 'bg-[#0EA5C9] text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}>
            {currentStep > 1 ? <Icon icon={FaCheck} theme="light" size="sm" /> : '1'}
          </div>
          <span className="text-sm text-[#62707D]">Informations personnelles</span>
        </div>
        <div className={`flex-1 h-0.5 ${currentStep > 1 ? 'bg-[#0EA5C9]' : 'bg-gray-300'}`}></div>
        
        {/* Step 2 */}
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            currentStep > 2 
              ? 'bg-[#0EA5C9] text-white' 
              : currentStep === 2 
              ? 'bg-[#0EA5C9] text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}>
            {currentStep > 2 ? <Icon icon={FaCheck} theme="light" size="sm" /> : '2'}
          </div>
          <span className="text-sm text-[#62707D]">Ramassage</span>
        </div>
        <div className={`flex-1 h-0.5 ${currentStep > 2 ? 'bg-[#0EA5C9]' : 'bg-gray-300'}`}></div>
        
        {/* Step 3 */}
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            currentStep === 3 
              ? 'bg-[#0EA5C9] text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}>
            3
          </div>
          <span className="text-sm text-[#62707D]">Livraison</span>
        </div>
      </div>
    )
  }

  const renderOrderSummary = () => {
    return (
      <div className="lg:col-span-1">
        <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
          <h2 className="text-xl font-bold text-[#022545] mb-4">Résumé de la commande</h2>
          
          {/* Delivery Info Box */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon icon={FaCheck} theme="accent" size="md" className="text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-green-700 mb-1">{orderSummary.deliveryInfo.title}</p>
                <p className="text-sm text-green-600">{orderSummary.deliveryInfo.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <button onClick={handleBack} className="flex items-center gap-2 text-[#0EA5C9] mb-4 hover:underline">
                <Icon icon={FaArrowLeft} theme="primary" size="sm" />
                Retour
              </button>
              <h1 className="text-3xl font-bold text-[#022545] mb-6">Checkout</h1>
              {renderProgressSteps()}
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-[#022545] mb-6">Informations personnelles</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#022545] mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={allFormData.fullName}
                      onChange={handleStep1Change}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#022545] mb-2">
                      Numéro de téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={allFormData.phoneNumber}
                      onChange={handleStep1Change}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={allFormData.saveInfo}
                      onChange={handleStep1Change}
                      className="w-5 h-5 text-[#0EA5C9] border-gray-300 rounded focus:ring-[#0EA5C9]"
                    />
                    <label htmlFor="saveInfo" className="text-sm text-[#62707D]">
                      Enregistrer mes informations pour la prochaine fois
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button onClick={handleNext} className="w-full">
                      Suivant
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Pickup Details */}
            {currentStep === 2 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-bold text-[#022545] mb-6">Détails de ramassage</h2>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon={FaMapMarkerAlt} theme="primary" size="md" />
                    <h3 className="font-bold text-[#022545]">Adresse de Ramassage</h3>
                  </div>
                  <p className="text-sm text-[#62707D] mb-3">Saisir l'adresse de ramassage manuellement</p>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={allFormData.pickupAddress}
                    onChange={handleStep2Change}
                    placeholder="Votre adresse complète"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent mb-4"
                  />
                  
                 
                </div>

                <div>
                 
                  <LocationForm
                    setPosition={setPositionRamassage}
                    position={positionRamassage}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#022545] mb-2">
                      Date de Ramassage
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="pickupDate"
                        value={allFormData.pickupDate}
                        onChange={handleStep2Change}
                        placeholder="mm/dd/yyyy"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#022545] mb-2">
                      Heure de Ramassage
                    </label>
                    <select
                      name="pickupTime"
                      value={allFormData.pickupTime}
                      onChange={handleStep2Change}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                    >
                      <option value="">Sélectionner --</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button onClick={handleNext} className="flex-1">
                    Suivant
                  </Button>
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 bg-gray-200 text-[#022545] rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
                  >
                    <Icon icon={FaArrowLeft} theme="dark" size="sm" />
                    Retour
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Delivery Details */}
            {currentStep === 3 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-bold text-[#022545] mb-6">Détails de livraison</h2>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon={FaMapMarkerAlt} theme="primary" size="md" />
                    <h3 className="font-bold text-[#022545]">Adresse de Livraison</h3>
                  </div>
                  <p className="text-sm text-[#62707D] mb-3">Saisir l'adresse de livraison manuellement</p>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={allFormData.deliveryAddress}
                    onChange={handleStep3Change}
                    placeholder="Votre adresse complète"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent mb-4"
                  />
                  
                
                </div>

                <div>
                  <LocationForm
                     position={positionLivraison}
                     setPosition={setPositionLivraison}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#022545] mb-2">
                      Date de Livraison
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="deliveryDate"
                        value={allFormData.deliveryDate}
                        onChange={handleStep3Change}
                        placeholder="mm/dd/yyyy"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#022545] mb-2">
                      Heure de Livraison
                    </label>
                    <select
                      name="deliveryTime"
                      value={allFormData.deliveryTime}
                      onChange={handleStep3Change}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5C9] focus:border-transparent"
                    >
                      <option value="">-- Sélectionner --</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button onClick={handleFinalSubmit} className="flex-1">
                    Passer la commande
                  </Button>
                  <button
                    onClick={handleBack}
                    className="px-6 py-3 bg-gray-200 text-[#022545] rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
                  >
                    <Icon icon={FaArrowLeft} theme="dark" size="sm" />
                    Retour
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          {renderOrderSummary()}
        </div>
      </div>
    </div>
  )
}

export default Checkout

