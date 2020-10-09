import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="main-grid-area">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact to="/" component={Products} />
          <Route exact to="/cart" component={Cart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
