import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Budget from './components/BudgetComponent/Budget';
import HDChannels from './components/HDChannels/HDChannels';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Budget />
        <HDChannels />
        <Routes>
          {/* feel free to change the below code */}
          {/* home and package component*/}
          {/* <Route path='/' element={} />    */}
          {/* <Route path='/package' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
    


export default App;
