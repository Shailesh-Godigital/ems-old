import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Welcome from './Welcome'
import AboutUs from './AboutUs'
import Apply from './Apply'
import Services from './Services'
import Education from './Education'
import OurCourse from './OurCourse'
import Counter from './Counter'
import Testimonial from './Testimonial'
import Footer from './Footer'


function Home() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Welcome></Welcome>
            <AboutUs></AboutUs>
            <Apply></Apply>
            <Services></Services>
            <Education></Education>
            <OurCourse></OurCourse>
            <Counter></Counter>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    )
}

export default Home;
