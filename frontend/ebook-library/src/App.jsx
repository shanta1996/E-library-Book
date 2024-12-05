import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import HomePage from './Pages/HomePage';
import KidsBookContainer from './components/kidsbook/KidsBookContainer';
import KidsDetail from './components/kidsbook/KidsDetail';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route path='kidsbook' element={<KidsBookContainer/>}/>
        <Route path='kidsbook/:kidsbookID' element={<KidsDetail/>}/>
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