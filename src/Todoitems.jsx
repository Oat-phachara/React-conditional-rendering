import React from "react";

function Todoitems(props) {
  return (
    <>
      {props.priority === 0 ? (
        <div style={{ background: "red", color: "black" }}>
          TodoItem{props.number}
        </div>
      ) : (
        <div>TodoItem{props.number}</div>
      )}
    </>
  );
}

export default Todoitems;
