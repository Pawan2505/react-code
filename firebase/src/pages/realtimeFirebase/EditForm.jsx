import React, { useEffect } from 'react'
import {db} from '../../../firebase';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { get, ref, set } from 'firebase/database';

const EditForm = () => {
    const { register, handleSubmit,reset } = useForm();
    const { id } = useParams()
    const redirect = useNavigate()

    async function singleUser(id) {
        const dbRef = ref(db, `student/${id}`);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const targetObject = snapshot.val();
            reset(targetObject)
        } else {
            alert("error");
        }
    }

    useEffect(()=>{
        singleUser(id)
    },[id])

    function submitData(data) {
        const newDocRef = ref(db, `/student/${id}`);
        set(newDocRef, data).then(() => {
            redirect('/view')
        }).catch((error) => {
            alert("error: ", error.message);
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

export default EditForm
