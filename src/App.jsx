import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// import Movies from './components/Movies/Movies';

// import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <section className="maincontent">
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
