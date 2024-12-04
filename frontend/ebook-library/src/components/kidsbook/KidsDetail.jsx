import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const KidsDetail = () => {
  const [kidBook, setKidsBook] = useState([])
  const { id } = useParams()
  // const params=useParams()
  // const k_bookid=params.kidsbookID
  useEffect(() => {
    const fetchKidbook = async () => {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/kidsbooks/${id}`)
      setKidsBook(data)
    }
    fetchKidbook()
  }, [])
  return (
    <>
      <img src={kidBook.image} alt="" />
      <p>{kidBook.book_name}</p>
      <h1>single details</h1>
    </>
  )
}

export default KidsDetail