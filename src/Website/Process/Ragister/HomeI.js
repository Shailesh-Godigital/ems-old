import React from 'react'
import Header from '../../Header'
import Banner from './Banner'
import Applies from './Applies'
import Institute from './Institute'
import Approved from './Approved'
import Requirement from './Requirement'
import Trainings from './Trainings'
import Footer from '../../Footer'

function HomeI() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Institute></Institute>
            <Applies></Applies>
            <Approved></Approved>
            <Requirement></Requirement>
            <Trainings></Trainings>
            <Footer></Footer>
        </div>
    )
}

export default HomeI
