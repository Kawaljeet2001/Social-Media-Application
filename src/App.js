import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import UserProvider from "./Providers/UserProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

