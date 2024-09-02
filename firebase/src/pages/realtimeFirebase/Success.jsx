import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const redirect = useNavigate()
    const [authUser, setAuthUser] = useState({})
    function show() {
        onAuthStateChanged(auth, (user) => {
            console.log(user.providerData[0]);
            setAuthUser(user.providerData[0])
        })
    }
    useEffect(() => {
        show()
    }, [])

    function logOut(){
        signOut(auth).then(()=>{
            alert("logout")
            redirect('/')
        })
    }
    return (
        <>
            <ul className='col-6 mx-auto shadow p-5 my-5'>
                <li>{authUser.displayName}</li>
                <li>{authUser.email}</li>
                <li><img src={authUser.photoURL} alt="" /></li>
                <button onClick={logOut}>signout</button>
            </ul>
        </>
    )
}

export default Success
