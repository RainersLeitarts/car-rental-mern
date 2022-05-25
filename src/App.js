import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './hooks/ScrollToTop';
import AddVehicle from './pages/addVehicle';
import Home from './pages/home';
import LoginPage from './pages/login';
import Me from './pages/me';
import RegisterPage from './pages/register';
import SingleVehiclePage from './pages/singleVehicle';

function App() {
  return (
    <Router>

      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add_vehicle' element={<AddVehicle />} />
          <Route path='/vehicle/:id' element={<SingleVehiclePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/me' element={<Me />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
