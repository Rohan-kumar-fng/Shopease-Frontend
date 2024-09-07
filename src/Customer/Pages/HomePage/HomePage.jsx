import React from 'react'
import MainCarosel from '../../Components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../Components/HomeSectionCarosel/HomeSectionCarosel';

const HomePage = () => {
    return (
        <div>
            <MainCarosel/>
            <div className='space-y-10 py-20 justify-center px-10 lg:px-10'>
                <HomeSectionCarosel/>
                <HomeSectionCarosel/>
                <HomeSectionCarosel/>
                <HomeSectionCarosel/>
            </div>
        </div>
    );
}

export default HomePage;