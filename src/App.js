import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Announcements from './pages/Announcements';

import * as React from "react";
import { createRoot } from "react-dom";
import  ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/announcement' element={<Announcements/>} />
      </Routes>
    </Router>
  );
}

export default App;
