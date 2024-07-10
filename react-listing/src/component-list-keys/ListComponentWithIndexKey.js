import React from "react";

function ListComponentWithIndexKey() {
  const items = ["Apple", "Banana", "Cherry", "Papaya"];

  return (
    <React.Fragment>
      {items.map((item, index) => (
        <ul key={index}>
          {item}
          {/* <li>{index}</li>
          <li>{item}</li> */}
        </ul>
      ))}
    </React.Fragment>
  );
}

export default ListComponentWithIndexKey;
