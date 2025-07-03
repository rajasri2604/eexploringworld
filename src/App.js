import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Footer from './components/Footer';
import 'animate.css';
import SummerOffers from './components/SummerOffers';
import TravelModes from './components/TravelModes';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import Packages from './pages/Packages';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="bg-blue-50 min-h-screen">
        <Nav toggleSidebar={toggleSidebar} />
        
        <main className="max-w-7xl mx-auto px-4">
          <Routes>
           
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Top Destinations</h2>
                  <Categories />
                  <SummerOffers />
                  <TravelModes />
                </>
              }
            />

            
            <Route path="/home" element={<HomePage />} />

            <Route path="/destination" element={<DestinationsPage />} />
            <Route path="/packages" element={<Packages/>} />
            <Route path="/destinations" element={<DestinationsPage/>} />
            
          </Routes>
        </main>
<br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
