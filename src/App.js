import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Component14 from "./Components/Component14";

const App = () => {
  return (
    <div>
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
      <Routes></Routes>
    </div>
  );
};

export default App;
