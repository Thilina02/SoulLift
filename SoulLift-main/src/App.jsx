import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from "./pages/Firstpage";
import "./App.css";

const App = () => {
 
  return (
    <div>
      <Router>
       <Routes>
          <Route path='/' element={<Firstpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
