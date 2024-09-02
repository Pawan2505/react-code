import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../../../firebase'

const SigninFormGoogle = () => {
  const { register, handleSubmit } = useForm()

  function submitInfo(data) {
    console.log(data)
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((data) => {
        console.log(data.user.providerData[0])
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
            <button className='btn btn-success'>signin</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SigninFormGoogle
