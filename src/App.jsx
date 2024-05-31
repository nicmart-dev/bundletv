import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectOptions from "./pages/SelectOptions/SelectOptions";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SelectOptions />} />
        {/* Other components */}
      </Routes>

   <Footer/>
    </BrowserRouter>
  );
};

export default App;
