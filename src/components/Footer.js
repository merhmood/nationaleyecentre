import React from 'react'
import About from './About'
import Newsletter from './Newsletter'
import ClinicalServices from './ClinicalServices'
import GetInTouch from './GetInTouch'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <About />
                <Newsletter />
                <ClinicalServices />
                <GetInTouch />
            </div>
            <p className='copyright'>Copyright  </p>
        </footer>
    )
}

export default Footer