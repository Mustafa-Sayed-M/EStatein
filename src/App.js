import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Components:
import TopBar from "./Components/TopBar/TopBar";
import Navbar from "./Components/Navbar/Navbar";
import ScrollFromTop from "./Pages/ScrollFromTop";
import StartToday from "./Components/StartToday/StartToday";
import Footer from "./Components/Footer/Footer";

// Context:
import { NavbarContextProvider } from "./Context/NavbarContext";

// Pages:
import Home from './Pages/Home';

// Lazy Loading for pages:
const About = lazy(() => import("./Pages/About"));
const Properties = lazy(() => import("./Pages/Properties/Properties"));
const Property = lazy(() => import("./Pages/Properties/Property/Property"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <NavbarContextProvider>
      <div className="App bg-grey-color-8 text-white min-h-screen">
        {/* Top Bar */}
        <TopBar />
        {/* Navbar */}
        <Navbar />
        {/* Scroll From Top When Route Changed! */}
        <ScrollFromTop />
        {/* Routes */}
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:propertyId" element={<Property />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        {/* Start Today */}
        <StartToday />
        {/* Footer */}
        <Footer />
      </div>
    </NavbarContextProvider>
  );
}

export default App;