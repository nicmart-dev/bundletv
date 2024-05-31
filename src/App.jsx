import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectOptions from "./pages/SelectOptions/SelectOptions";
import PackagePage from "./pages/PackagePage/PackagePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SelectOptions />} />
        <Route path="/package" element={<PackagePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
