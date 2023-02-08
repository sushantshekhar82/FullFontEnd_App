import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <span style={{display:"flex",justifyContent:"space-evenly"}}><b><Link to="/">Home</Link></b><b><Link to="addProduct">AddProduct</Link></b><b><Link to="/login">Login</Link></b><b><Link to="cart">Cart</Link></b></span>
    </div>
  )
}

export default Navbar
