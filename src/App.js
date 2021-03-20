import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import UserProvider from "./Providers/UserProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

