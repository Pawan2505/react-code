import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function FetchingData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Fetch Data from API in React with Axios</h3>

        <table className="table table-striped table-bordered">
          <thead>
            <tr className="thead-dark">
              <th>ID</th>
              <th>Title</th>
              <th>Complete</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.completed.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchingData;
