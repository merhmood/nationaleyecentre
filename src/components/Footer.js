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
            <p className='copyright'>Copyright &copy; 2021 National Eye Center. All rights reserved</p>
        </footer>
    )
}

export default Footer