import React from "react";
import { useState } from "react";

const Char = (props: any) => {
  const [mouseIn, setMouseIn] = useState(false);
  return (
    <div
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      className="char-hover"
      style={{
        //display: "inline-block",
        padding: "10px",
        width: "15px",
        height: "20px",
        border: "1px solid black",
        background: "orange",
        color: "white",
        transform: mouseIn ? "translateY(-10px)" : "translateY(0px)"
      }}
      onClick={props.clicked}
    >
      {props.character}
    </div>
  );
};

export default Char;
