import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            const {data}= await axios.post('http://127.0.0.1:8000/api/login/',{username,password})
            setUsername('')
            setPassword('')

            localStorage.setItem('user',JSON.stringify(data))
            navigate('/home')
        }
        catch(err){
            toast.error(err.response.data.error)
        }
    }
  return (
    <>
        <ToastContainer theme='colored' position='top center'></ToastContainer>
    <div className='bg-slate w-full md:w-[30vw] min-h-[40vh] shadow-md py-4 mx-auto'>
        <form className='px-7' onSubmit={handleSubmit}>
            <div className=' flex flex-col'>
                <label htmlFor="username" className='text-lg font-normal'>Username</label>
                <input className='border-b-[1px] border-black outline-none p-1' type="text" name="username" id="username" onChange={e=>setUsername(e.target.value)} required/>
            </div>
            <div className='flex flex-col mt-5'>
                <label htmlFor="password" className='text-lg font-normal'>Password</label>
                <input className='border-b-[1px] border-black outline-none p-1' type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} required />
            </div>
            <div className='mt-5'>
            <button  className='underline'>Login</button>
            
            <Link to="/" className='underline ml-6'>Register</Link>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login