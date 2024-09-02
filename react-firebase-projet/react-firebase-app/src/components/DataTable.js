import React, { useState, useEffect } from "react";
import db from "../firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "user"));

        const querySnapshot = await getDocs(q);
        var arr = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
          const id = doc.id;
          const data = doc.data();
          const user = { id, ...data };
          arr.push(user);
        });
        console.log(arr);
        setData(arr);

        // setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="table-container">
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
