/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
 
    </Router>
     );
}

export default App;

     {/* 
    we need reactrouter. React Router is a collection of navigational components that compose declaratively with your application */}
     {/* 
    1)Switch in reacteouter is used for switching between pages without talking talking to the server thus the page doesnot reload
    2)The route here is the key, and the function is the value. 
    3)The router is the mechanism in the framework that uses the route specified by the user to figure out what function to invoke
    4)
  */ }
     {/* localhost.com */}
     {/* localhost.com/login */}
     {/* localhost.com/checkout */}