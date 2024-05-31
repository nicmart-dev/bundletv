import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Budget from './components/SelectBudget/SelectBudget';
import HDChannels from './components/HDChannels/HDChannels';
import SelectOptions from "./pages/SelectOptions/SelectOptions";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Budget />
        <HDChannels />
        <SelectOptions/>
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
