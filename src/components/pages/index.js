import React from "react";
import { LoginObj } from "../Login/Data";
import Login from "../Login/Login";
const Home = () => {
  return (
    <>
      <Login {...LoginObj} />
    </>
  );
};

export default Home;
