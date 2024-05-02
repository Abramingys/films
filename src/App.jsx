import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Authorisation from './pages/Authorisation';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="container">
      <Header />
      <section className="maincontent">
        <div className="page-container">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          <Authorisation />
          <Registration />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
