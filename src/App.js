import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
      
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
