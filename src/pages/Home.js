import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ImageCard from '../components/ImageCard'
import ImageTable from '../components/ImageTable'


const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <ImageCard />
            <ImageTable />
        </div>
    )
}

export default Home