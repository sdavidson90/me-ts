"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var navbar_1 = require("./components/navbar/navbar");
var home_1 = require("./pages/home");
var shop_1 = require("./pages/shop");
var about_1 = require("./pages/about");
var profile_1 = require("./pages/profile");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <navbar_1["default"] />
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route path="/" exact component={home_1["default"]}/>
        <react_router_dom_1.Route path="/shop" component={shop_1["default"]}/>
        <react_router_dom_1.Route path="/about" component={about_1["default"]}/>
        <react_router_dom_1.Route path="/profile" component={profile_1["default"]}/>
      </react_router_dom_1.Switch>
    </react_router_dom_1.BrowserRouter>);
}
exports["default"] = App;
