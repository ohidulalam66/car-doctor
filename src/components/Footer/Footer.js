import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="container text-white pt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="fw-bold text-warning">ABOUT US</h4>
                            <hr />
                            <p>
                                Founded in 2015 Car Doctor quickly built a reputation as one of
                                the quality car services providers. <br /> <br />
                                Need a special repair service? We are happy to fulfil every request.
                            </p>
                            <Link to="/home"><img className="footer-logo" src={logo} alt="" /></Link>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold text-warning">RECENT POSTS</h4>
                            <hr />
                            <div className="d-flex">
                                <img src="https://i.ibb.co/P51jcs7/footer-1.jpg" className="footer-img" alt="" />
                                <div className="ps-3">
                                    <Link to="/" className="text-white">Welcome to Self-Cleaning Car</Link>
                                    <p><span className="recent-posts-left">12//</span><span className="recent-posts-right">JANUARY</span></p>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                <img src="https://i.ibb.co/26qTdT1/footer-2.jpg" className="footer-img" alt="" />
                                <div className="ps-3">
                                    <Link to="/" className="text-white">Good Tips for Cleaning Your Car</Link>
                                    <p><span className="recent-posts-left">11//</span><span className="recent-posts-right">JANUARY</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold text-warning">TAGS</h4>
                            <hr />
                            <button className="footer-btn">CAR DRIVING</button>
                            <button className="footer-btn">CAR WASHING</button>
                            <button className="footer-btn"> CLEANING</button>
                            <button className="footer-btn">DIESEL</button>
                            <button className="footer-btn">ENGINE</button>
                            <button className="footer-btn">GASOLINE</button>
                            <button className="footer-btn">MAINTENANCE</button>
                            <button className="footer-btn">OIL</button>
                            <button className="footer-btn">REPAIR</button>
                            <button className="footer-btn">TIRES</button>
                            <button className="footer-btn">WHEELS</button>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold text-warning">OUR SERVICES</h4>
                            <hr />
                            <div className="services-link">
                                <i className="fas fa-chevron-right"></i> <Link to="/" className="text-white">Brakes Repair</Link>
                                <br />
                                <br />
                                <i className="fas fa-chevron-right"></i> <Link to="/" className="text-white">Engine Diagnostics</Link>
                                <br />
                                <br />
                                <i className="fas fa-chevron-right"></i> <Link to="/" className="text-white">Lube, Oil and Filters</Link>
                                <br />
                                <br />
                                <i className="fas fa-chevron-right"></i> <Link to="/" className="text-white">Air Conditioning</Link>
                                <br />
                                <br />
                                <i className="fas fa-chevron-right"></i> <Link to="/" className="text-white">Exhaust Repair</Link>
                                <br />
                                <br />
                                <i className="fas fa-chevron-right"></i> <Link to="/" className="text-white">Wheels Alignment</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-5">
                        <i className="fab fa-facebook-f icon-footer"></i>
                        <i className="fab fa-youtube icon-footer"></i>
                        <i className="fab fa-twitter icon-footer"></i>
                        <i className="fab fa-linkedin-in icon-footer"></i>
                    </div>
                    <p className="text-center mt-5 copyright">© 2021 Car Doctor Theme crafted with  in Bucharest</p>
                </div>
            </div>
        </>
    );
};

export default Footer;