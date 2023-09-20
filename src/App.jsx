import React, { useState } from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import ColorPicker from './component/ColorPicker/ColorPicker';
import Footer from './component/Footer/Footer';

function App() {

  return (<>
  <NavBar/>
  <ColorPicker/>
  <Footer/>
    </>
  );
}

export default App;
