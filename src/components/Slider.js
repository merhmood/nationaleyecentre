import React,{useState} from 'react'
import { motion } from 'framer-motion'

import './Slider.css'

const Slider = () => {

    const sliderImageArray = {

        one:'https://nationaleyecenter.s3.af-south-1.amazonaws.com/slider/img4.jpg',
        two: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/slider/theatre-with-indian-drs.jpg',
        three: 'https://nationaleyecenter.s3.af-south-1.amazonaws.com/slider/FB_IMG_16206377968709601-1.jpg'
    }
    const [sliderImage, setSliderImage] = useState('')

    const sliderShow = () =>{
        if (sliderImage === sliderImageArray.one) {
            setSliderImage(sliderImageArray.two)
        }
        else if (sliderImage === sliderImageArray.two) {
            setSliderImage(sliderImageArray.three)
        }
        else if(sliderImage === sliderImageArray.three){
            setSliderImage(sliderImageArray.one)
        }
    }
    let sliderShowChange = '';

    const sliderNavHandler = imgUrl => {
        setSliderImage(imgUrl)
        clearInterval(sliderShowChange)
    }

    return (
        <div className="slider">
           <motion.img 
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 0.5}}
           src={sliderImage === '' ? sliderNavHandler(sliderImageArray.one) : sliderImage} alt="" className='slider-img'
           onLoad={sliderShowChange = setTimeout(sliderShow, 4000)}
           />
           <div className='slider-nav'>
               <p onClick={()=>sliderNavHandler(sliderImageArray.one)} className={sliderImage === sliderImageArray.one ? '' :'slider-nav-changes'}></p>
               <p onClick={()=>sliderNavHandler(sliderImageArray.two)} className={sliderImage === sliderImageArray.two ? '' :'slider-nav-changes'}></p>
               <p onClick={()=>sliderNavHandler(sliderImageArray.three)} className={sliderImage === sliderImageArray.three ? '' :'slider-nav-changes'}></p>
           </div> 
        </div>
    )
}

export default Slider