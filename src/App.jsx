import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Budget from './components/BudgetComponent/Budget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Budget />
        <Routes>
          {/* feel free to change the below code */}
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/package' element={<h1>Package</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
