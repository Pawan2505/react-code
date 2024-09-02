import React from 'react'
import {db} from '../../../firebase';
import { push, ref, set } from 'firebase/database';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
    const { register, handleSubmit } = useForm();
    const redirect = useNavigate()

    function submitData(data) {
        const newDocRef = push(ref(db, "student"));
        set(newDocRef, data)
        .then(()=>{
            redirect('/view')
        })
        .catch((err)=>{
            console.log(err)
        })



        
    }
    return (
        <>
            <div className='col-6 mx-auto shadow p-5 my-5'>
                <form action="" onSubmit={handleSubmit(submitData)}>
                    <div className='mt-4'>
                        <input type="text" className='form-control' {...register('username')} placeholder='enter username' />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control' {...register('email')} placeholder='enter email' />
                    </div>
                    <div className='mt-4'>
                        <input type="text" className='form-control' {...register('mobile')} placeholder='enter mobile' />
                    </div>
                    <div className="mt-4">
                        <button className='btn btn-success px-5 py-2'>submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default CreateForm
