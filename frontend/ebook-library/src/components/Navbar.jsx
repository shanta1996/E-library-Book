import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='bg-slate p-6 '>
        <ul className='flex items-center justify-evenly gap-[50px]'>
          <Link to="" className='flex gap-[10px] font-semibold text-[35px] 2xl:text-[40px]  '>
            <img className='h-[50px]' src="/logo.png" alt="logo" />
            <Link to="/">READBLOOM</Link>
          </Link>
          <form>
            <input type="text" name="search" id="search" placeholder='SEARCH YOUR BOOKS HERE' className='w-[500px] border-2 border-solid border-black p-2 rounded-2xl'/>
          </form>
          <li className='py-2 px-3 border-2 border-solid border-black rounded-md ease-linear duration-[0.1s] hover:border-[3px]'>
          <Link  to="">SIGN UP</Link>
          </li>
          <li className='py-2 px-3 border-2 border-solid border-black rounded-md ease-linear duration-[0.1s] hover:border-[3px]'>
          <Link  to="">LOGIN</Link>
          </li>
          
          
        </ul>
      </nav>

      <div className=' p-6 border-b-2 shadow-sm shadow-slate-100'>
        <ul className='flex items-center text-md gap-[100px] justify-center'>

          <li>
            <Link to="">ABOUT US</Link>
          </li>
          <li>
            <Link to="">E-BOOK</Link>
          </li>
          <li>
            <Link to="">AUDIO BOOK</Link>
          </li>

        </ul>
      </div>
      
    </>
  )
}

export default Navbar