import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthWrapper from "./pages/auth-wrapper/AuthWrapper";
import PrivateRoute from "./pages/private-route/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";

import "./App.css";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
};

export default App;
