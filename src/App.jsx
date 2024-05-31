import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero1/hero1"
import SelectOptions from "./pages/SelectOptions/SelectOptions";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<SelectOptions />} />
        {/* Other components */}
      </Routes>

      {/* TODO: insert footer*/}
    </BrowserRouter>
  );
};

export default App;
