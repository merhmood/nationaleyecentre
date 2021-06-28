import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ImageCard from '../components/ImageCard'
import ImageTable from '../components/ImageTable'
import DetailsTable from '../components/DetailsTable'
import Article from '../components/Article'
import Footer from '../components/Footer'

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Slider />
            <ImageCard />
            <ImageTable />
            <DetailsTable />
            <Article />
            <Footer />
        </div>
    )
}

export default Home