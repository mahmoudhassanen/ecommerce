import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Header-parent mt-4'>
        <div className='OverLay'>
            <div className='items'>
                
         
            <h1>CUE THE COLOR</h1>
 <Link to="/shopall"  type="" className='btn btn-danger'> Shop The Collection </Link>
 </div>
        </div>


    </div>
  )
}

export default Header