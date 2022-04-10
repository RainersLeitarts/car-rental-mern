import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddVehicle from './pages/addVehicle';
import Home from './pages/home';
import SingleVehiclePage from './pages/singleVehicle';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add_vehicle' element={<AddVehicle />} />
        <Route path='/vehicle/:id' element={<SingleVehiclePage />} />
      </Routes>
    </Router>
  );
}

export default App;
