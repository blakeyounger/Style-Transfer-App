import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Intro from './components/Intro'
import HowItWorks from './components/HowItWorks'
import SampleDeepStyles from './components/SampleDeepStyles'
import DeepStyleYourPic from './components/DeepStyleYourPic'
import Footer from './components/Footer'
import api from './utils/api.js'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  
  render() {
  	
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Header} />
          <Intro />
          <HowItWorks />
          <SampleDeepStyles />
          <h1>Styles</h1>
  	        
        	<DeepStyleYourPic />
        	<Footer /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
