import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import { useDispatch } from "react-redux";
import { API_CALL_REQUEST } from "./redux/apiCalling/apiConstant";

function App({ current }) {
  const dispatch = useDispatch();
  useEffect(() =>
    dispatch({
      type: API_CALL_REQUEST,
    })
  );
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={SingleItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
