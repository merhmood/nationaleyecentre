import React from 'react'

import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h6>NEWSLETTER</h6>
            <p>Sign up with your name and email to get updates fresh updates.</p>
            <input type="text" placeholder='Name'/><br />
            <input type="text" placeholder='Email Address'/><br />
            <button>SUBMIT</button>
        </div>
    )
}

export default Newsletter