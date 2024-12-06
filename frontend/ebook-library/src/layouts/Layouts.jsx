// import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Layouts = () => {
  const [eBooks, setEBooks] = useState([])
  return (
    <>
    <Navbar />
   
    <Outlet/>
    </>
  )
}

export default Layouts