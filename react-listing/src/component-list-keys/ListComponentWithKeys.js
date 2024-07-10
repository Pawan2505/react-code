import React from "react";

function ListComponentWithKeys() {
  const items = [
    { id: 1, name: "Apple", rollNo: 22 },
    { id: 2, name: "Banana", rollNo: 22 },
    { id: 3, name: "Cherry", rollNo: 22 },
  ];

  return (
    // <table>
    //     {items.map((item) => (
    //       <tr key={item.id}>
    //         <td>{item.id}</td>
    //         <td>{item.name}</td>
    //         <td>{item.rollNo}</td>
    //       </tr>
    //     ))}
    // </table>

    <div>
      {items.map((item) => (
        <ul key={item.id}>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.rollNo}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListComponentWithKeys;
