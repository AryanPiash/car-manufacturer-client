import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Home/Purchase/Purchase';
import Navbar from './components/Shared/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
