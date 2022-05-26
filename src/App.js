import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Home/Purchase/Purchase';
import Login from './components/Login/Login';
import Navbar from './components/Shared/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
