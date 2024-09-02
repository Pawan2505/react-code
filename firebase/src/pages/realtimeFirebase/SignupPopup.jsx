import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
const SignupPopup = () => {
    const redirect = useNavigate()
    function signup() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                redirect('/success')
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <button onClick={signup}>signup with google</button>
        </>
    )
}

export default SignupPopup
