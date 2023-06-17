import React from 'react'
import Header from '../../Header';
import Banner from './Banner';
import Aim from './Aim';
import Newsletter from '../../Newsletter';
import Count from '../AboutUs/Count';
import PaernerLogo from './PaernerLogo';
import Footer from '../../Footer';


function Home2() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Aim></Aim>
            <Count></Count>
            <PaernerLogo></PaernerLogo>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Home2;
