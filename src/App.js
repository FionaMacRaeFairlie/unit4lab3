import React from "react";
import {BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>This site is intended to demonstrate how react-router can be used to create a SPA</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>


      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/category"><Category /></Route>
        <Route path="/products"><Products /></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
