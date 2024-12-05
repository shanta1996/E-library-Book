import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='fixed left-0 right-0 top-0 '>
      <nav className=' bg-slate p-6 w-[100%] '>
        <ul className='flex items-center justify-evenly w-[100%]'>
          <Link to="" className='flex gap-[10px] font-semibold text-[20px] sm:text-[25px] md:text-[30px] xl:text-[35px] 2xl:text-[40px]  '>
            <img className='h-[50px]' src="/logo.png" alt="logo" />
            <Link to="/">READBLOOM</Link>
          </Link>
          <form>
            <input type="text" name="search" id="search" placeholder='SEARCH YOUR BOOKS HERE' className='md:w-[300px] xl:w-[500px] border-2 border-solid border-black p-2 rounded-2xl md:block hidden'/>
          </form>
          <li className='py-2 px-3 border-2 border-solid border-black rounded-md ease-linear duration-[0.1s] hover:border-[3px]'>
          <Link  to="">SIGN UP</Link>
          </li>
          <li className='py-2 px-3 border-2 border-solid border-black rounded-md ease-linear duration-[0.1s] hover:border-[3px]'>
          <Link  to="">LOGIN</Link>
          </li>
        </ul>
      </nav>

      <div className='bg-white p-6 border-b-2 shadow-sm shadow-slate-100'>
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
      </div>
    </>
  )
}

export default Navbar