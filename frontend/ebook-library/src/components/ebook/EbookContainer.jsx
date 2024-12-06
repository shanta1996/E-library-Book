import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ebook from './Ebook'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../../App.css'


const EbookContainer = () => {
  // let settings = {
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   infinite: false,
  //   responsive: [
  //     {
  //       breakpoint: 2600,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,

  //       }
  //     },
  //     {
  //       breakpoint: 1536,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,

  //       }
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,

  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }




  const [eBooks, setEBooks] = useState([])
  const [limit, setLimit] = useState(4)
  useEffect(() => {
    const fetchKidbook = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/ebooks/")
      setEBooks(data)
    }
    fetchKidbook()
  }, [])

  const loadMore = () => {
    setLimit(limit + 4)
  }
  const loadLess = () => {
    setLimit(limit - 4)
  }
  const more = document.querySelector("#more")
  const less = document.querySelector("#less")
  if (more) {
    more.addEventListener('click', () => {
      less.style.display = 'block'
      console.log('hello')
    })
  }
  else {
    console.error('error found')
  }

  return (
    <>
      {/* <div className='mt-[100px] h-[80vh] w-full bg-slate'>

        <h2 className='text-center h-[50px] text-[20px] md:text-[25px] xl:text-[30px] font-semibold  w-full'>KIDS BOOK</h2>
        <div className='h-[90%] w-full overflow-hidden px-[60px] md:px-[100px]'>
          <Slider {...settings}
            className='h-[80%] md:h-[100%] px-[20px] sm:px-[55px] md:px-[55px] lg:px-[20px] xl:px-[120px] 2xl:px-[35px] bg-red-700'
          >

            {eBooks.map((books, i) => {
              return (
                <KidsBook key={i} kidsbook={books} />
              )
            })}

          </Slider>
        </div>

      </div> */}


      <div className='bg-slate mt-[100px] w-full pb-[90px] overflow-hidden'>

        <h2 className='text-center p-5 text-[30px] font-semibold  w-full'>KIDS BOOK</h2>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center px-[100px] '>
          {eBooks && eBooks.slice(0, limit).map((books, i) => {
            return (
              <Ebook key={i} eBooks={books} />
            )
          })}
        </div>
      </div>
      
      <div className='grid grid-cols-1 w-full justify-items-center '>
      <button onClick={loadMore} id='more' className="w-full bg-white border shadow-sm shadow-slate-100 p-5 text-[18px] rounded-md ">Load More Items</button>
      <button onClick={loadLess} id='less' className="w-full bg-white border shadow-sm shadow-slate-100 p-5 text-[18px] rounded-md hidden">Load Less Items</button>
      </div>

    </>
  )
}

export default EbookContainer