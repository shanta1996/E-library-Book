import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [eBooks, setEBooks] = useState([])
  const [searchBook, setSearchBook] = useState({'search':''})
  useEffect(() => {
    const fetchKidbook = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/ebooks/")
      setEBooks(data)
      setSearchBook(data)
    }
    fetchKidbook()
  }, [])

  const HandleSearch=(event)=>{
    setSearchBook({
      ...searchBook,[event.target.name]:event.target.value
    })
  }

  const SearchBooks=()=>{
    window.location.href='/search/'+searchBook.search
  }

  const category = document.querySelector(".category")
  const category_box = document.querySelector(".category-box")
  if (category) {
    category.addEventListener("click", () => {
      category_box.style.opacity = 1
    })
  }

  return (
    <>
      <div className='fixed left-0 right-0 top-0 z-10'>
        <nav className=' bg-slate p-6 w-[100%] '>
          <ul className='flex items-center justify-evenly w-[100%]'>
            <Link to="" className='flex gap-[10px] font-semibold text-[20px] sm:text-[25px] md:text-[30px] xl:text-[35px] 2xl:text-[40px]  '>
              <img className='h-[50px]' src="/logo.png" alt="logo" />
              <Link to="/">READBLOOM</Link>
            </Link>
            <div className='flex items-center gap-[10px]'>
              <input onChange={HandleSearch} type="text" name="search" id="search" placeholder='SEARCH YOUR BOOKS HERE' className='md:w-[300px] xl:w-[500px] border-2 border-solid border-black p-2 rounded-2xl md:block hidden' />
              <button onClick={SearchBooks} type='button'>
              <i className="fa-solid fa-magnifying-glass "></i>
              </button>
             
            </div>
            <div>
            </div>
            <li className='py-2 px-3 border-2 border-solid border-black rounded-md ease-linear duration-[0.1s] hover:border-[3px]'>
              <Link to="">SIGN UP</Link>
            </li>
            <li className='py-2 px-3 border-2 border-solid border-black rounded-md ease-linear duration-[0.1s] hover:border-[3px]'>
              <Link to="">LOGIN</Link>
            </li>
          </ul>
        </nav>

        <div className='bg-white p-6 border-b-2 shadow-sm shadow-slate-100'>
          <ul className='flex items-center text-md gap-[100px] justify-center relative'>

            <li>
              <Link to="">ABOUT US</Link>
            </li>
            <li className='category '>
              <Link to="" >CATEGORIES</Link>
            </li>
            <div className='absolute bg-slate min-h-[100px] w-[500px] top-10 grid grid-cols-1 md:grid-cols-2 justify-items-center  category-box opacity-0'>
              <Link to="" className=''>Kidsbook</Link>
              <Link to="" className=''>classic</Link>
              <Link to="" className=''>Kidsbook</Link>
              <Link to="" className=''>classic</Link>
              <Link to="" className=''>classic</Link>
              <Link to="" className=''>Classic</Link>
            </div>

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