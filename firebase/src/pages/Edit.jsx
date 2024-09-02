import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {db} from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Edit = () => {
    const { register, handleSubmit, reset } = useForm();

    //// find id from params
    console.log(useParams())
    const { userId } = useParams()

    /// redirect
    const redirect = useNavigate()

    //// get single user data
    async function singleUser(userId) {
        const docRef = doc(db, "user", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            reset(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        singleUser(userId)
    }, [userId])

    ///// update
    async function submitData(data) {
        await updateDoc(doc(db, 'user', userId), data)
        redirect('/show')
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
                        <button className='btn btn-warning px-5 py-2'>update</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Edit
