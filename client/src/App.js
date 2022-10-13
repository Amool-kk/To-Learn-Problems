import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Articles from "./pages/Articles/Articles";
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn/SignIn'
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
