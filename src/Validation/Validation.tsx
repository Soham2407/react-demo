import React from "react";
import "./Validation.css";

const Validation = (props: any) => {
  let message;
  const classes = [];
  if (props.inputLength === 0) {
    message = "";
  } else if (props.inputLength <= 5) {
    classes.push("red");
    message = "text to short";
  } else {
    classes.push("green");
    message = "text to long";
  }
  return (
    <div>
      <p className={classes.join("")}>{message}</p>
    </div>
  );
};

export default Validation;
