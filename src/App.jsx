import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero1/hero1";
import SelectOptions from "./pages/SelectOptions/SelectOptions";
import PackagePage from "./pages/PackagePage/PackagePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<SelectOptions />} />
        <Route path="/package" element={<PackagePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
