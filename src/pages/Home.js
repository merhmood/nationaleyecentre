import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { ImageCard } from '../components/ImageCard'

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <ImageCard />
        </div>
    )
}

export default Home