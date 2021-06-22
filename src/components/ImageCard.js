import React from 'react'
import './ImageCard.css'

export const ImageCard = () => {
    return (
        <div className='image-card'>
           <img src="https://nationaleyecenter.s3.af-south-1.amazonaws.com/Doctor+Alhassan.png" alt="ImageCard"  className='image'/>
           <div className='text'>
               <h6>CHIEF MEDICAL DIRECTOR</h6>
               <p>DR. Alhassan Mohammad</p>
            </div> 
        </div>
    )
}
