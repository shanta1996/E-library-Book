import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const EbookDetails = () => {
  const [eBooks, setEBooks] = useState([])
  // const { id } = useParams()
  const params = useParams()
  const e_bookid = params.ebookID
  useEffect(() => {
    const fetcheBooks = async () => {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/classicbook/${e_bookid}`)
      setEBooks(data)
    }
    fetcheBooks()
  }, [])
  return (
    <>
      <div className='h-screen pt-[200px] grid grid-cols-1 md:grid-cols-2 px-[100px] w-full'>
        <div className='bg-red-600 h-[90%] w-[70%] rounded-xl overflow-hidden rotate bg-cover'>
          <img src={eBooks.image} alt="" className=' md:h-full md:w-full object-cover bg-center ' />
        </div>
        <div className=' '>
          <h3 className='text-[20px] md:text-[30px] font-medium'>{eBooks.book_name}</h3>
          <p className='md:text-[20px] text-[18px]'>{eBooks.description}</p>
          <div className='border-2 border-gray-400 border-solid px-[10px] bg-white mt-5 min:h-[70%]'>
            <div className='border-b-2 border-gray-400 border-solid text-xl font-medium p-3'>BOOKS DETAILS</div>
            <table className='text-md md:text-xl '>

              <tr>
                <td>Publisher:</td>
                <td>{eBooks.publisher}</td>

              </tr>

              <tr>
                <td>Author:</td>
                <td>{eBooks.author}</td>
              </tr>
              <tr>
                <td>Language:</td>
                <td>{eBooks.language}</td>
              </tr>
              <tr>
                <td>Publish Date:</td>
                <td>{eBooks.publish_date}</td>
              </tr>
              <tr>
                <td>Total Pages:</td>
                <td>{eBooks.total_pages}</td>
              </tr>

              <tr>
                <td>Keywords:</td>
                <td>{eBooks.keywords}</td>
              </tr>
            </table>
          </div>
        </div>

      </div>


    </>
  )
}

export default EbookDetails