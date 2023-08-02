import React from 'react'
import Card from './Container/Card'
import Filter from './Container/Filter'
import Header from './Container/Header'
import Table from './Container/Table'
import Carousel from './Carousel'
import Footer from './Container/Footer'
import './Home.css'

const Home = () => {
    return (
        <div className='sliders-cn' >
        <center>
            <Header  />
            <Carousel />
            <Table />
            <Filter />
            <Card />
            <Footer />
            </center>
        </div>
    )
}

export default Home
