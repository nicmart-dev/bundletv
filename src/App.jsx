import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import SelectOptions from "./pages/SelectOptions/SelectOptions";
import "./App.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <SelectOptions />
        </Routes>
        {/* Other components */}
      </BrowserRouter>
      {/* TODO: insert footer*/}
    </div>
  );
};

export default App;
