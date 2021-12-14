import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />
  });

  return (
    <div>
      <h3>Top 5 Colors</h3>
      <ol>
        {colorElements}
      </ol>
    </div>
  )

}

export default ColorList;
