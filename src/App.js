import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import Terms from './Pages/Home/Homescreen/terms';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/terms' element={<Terms/>}>
            </Route>
            <Route path='*' element={<div>404 Not Found</div>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
