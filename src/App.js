import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Home/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";
import Navigation from "./components/Home/Navigation";
import Tasks from "./components/Home/Tasks";
import "./App.css";
import User from "./components/Home/User";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && (
        <Router>
          <header className="main-header">
            <Navigation></Navigation>
          </header>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/user" component={User} />
          </Switch>
        </Router>
      )}
    </React.Fragment>
  );
}

export default App;
