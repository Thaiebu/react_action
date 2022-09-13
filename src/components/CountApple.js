import React from "react";
import { useState } from "react";

export function CountApple() {
  const [NumberOfApple, setNumberOfApple] = useState(0);
  function AppleDisplay(NumberOfApple) {
    if (NumberOfApple === 0 || NumberOfApple === 1) {
      return `john has ${NumberOfApple} apple`;
    } else if (NumberOfApple > 1) {
      return `john has ${NumberOfApple} apple`;
    } else if (NumberOfApple < 1) {
      return `john has ${NumberOfApple} apple`;
    }
  }

  function ToomanyApple() {
    if (NumberOfApple > 10) {
      return "Too many Apple";
    }
  }
  return (
    <div>
      NumberOfApple
      <h1>{AppleDisplay(NumberOfApple)} </h1>
      <button
        onClick={() => setNumberOfApple((currentvalue) => currentvalue + 1)}
        className="add-btn"
      >
        Increase
      </button>
      <br></br>
      <button
        onClick={() => setNumberOfApple((currentvalue) => currentvalue - 1)}
        className="decrease-btn"
        style={{ display: NumberOfApple <= 0 ? "None" : "" }}
      >
        Decrease
      </button>
      {ToomanyApple()}
      {NumberOfApple > 15 ? <h1>Tooo To many Apple</h1> : ""}
    </div>
  );
}
