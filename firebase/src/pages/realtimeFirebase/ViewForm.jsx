import { get, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import {db} from '../../../firebase';
import { NavLink } from 'react-router-dom';
const ViewForm = () => {
    const [user, setUser] = useState([])
    async function show() {
        const dbRef = ref(db, "student");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            // console.log(snapshot.val())
            const obj = snapshot.val();
            var newObj = {}
            var arr = [];
            for (var key in obj) {
                var id = key;
                var data = obj[key]
                newObj = { id, ...data }
                arr.push(newObj)
            }
            setUser(arr)
        } else {
            alert("error");
        }
    }
    useEffect(() => {
        show()
    }, [])

    async function del(id) {
        if (confirm("deleted?")) {
            const dbRef = ref(db, `student/${id}`);
            await remove(dbRef);
            show()
        }
    }

    return (
        <>
            <table className='table table-striped table-hover table-success container my-5'>
                <thead className='bg-dark text-white'>
                    <th>S No</th>
                    <th>username</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {user.map((users, index) => (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.mobile}</td>
                                <td>
                                    <button onClick={() => del(users.id)} className="btn btn-danger">delete</button>
                                    <NavLink to={`/edit/${users.id}`} className="btn btn-warning">Edit</NavLink>
                                </td>
                            </tr>
                        </>
                    )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ViewForm
