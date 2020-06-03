import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
