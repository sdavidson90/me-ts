import React from "react";
import "./styles/main.css";
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
