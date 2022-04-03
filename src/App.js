import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddVehicle from './pages/addVehicle';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add_vehicle' element={<AddVehicle />} />
      </Routes>
    </Router>
  );
}

export default App;
