import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Component14 from "./Components/Component14";
import Component16 from "./Components/Component16";
import Checkout from "./Components/Checkout";

import Footer from "./Components/Footer";
import Component23 from "./Components/Component23";
import Component24 from "./Components/Component24";
import Component18 from "./Components/Component18";
import Component20 from "./Components/Component20";
import Component9 from "./Components/Component9";
import Component17 from "./Components/Component17";
import Component25 from "./Components/Component25";
import Component22 from "./Components/Component22";
import { Header } from "./layouts/Header";
import FindShops from "./Pages/FindShops";
const App = () => {
  return (
    <div>
      <Header />
    
      <Routes>
        <Route path="/shops" element={<FindShops />} />
        <Route path="/" element={<FindShops />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
