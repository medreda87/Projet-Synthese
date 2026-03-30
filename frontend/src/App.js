import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./layouts/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import FindShops from "./Pages/FindShops";
import Services from "./Pages/Services";
import HowItWorks from "./Pages/HowItWorks";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BecomeProvider from "./Pages/BecomeProvider";

const App = () => {
  return (
    <div>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<FindShops />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/become-provider" element={<BecomeProvider />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
