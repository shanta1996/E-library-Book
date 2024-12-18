import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import HomePage from './Pages/HomePage';
import EbookContainer from './components/ebook/EbookContainer';
import EbookDetails from './components/ebook/EbookDetails';
import Register from './auth/Register';
import Login from './auth/Login';
// import SearchBook from './components/SearchBook';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/home' element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route path='ebook' element={<EbookContainer/>}/>
        <Route path='ebook/:ebookID' element={<EbookDetails/>}/>
        {/* <Route path='search/:searchID' element={<SearchBook/>}/> */}
      </Route>
      <Route path='/' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
    </>
  )
)

const App =  () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App