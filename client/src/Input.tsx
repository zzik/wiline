import React from "react";

// this component was supposed to be dynamically changed using Control.tsx
// OOP - inputs should vary in complexity and type
const Input = () => {
  return (
    <section className="input">
      <label htmlFor="id">user id below</label> <br />
      <input type="text" name="id" id="delete" />
      <input type="button" value="delete" />
    </section>
  );
};

export default Input;
