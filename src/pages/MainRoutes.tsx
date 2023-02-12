import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import RequireAuth from '../components/RequireAuth'
import AddProduct from './AddProduct'
import Cart from './Cart'
import EditProduct from './EditProduct'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import ProductPage from './ProductPage'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/cart' element={<RequireAuth><Cart/></RequireAuth>}/>
          <Route path='/product/:productId' element={<RequireAuth><ProductPage/></RequireAuth>}/>
          <Route path='/product/:productId/edit' element={<RequireAuth><EditProduct/></RequireAuth>}/>
          <Route path='/addProduct' element={<RequireAuth><AddProduct/></RequireAuth>}/>
          <Route path='*' element={<h1>Page Not Found 404</h1>}/>

      </Routes>
    </div>
  )
}

export default MainRoutes
