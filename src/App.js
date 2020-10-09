import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="main-grid-area">
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
