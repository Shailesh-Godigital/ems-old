import React from 'react'

function Contact() {
    return (
        <div>
            <div className="ctp-contact-area ptb-100">
                <div className="shadow-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="shadow-inner">
                                    <div className="ctp-contact-form">
                                        <h2>Get In Touch With Us</h2>

                                        <form id="contactForm">
                                            <div className="form-group">
                                                <label>First name</label>
                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Salman" />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                                <label>Surname</label>
                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your surname" placeholder="khan" />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="ems@gmail.com" />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                                <label>Telephone</label>
                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder=" + 00000 0000" />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Write message here"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>

                                            <button type="submit" className="main-btn">Send Us Your Enquiry</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="ctp-contact-information">
                                    <div className="shadow-inner">
                                        <div className="information-box">
                                            <h4>Our Contact Details</h4>

                                            <ul className="contact-info">
                                                <li className="address">
                                                    <span className="sub">Address:</span>
                                                    27 Division St, New Delhi, 10002, india
                                                </li>
                                                <li className="email">
                                                    <span className="sub">Email:</span>
                                                    <div className="info">
                                                        <span>Personal</span>
                                                        <a href="/cdn-cgi/l/email-protection#600c1516090f0e20070d01090c4e030f0d"><span className="__cf_email__" data-cfemail="b5d9c0c3dcdadbf5d2d8d4dcd99bd6dad8">[email&#160;protected]</span></a>
                                                    </div>
                                                    <div className="info">
                                                        <span>Business</span>
                                                        <a href="/cdn-cgi/l/email-protection#5f373a3333301f38323e3633713c3032"><span className="__cf_email__" data-cfemail="472f222b2b2807202a262e2b6924282a">[email&#160;protected]</span></a>
                                                    </div>
                                                </li>
                                                <li className="phone">
                                                    <span className="sub">Phone:</span>
                                                    <div className="info">
                                                        <span>Personal</span>
                                                        <a href="tel:00000 0000"> + 00000 00000</a>
                                                    </div>
                                                    <div className="info">
                                                        <span>Business</span>
                                                        <a href="tel:00000 0000"> + 00000 0000</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shadow-inner">
                                        <div className="information-box">
                                            <h4>Office Opening Hours</h4>
                                            <ul className="time-info">
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span className="color">Monday - Thursday:</span>
                                                    <span>8:00am - 8:00pm</span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span className="color">Friday:</span>
                                                    <span>10:00am - 6:00pm</span>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between">
                                                    <span className="color">Saturday:</span>
                                                    <span>10:00am - 2:00pm</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shadow-inner">
                                        <div className="information-map">
                                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183428676291!2d-73.9983046843594!3d40.71397834543098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a263f3910db%3A0xd6e6cdf32a6b11b1!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1659370483233!5m2!1sen!2sbd"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
