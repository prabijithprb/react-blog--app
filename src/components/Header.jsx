import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <nav className='header-nav'>
            <h3 className='nav-brand'>React-blog</h3>
            <div className='nav-anchors'>
                <Link to="/">Home</Link>
                <Link to="/addblog">Create a blog</Link>
            </div>
        </nav>
    </div>
  )
}

export default Header