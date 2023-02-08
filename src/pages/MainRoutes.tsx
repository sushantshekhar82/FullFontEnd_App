import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
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
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:productId' element={<ProductPage/>}/>
          <Route path='/product/:productId/edit' element={<EditProduct/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='*' element={<h1>Page Not Found 404</h1>}/>

      </Routes>
    </div>
  )
}

export default MainRoutes
