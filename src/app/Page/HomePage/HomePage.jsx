import React from 'react';
import HomePageTop from './Components/HomePageTop';
import HomePageMid from './Components/HomePageMid';

function HomePage(props) {
    return (
        <main className='flex justify-center items-center flex-col w-full '>
            <HomePageTop />
            <HomePageMid />
        </main>
    );
}

export default HomePage;