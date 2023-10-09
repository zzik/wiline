import React from "react";
import Users from "./Users";
import Control from "./Control";
import Input from "./Input";

// display component
const Homepage = () => {
  return (
    <section className="wrapper">
      <Users />
      <Input />
      <Control />
    </section>
  );
};

export default Homepage;
