import React from "react";
import Todoitems from "./Todoitems";
import "./todocomponent.css";

function Todocomponent() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div id="display">
      <h2>TODO</h2>

      {items.map((i) => (
        <div id="item">
          <Todoitems
            number={i}
            priority={i === 1 || i === 3 ? 0 : 1}
            key={crypto.randomUUID()}
          />
        </div>
      ))}
    </div>
  );
}

export default Todocomponent;
