import React from 'react';
import CarFeaturePage from './components/carFeaturePage.js';
import { BrowserRouter as router, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
const App = () => {
  return (
    <div className='App'>
      <HomePage />
      <CarFeaturePage />
    </div>
  )
}

export default App;


