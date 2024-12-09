import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [openHam, setOpenHam] = useState(false)
  const [eBooks, setEBooks] = useState([])
  const [searchBook, setSearchBook] = useState({ 'search': '' })
  useEffect(() => {
    const fetchKidbook = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/ebooks/")
      setEBooks(data)
      setSearchBook(data)
    }
    fetchKidbook()
  }, [])

  const HandleSearch = (event) => {
    setSearchBook({
      ...searchBook, [event.target.name]: event.target.value
    })
  }

  const SearchBooks = () => {
    window.location.href = '/search/' + searchBook.search
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

      <nav className=' bg-slate py-6  w-[100%] fixed left-0 right-0 top-0 z-10 '>
        <div className='flex items-center justify-around text-[18px] md:text-[20px] w-[100%] relative'>
          <Link to="" className='flex items-center gap-[10px] font-semibold text-[20px] sm:text-[25px] md:text-[30px] xl:text-[35px] 2xl:text-[40px]'>
            <img className='h-[50px]' src="/logo.png" alt="logo" />
            <Link to="/home">READBLOOM</Link>
          </Link>
          <div onClick={() => setOpenHam(!openHam)} className="text-[30px] cursor-pointer block  lg:hidden">
            <i className={openHam ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </div>
          <div className={`flex flex-col lg:flex-row  lg:mt-0  py-[80px] lg:py-0 items-center gap-[80px] absolute lg:static top-[60px] left-0 bg-slate h-[400px] lg:h-auto  w-full lg:w-auto transition-all duration-500 ease-linear ${openHam ? 'left-0' : 'left-[-100%]'}`}>
            <div>
              <Link to="">ABOUT US</Link>
            </div>
            <div className='category '>
              <Link to="" >CATEGORIES</Link>
            </div>
            <div className='flex items-center gap-[10px]'>
              <input onChange={HandleSearch} type="text" name="search" id="search" placeholder='SEARCH YOUR BOOKS HERE' className='md:w-[300px] xl:w-[500px] border-2 border-solid border-black p-2 rounded-2xl md:block text-[18px] md:text-[20px]' />
              <button onClick={SearchBooks} type='button'>
                <i className="fa-solid fa-magnifying-glass text-[18px] md:text-[20px]"></i>
              </button>

            </div>

          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar