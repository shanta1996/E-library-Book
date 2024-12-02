import axios from 'axios'
import React, { useEffect, useState } from 'react'
import KidsBook from './KidsBook'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'


const KidsBookContainer = () => {
    const settings={
        slidesToShow:3,
        slidesToScroll:3,
        infinite:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    const [kidBooks, setKidsBooks] = useState([])
    useEffect(() => {
        const fetchKidbook = async () => {
            const { data } = await axios.get("http://127.0.0.1:8000/api/kidsbook/")
            setKidsBooks(data)
        }
        fetchKidbook()
    }, [])
    return (
        <>
         {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center */}
                <div className='bg-slate mt-[100px]'>

                    <h2 className='text-center p-5 text-[30px] font-semibold'>KIDS BOOK</h2>
                    <div className=' rounded-xl  px-[100px]'>
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
                </div>
          
        </>
    )
}

export default KidsBookContainer