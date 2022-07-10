import React from 'react'
import './style.css'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'


export const NavBar = () => {


const[state,setState]=useState(false)

  const submitSearch=(e)=>{
  e.preventDefault();
  alert('You clicked submit')
}
const openSearch=()=>{
  setState(true)
}
const SearchClass= state ? 'searchInput active':'searchInput';NavLink
  return (
    <div className='navbar'>
        <ul className='navbar-menu'>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about-us'>About us</NavLink></li>
            <li><NavLink to='/post'>Posts</NavLink></li>
            <li><NavLink to='contact'>Contact us </NavLink></li>
        </ul>
        <div className='search'>
            <form onSubmit={submitSearch}>
            <input type='text'  className={SearchClass} placeholder='Search'/>
            <img alt='Search' onClick={openSearch} className='searchIcon' src={require("../../assets/search.png")}/>
            </form>
        </div>
    </div>
  )
}
