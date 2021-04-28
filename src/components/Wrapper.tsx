import axios from "axios";
import React, { useEffect,useState } from "react";
import { Redirect } from "react-router";
import Menu from "./Menu";
import Nav from "./Nav";

type Props = {
  children: JSX.Element;
};

const Wrapper = ({ children }: Props) => {
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    (
      async() => {
        try {
          const {data} = await axios.get('user');

        }catch(e){
          setRedirect(true)
        }
      }
    )()
  }, [])
  if(redirect){
    return <Redirect to="/login" />
  }
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
