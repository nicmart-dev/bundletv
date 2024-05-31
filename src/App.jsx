import React from "react";
import Header from "./components/Header/Header";
import SelectOptions from "./pages/SelectOptions/SelectOptions";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <SelectOptions />
      {/* Other components */}
    </div>
  );
};

export default App;
