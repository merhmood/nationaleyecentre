import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://nationaleyecenter.s3.af-south-1.amazonaws.com/logo.png" alt="" />
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Non-Clinical Services</li>
                    <li>Research</li>
                    <li>Education</li>
                </ul>
            </div>

        </div>
    )
}

export default Header