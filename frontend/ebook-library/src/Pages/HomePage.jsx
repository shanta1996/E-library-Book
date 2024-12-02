import FrontHome from '../components/FrontHome'
import Books from '../components/Books'
import KidsBookContainer from '../components/KidsBookContainer'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
// import { data } from '../components/Data';


const HomePage = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <>
      <FrontHome />
      <Books />

      <KidsBookContainer />


      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure placeat tenetur architecto doloremque modi dolor dolorum eius voluptas expedita neque asperiores iusto assumenda est consequatur, optio labore, minima qui? Ex.</h1>
      <div className='bg-teal-700 w-[50vw] mx-auto'>
        <Slider 
        autoplaySpeed={1000} 
        dots initialSlide={6} 
        // infinite={false} 
        slidesToShow={3}
        slidesToScroll={3}
        // customPaging={(i)=>{
        //   return(
        //     <div>{i}</div>
        //   )
        // }}
        dotsClass='slick-dots custom-indicator'
        className=' '>
          {/* {
            data.map((item,i) => {
              <div key={i}>
                <img src={item} alt="" className='h-[400px] ' />
                <p>{item}</p>
              </div> 
    })} */}
    
          <div>
          <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="" className='h-[400px] '/>
        </div>

          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXQk5DLvdRYSxeNw-1TD92VUED9p9P3Ru_A&s" alt="" className='h-[400px] '/>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIG3.80EN2JPNx7kp5VqoB5kz" alt="" className='h-[400px] '/>
        </div>
        <div>
          <img src="https://th.bing.com/th/id/OIG1.clHUuw_Z5tEPXWatEQhu" alt="" className='h-[400px] '/>
        </div>
        <div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpZEneLh1WL_0kpeQEvbvHipkPx22W2hKMg&s" alt="" className='h-[400px] '/>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSWf2fFh46s1ETv5T7rb5elZnEJp5hprOLA&s" alt="" className='h-[400px] '/>
        </div>
        </Slider>
      </div>
    </>
  )
}

export default HomePage