import { Link } from 'react-router-dom'
import React from 'react'

// assets
import logoIcon from '../../assets/navbar-icon.svg'
import websiteIcon from '../../assets/website-icon.png'

const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logoIcon} alt="Black IN Logo" />
                <h1>Black IN Dashboard</h1>
            </div>
            <Link to={"/"} className="go-to-website">
            <img src={websiteIcon} alt="" />
            <span>Go To Website</span>
            </Link>
        </div>
    )
}

export default Header