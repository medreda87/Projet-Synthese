import React from 'react'
import Component14 from '../Components/Component14'
import Component9 from '../Components/Component9'
import Component17 from '../Components/Component17'
import Component18 from '../Components/Component18'
import Component20 from '../Components/Component20'
import Component3 from '../Components/Component3'
import Component23 from '../Components/Component23'
import Component24 from '../Components/Component24'

const Home = () => {
  return (
    <main className="pt-20">
      <Component14
        buttonText="About FreshFold"
        titlePart1="Making Laundry <span>Effortless</span>"
        description="We're building the future of laundry services — connecting customers with trusted local providers for a seamless, hassle-free experience."
        steps={[
          "Créez votre compte gratuit",
          "Configurez votre profil professionnel",
          "Ajoutez vos services et vos tarifs",
          "Commencez à recevoir des demandes de clients"
        ]}
      />
      <Component23 />
      <Component24 />
      <Component9 />
      <Component17 />
      <Component18 />
      <Component20 />
      <Component3 />
    </main>
  )
}

export default Home

