import React from 'react';
import { Routes, Route } from 'react-router-dom'; // NO BrowserRouter here
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from './component/Footer';

function App() {
  return (
    <div >
      <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* Add more pages */}
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
