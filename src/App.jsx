import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero1/hero1"
import Budget from './components/SelectBudget/SelectBudget';
import HDChannels from './components/HDChannels/HDChannels';
import SelectOptions from "./pages/SelectOptions/SelectOptions";
import PackagePage from "./pages/PackagePage/PackagePage";

const App = () => {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero/>
        <Budget />
        <HDChannels />
        <SelectOptions/>
        <Routes>
          {/* feel free to change the below code */}
          {/* home and package component*/}
          {/* <Route path='/' element={} />    */}
          {/* <Route path='/package' element={} /> */}
          <Route path="/" element={<SelectOptions />} />
          <Route path="/package" element={<PackagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

    


export default App;
