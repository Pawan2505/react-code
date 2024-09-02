import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../../firebase';

const Create = () => {
    const { register, handleSubmit } = useForm();

  async function submitData(data) {
    const docRef = await addDoc(collection(db, "user"), data);
    console.log(docRef)
    console.log(docRef.id)
    
  }
    return (
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
    )
}

export default Create
