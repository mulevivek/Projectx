import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './Search';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SlidingWindow from './SlidingWindow';

import './App.css';


 

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Content />
      <SlidingWindow/>
      <Footer />

    </div>
  );
}

export default App;

