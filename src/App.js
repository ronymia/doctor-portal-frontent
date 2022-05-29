import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Shared/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
