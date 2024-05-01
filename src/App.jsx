import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <section className="maincontent">
        <div className="page-container">
          <Movies />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
