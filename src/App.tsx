import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Roles from "./pages/roles/Roles";
import RoleCreate from './pages/roles/RoleCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/register"} component={Register} />
        <Route path={"/login"} component={Login} />
        <Route path={"/users"} exact component={Users} />
        <Route path={"/users/create"} exact component={UserCreate} />
        <Route path={"/users/:id/edit"} component={UserEdit} />
        <Route path={"/roles"} exact component={Roles} />
        <Route path={"/roles/create"} exact component={RoleCreate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
