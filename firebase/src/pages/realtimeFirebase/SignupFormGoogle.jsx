import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router-dom'

const SignupFormGoogle = () => {
  const { register, handleSubmit } = useForm()
  const redirect = useNavigate()

  function submitInfo(data) {
    console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        alert("signup successfully!")
        redirect('/signin')

      })
      .catch((err) => { console.log(err) })
  }
  return (
    <>
      <div className="col-6 mx-auto my-5 shadow p-5">
        <h2 className='text-center'>SignIn</h2>
        <form action="" onSubmit={handleSubmit(submitInfo)}>
          <div className="mt-4">
            <input type="text" {...register('email')} className='form-control' placeholder='enter email' />
          </div>
          <div className="mt-4">
            <input type="text" {...register('password')} className='form-control' placeholder='enter password' />
          </div>
          <div className="mt-4">
            <button className='btn btn-success'>signup</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignupFormGoogle
