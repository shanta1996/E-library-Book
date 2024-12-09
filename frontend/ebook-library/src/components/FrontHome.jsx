import React from 'react'

const FrontHome = () => {
  return (
    <>
    <div className='pt-[50px] md:pt-[150px] lg:pt-[200px] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[100px] px-10 md:px-8 lg:px-[100px] h-screen  '>
      <div className='pt-[100px] h-full bg-white'>
        <h1 className='text-xl xl:text-2xl font-semibold'>E-BOOK LIBRARY</h1>
        <p className='text-[18px]'>E-Pustakalaya is a free education-focused digital library containing full-text documents, images, videos and audio files that can be accessed through an intranet or the internet. E-Pustakalaya users can read books, view videos, learn through interactive activities and listen to audio clips. E-Pustakalaya holds collections in Nepali, English and other languages of Nepal.</p>
      </div>
    <img src="/frontbook.webp" alt="bookphoto" className='bg-white object-cover bg-center h-full'/>
    </div>
    </>
  )
}

export default FrontHome