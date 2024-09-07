import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCaroselData } from './HomeCaroselData';

const MainCarosel = () => {
    const items = HomeCaroselData.map((item) => {
        return <img className='cursor-pointer' role='presentation' src={item.image} alt=""></img> 
    })
    return (
    <div>
    <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        items={items}
    />
    </div>
)};

export default MainCarosel;