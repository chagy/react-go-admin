import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/users"} component={Users} />
        <Route path={"/register"} component={Register} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
