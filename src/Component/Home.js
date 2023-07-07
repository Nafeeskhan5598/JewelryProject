import React from 'react';
import Navbar from './Navbar';
import '../Style/Home.css';
import FrontRing from '../Component/FrontRing';
// import Logofor from '../logos/Logfor';
import Clouserimg from '../Component/Clouserimg';
import TrendingProduct from '../Component/TrendingProduct';
import GirlRing from '../Component/GirlRing';
import Order from './Order';
import Footer from '../SmallComponent/Footer';







function Home() {
    console.log('nafees k')
    return (
        <>
    
        {/* <Navbar  / >  */}
        <FrontRing />  
        {/* <Logofor />  */}
        <Clouserimg />
        <TrendingProduct heading_first={'Popular Products'} heading_second={'Trending Now'}/> 
        <div className='second-card-area'>
         <TrendingProduct heading_first={'Shop'} heading_second={'Best Selling'}/>
        </div>
        <GirlRing />
        <Order />
        {/* <Footer /> */}
      
        </>
    )
}

export default Home;