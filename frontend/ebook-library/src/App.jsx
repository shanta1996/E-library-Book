import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import HomePage from './Pages/HomePage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layouts />}>
        <Route index element={<HomePage />} />
      </Route>
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