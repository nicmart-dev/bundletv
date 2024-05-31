import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero1 from './components/hero1/hero1';
import Budget from './components/BudgetComponent/Budget';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero1 />
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
}

export default App;
