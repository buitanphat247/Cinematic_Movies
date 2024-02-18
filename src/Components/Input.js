import React from "react";

const Input = (props) => {
  return <input className={`${props.class}`} {...props}></input>;
};

export default Input;
