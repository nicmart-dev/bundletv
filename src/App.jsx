import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import SelectOptions from "./pages/SelectOptions/SelectOptions";
import PackagePage from "./pages/PackagePage/PackagePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SelectOptions />} />
        <Route path="/package" element={<PackagePage />} />
        {/* Other components */}
      </Routes>

      {/* TODO: insert footer*/}
    </BrowserRouter>
  );
};

export default App;
