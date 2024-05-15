import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Authorisation from './pages/Authorisation';
import Home from './pages/Home';
import MovieInformation from './pages/MovieInformation';
import NotFound from './pages/NotFound';
import SearchMovies from './pages/SearchMovies';
import ThemeProvider from './prodivers/themeContext';

function App() {
  return (
    <div className="container">
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <section className="maincontent">
        <div className="page-container">
          <Routes>
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchMovies />} />
            <Route path="/signin" element={<Authorisation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
