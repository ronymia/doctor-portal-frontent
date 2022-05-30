import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar';

function App() {
  return (
    <div className='	 mx-auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='appointment' element={<Appointment />}></Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
