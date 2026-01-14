import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Component14 from "./Components/Component14";
import Component16 from "./Components/Component16";

import Footer from "./Components/Footer";
import Component23 from "./Components/Component23";
import Component24 from "./Components/Component24";
import Component18 from "./Components/Component18";
import Component20 from "./Components/Component20";
import Component9 from "./Components/Component9";
import Component17 from "./Components/Component17";

const App = () => {
  return (
    <div>
      <Component9 />
      <Component14
        buttonText="About FreshFold"
        titlePart1="Making Laundry <span>Effortless</span>"
        description="We're building the future of laundry services..."
        steps={[
          "Créez votre compte gratuit",
          "Configurez votre profil professionnel",
          "Ajoutez vos services et vos tarifs",
          "Commencez à recevoir des demandes de clients",
        ]}
      />
      <Component23 />
      <Component24 />
      <Component20 />
      <Component18 />
      <Component16 />
      <Component17 />
      <Routes></Routes>

      <Footer />
    </div>
  );
};

export default App;
