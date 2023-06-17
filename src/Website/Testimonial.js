import React from 'react'
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Testimonial() {
    return (
        <div>
            <div id="carouselMultiItemExample" className="bg_cover1" data-mdb-ride="">
                <div className="carousel-inner py-4">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <Container>
                                    <Carousel autoPlay autoPlaySpeed={2000} showDots={true} arrows={false} infinite={true} responsive={responsive}>
                                        <div className="col-lg-12">
                                            <div className="shadow-inner4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                    src="./img/testimonial/t-1.jpg" alt="avatar" />
                                                <h5 className="mb-3">Rubina Helen</h5>
                                                <p>Bsc, Engineering</p>
                                                <p className="text-muted">
                                                    <i className="fa fa-quote-left pe-2"></i>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                                    officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                                </p>
                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-none d-lg-block">
                                            <div className="shadow-inner4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                    src="./img/testimonial/t-2.jpg" alt="avatar" />
                                                <h5 className="mb-3">John Doe</h5>
                                                <p>Bsc, Engineering</p>
                                                <p className="text-muted">
                                                    <i className="fa fa-quote-left pe-2"></i>
                                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                                    suscipit laboriosam, nisi ut aliquid commodi.
                                                </p>
                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li>
                                                        <i className="fa fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-none d-lg-block">
                                            <div className="shadow-inner4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                    src="./img/testimonial/t-3.jpg" alt="avatar" />
                                                <h5 className="mb-3">Maria Kate</h5>
                                                <p>Bsc, Engineering</p>
                                                <p className="text-muted">
                                                    <i className="fa fa-quote-left "></i>
                                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                    praesentium voluptatum deleniti atque corrupti.
                                                </p>
                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="shadow-inner4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                    src="./img/testimonial/t-1.jpg" alt="avatar" />
                                                <h5 className="mb-3">Rubina Helen</h5>
                                                <p>Bsc, Engineering</p>
                                                <p className="text-muted">
                                                    <i className="fa fa-quote-left pe-2"></i>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                                    officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                                </p>
                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-none d-lg-block">
                                            <div className="shadow-inner4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                    src="./img/testimonial/t-2.jpg" alt="avatar" />
                                                <h5 className="mb-3">John Doe</h5>
                                                <p>Bsc, Engineering</p>
                                                <p className="text-muted">
                                                    <i className="fa fa-quote-left pe-2"></i>
                                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                                    suscipit laboriosam, nisi ut aliquid commodi.
                                                </p>
                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li>
                                                        <i className="fa fa-star-half-alt"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-none d-lg-block">
                                            <div className="shadow-inner4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                    src="./img/testimonial/t-3.jpg" alt="avatar" />
                                                <h5 className="mb-3">Maria Kate</h5>
                                                <p>Bsc, Engineering</p>
                                                <p className="text-muted">
                                                    <i className="fa fa-quote-left "></i>
                                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                    praesentium voluptatum deleniti atque corrupti.
                                                </p>
                                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Carousel>
                                </Container >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
