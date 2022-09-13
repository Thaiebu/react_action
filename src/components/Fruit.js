import React from "react";

function Fruit(props) {
  return (
    <div>
      This is a {props.name} and color is {props.color}
    </div>
  );
}

export default Fruit;
