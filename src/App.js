import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51JbnQUFHT7uPJt4yUyxFHxZUABD2gXA4BYkJyx2doYBJI9n9Aybpel7UH0esKVX4GidLIZ9QobQRsnDKdUt3tUYF00HHrGVBce"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Only runs once when the component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : ", authUser);

      if (authUser) {
        // the user was already logged in or just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // the authUser is null and the user is logged out
      }
    }); //Listener Login and Logout
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
