import React from 'react'

function Counter() {
    return (
        <div>
            <section className="iq_number_count_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className="iq_counter">
                                <i className="icon">
                                    <img src='./img/icon/lecture.png' alt='' />
                                </i>
                                <span className="counter">2021</span>
                                <h6>Total Lectures</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="iq_counter">
                                <i className="icon">
                                    <img src='./img/icon/book-stack.png' alt='' className="ouricon" />
                                </i>
                                <span className="counter">1411</span>
                                <h6>Total Courses</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="iq_counter">
                                <i className="icon">
                                    <img src='./img/icon/digital-drawing.png' alt='' />
                                </i>

                                <span className="counter">1591</span>
                                <h6>Total Tests</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="iq_counter">
                                <i className="icon">
                                    <img src='./img/icon/certificate.png' alt='' />
                                </i>
                                <span className="counter">9921</span>
                                <h6>Total classNamees</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter;
