import React from 'react';
import Routes from './Routes'

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
