import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Card'



function App(){
  return (
    <div className="App">
      <Navbar title="Lista de Mascotas"/>
      <Cards />
    </div>
  );
}

export default App;
