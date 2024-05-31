import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import SelectOptions from "./pages/SelectOptions/SelectOptions";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Budget />
        <Routes>
          {/* feel free to change the below code */}
          {/* home and package component*/}
          {/* <Route path='/' element={} />    */}
          {/* <Route path='/package' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
