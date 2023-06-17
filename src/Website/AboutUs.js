import React from 'react'

function AboutUs() {
    return (
        <div>
            <section id="about-part" className="pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                                <h5>About us</h5>
                                <h2>Welcome to Edubin </h2>
                            </div>
                            <div className="about-cont">
                                <p>The Organization is Certificate of Incorporation by GOVERNMENT OF INDIA CIN No. U80211HR2016PTC063741 & Register Study Centre of Ministry of MSME Govt. of India (UDYAM-HR-11-0011799), Its work for rural skill development basically computer education and Communicative skill development. Our organization basically highlighted in India as well as Foreign country. Our certificate is valid in all over INDIA. We deals in Computer Basic Education to advance computer Education/Vocational Education and specialization in various topics, School Computer Yoga ECCE Education,  Central/State Government Project, N.G.O. Projects. We provide Education with in the rural student financial limits. We are running Skill Development Scheme with the name of ESIW scheme, The objective of this ESIW scheme is to enable a large number of Indian youth (Student) to take up industry-related (self-employed) skill training that will help them in securing a better livelihood. Under this scheme, skill education will be given to all those students who are unable to study due to lack of money. And along with training, certificates will also be given to all the students, with the help of which the student can easily get a job anywhere. For this E-Max is not charging any fee from the student, Its Totally Free of Cost. And through E-Max, the study center will be given Money to conduct the course.</p>
                                <a href="#" className="main-btn mt-55">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-event mt-50">
                                <div className="event-title">
                                    <h3>Upcoming events</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div className="singel-event">
                                            <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                            <a href="events-singel.html"><h4>Campus clean workshop</h4></a>
                                            <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                            <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="singel-event">
                                            <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                                            <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                            <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="singel-event">
                                            <span><i className="fa fa-calendar"></i> 2 December 2018</span>
                                            <a href="events-singel.html"><h4>Enviroement conference</h4></a>
                                            <span><i className="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                                            <span><i className="fa fa-map-marker"></i> Rc Auditorim</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-bg">
                    <img src="./img/bg-1.png" alt="About" />
                </div>
            </section>
        </div>
    )
}

export default AboutUs;
