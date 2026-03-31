import React from 'react'
import './navbar.scss'
import DateTime from './DateTime'

function Navbar() {
  return (
    <nav>
        <div className='left'>
            <div className="apple-icon">
                <img src="public\navbar-icons\apple-brands-icon.svg" alt="" />
            </div>

            <div className='nav-item'>
                <p>Md Kashif Nisar</p>
            </div>
            <div className='nav-item'>
                <p>File</p>
            </div>
            <div className='nav-item'>
                <p>Window</p>
            </div>
            <div className='nav-item'>
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="public\navbar-icons\icons8-wifi-16.png" alt="" />
            </div>
            <DateTime/>
        </div>
    </nav>
  )
}

export default Navbar
