import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router";
import "../Login.css";

const Register = () => {
  let first_name = "";
  let last_name = "";
  let email = "";
  let password = "";
  let password_confirm = "";

  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log({
    //     first_name,
    //     email,
    //     password,
    //     password_confirm
    // })

    const response = await axios.post(`http://localhost:8000/api/register`, {
      first_name,
      last_name,
      email,
      password,
      password_confirm,
    });

    setRedirect(true);

    console.log(response);
  };

  if (redirect) {
    return <Redirect to={`/login`} />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          onChange={(e) => (first_name = e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          onChange={(e) => (last_name = e.target.value)}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => (email = e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => (password = e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password Confirm"
          onChange={(e) => (password_confirm = e.target.value)}
        />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Save
        </button>
      </form>
    </main>
  );
};

export default Register;
