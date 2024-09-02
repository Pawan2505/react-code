import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Header = () => {
    const [authUser, setAuthUser] = useState([])
    function show() {
        onAuthStateChanged(auth, (user) => {
            setAuthUser(user)
        })
    }
    useEffect(() => {
        show()
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/show">show</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/update">update</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/insert">insert(realtime)</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/view">view(realtime)</NavLink>
                            </li><li className="nav-item">
                                <NavLink className="nav-link" to="/signupGoogle">signupGoogle</NavLink>
                            </li>

                            {
                                authUser===null?
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signup">signup</NavLink>
                                    </li> 
                                    : 
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/success">logout</NavLink>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
