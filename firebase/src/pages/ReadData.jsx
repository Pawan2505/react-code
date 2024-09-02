import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import {db} from '../../firebase';
import { NavLink } from 'react-router-dom';
const ReadData = () => {
    const [user, setUser] = useState([])
    async function show() {
        const q = query(collection(db, "user"));
        const querySnapshot = await getDocs(q);
        const newArr = []
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;
            const newData = {
                id,
                ...data
            }
            newArr.push(newData)
        });
        setUser(newArr)
    }
    useEffect(() => {
        show()
    }, [])

    async function del(id) {
        if (confirm("do you want to delete this item?")) {
            await deleteDoc(doc(db, "user", id));
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
                                    <NavLink to={`/update/${users.id}`}>Edit</NavLink>
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

export default ReadData
