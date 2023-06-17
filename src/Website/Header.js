import React from "react";

function Header() {
    return (
        <>
            <header id="header-part">

                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-contact text-lg-left text-center">
                                    <ul>
                                        <li><i className="fa fa-map-marker" aria-hidden="true" style={{ color: "white" }}></i><span>27 Division St, New Delhi</span></li>
                                        <li><i className="fa fa-envelope" aria-hidden="true" style={{ color: "white" }}></i><span>ems@yourmail.com</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="header-opening-time text-lg-right text-center">
                                    <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-logo-support pt-30 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="logo">
                                    <a href="#">
                                        <img src="./img/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="support-button float-right d-none d-md-block">
                                    <div className="support float-left">
                                        <div className="icon">
                                            <img src="./img/support.png" alt="icon" />
                                        </div>
                                        <div className="cont">
                                            <p>Need Help? call us free</p>
                                            <span>321 325 5678</span>
                                        </div>
                                    </div>
                                    <div className="button float-left">
                                        <a href="#" className="main-btn">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <a className="active" href="/">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">About Us</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/Aboutus">About Us</a></li>
                                                    <li><a href="/OurAim">Our Aim</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Students</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/Students">Student Zone</a></li>
                                                    <li><a href="/Book">E-Book for Student</a></li>
                                                    <li><a href="/Login">Scholarship test</a></li>
                                                    <li><a href="/Placements">Placement</a></li>
                                                    <li><a href="/Qaueries">Students Query</a></li>
                                                    <li><a href="/Login">Login panel</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Courses</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/Course">Computer Software</a></li>
                                                    <li><a href="/Hardwares">Computer Hardware</a></li>
                                                    <li><a href="/JobCouurses">Job Oriented Course</a></li>
                                                    <li><a href="/Skill">Skill Development Course</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Affiliation Process</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/Process">Affiliation Process For Ragistration</a></li>
                                                    <li><a href="/Reason">Reason Partner</a></li>
                                                    <li><a href="/Ragister">How To Ragister Institue</a></li>
                                                    <li><a href="/NTTFrenchise">NTT Franchise</a></li>
                                                    <li><a href="/Topcenter"> Top Center List </a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/Gallery">Gallery</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/Contacts">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                                <div className="right-icon text-right">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-shopping-bag"></i><span>3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}
export default Header;