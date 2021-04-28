import axios from "axios";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [user,setUser] = useState({
    first_name: ''
  })

  useEffect(() => {
    (
      async() => {
        const { data } = await axios.get(`user`,{withCredentials:true});
        setUser(data);
      }
    )();
  }, [])

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Company name
        </a>
        <ul className="navbar-nav px-3">
          {user ? (
            <li className="nav-item">
              <a className="nav-link" href="#">
                {user.first_name} Sign out
              </a>
            </li>
          ) : (
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          )}
          
        </ul>
      </header>
    </>
  );
};

export default Nav;
