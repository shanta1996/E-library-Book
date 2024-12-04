import axios from 'axios'
import React, { useEffect, useState } from 'react'
import KidsBook from './KidsBook'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../App.css'


const KidsBookContainer = () => {
  // let settings={
  //     slidesToShow:3,
  //     slidesToScroll:2,
  //     infinite:false,
  //     responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 3,

  //           }
  //         },
  //         {
  //           breakpoint: 600,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 2,
  //           }
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1
  //           }
  //         }
  //       ]
  // }

  const [kidBooks, setKidsBooks] = useState([])
  const [limit, setLimit] = useState(3)
  useEffect(() => {
    const fetchKidbook = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/kidsbooks/")
      setKidsBooks(data)
    }
    fetchKidbook()
  }, [])

  const loadMore = () => {
    setLimit(limit + 3)
  }
  const loadLess = () => {
    setLimit(limit - 3)
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
      {/* <div className='bg-slate mt-[100px] w-full'>

                    <h2 className='text-center p-5 text-[30px] bg-red-700 font-semibold  w-full'>KIDS BOOK</h2>
                    <div className='bg-red-700 w-full rounded-xl  px-[100px]'>
                        <Slider {...settings}
                        className='pl-[100px]'
                        >
                        {kidBooks.map((books, i) => {
                            return (
                                <KidsBook key={i} kidsbook={books} />
                            )
                        })}
                        </Slider>
                    </div>
                </div> */}


      <div className='bg-slate mt-[100px] w-full pb-[90px] overflow-hidden'>

        <h2 className='text-center p-5 text-[30px] font-semibold  w-full'>KIDS BOOK</h2>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 justify-items-center px-[100px] '>
          {kidBooks && kidBooks.slice(0, limit).map((books, i) => {
            return (
              <KidsBook key={i} kidsbook={books} />
            )
          })}
        </div>
      </div>
      
      <div className='grid grid-cols-1 w-full justify-items-center '>
      <button onClick={loadMore} id='more' className="w-full bg-white border shadow-sm shadow-slate-100 p-5 text-[18px] rounded-md ">Load More Items</button>
      <button onClick={loadLess} id='less' className="w-full bg-white border shadow-sm shadow-slate-100 p-5 text-[18px] rounded-md hidden">Load Less Items</button>
      </div>

      <div className='h-screen'></div>
    </>
  )
}

export default KidsBookContainer