import React from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import BottomBanner from './PopularInstructor/BottomBanner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
          <BottomBanner></BottomBanner>
            
        </div>
    );
};

export default Home;