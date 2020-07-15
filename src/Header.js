import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img 
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo" />
            </Link>
            {/* search box */}
            <input type="text" className="header__searchInput" />
            {/* 3 Links */}
            {/* Basket icon with Number */}
        </nav>
    )
}

export default Header
