import React from 'react'
import logo from './images/imageLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
function Header() {
    const navigate=useNavigate()
  return (
    <div className='header'>
        <div className='header-left'>
            <img src={logo} alt="" className='logo' />
            <h1 className='site-title'>FreshFold</h1>
        </div>
        <nav className='header-nav'>
            <ul className='nav-list'>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/shops" className="nav-link">Find Shops</Link></li>
                <li><Link to="/how-it-works" className="nav-link">How It Works</Link></li>
                <li><Link to="/provider" className="nav-link">Become a Provider</Link></li>
            </ul>
        </nav>
        <div className="header-buttons">
            <button className="btn btn-outline" onClick={()=>navigate('/Sign')}>Sign In</button>
            <button className="btn btn-primary"onClick={()=>navigate('/provider')}>Get Started</button>
        </div>
    </div>
  )
}

export default Header