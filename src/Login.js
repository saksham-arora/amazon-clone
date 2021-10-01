import React from "react";
import "./Login.css";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault(); //Avoid refreshing the page because we dont refresh in react
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <h5>Email</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login_signin" type="submit" onClick={signIn}>
          Sign In
        </button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_register" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
