import React from 'react'
import './style.css'

export const Header = () => {
  return (
    <header  className='header'>
        <nav className='headerMenu'>
            <a href='#'>Home</a>
            <a href='#'>AboutUS</a>
            <a href='#'>Contact us</a>
        </nav>
        <div>
            Social media icon
        </div>
    </header>
  )
}
