import React from 'react';
import './Header.css';
import logo from '../../images/logo/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container d-flex align-items-center">
                    <Link to="/home"><img className="header-logo" src={logo} alt="" /></Link>
                    <div className="d-flex align-items-center ms-auto icon">
                        <div className="d-flex align-items-center">
                            <i className="far fa-clock text-warning pe-4"></i>
                            <div>
                                <p> <span className="text-warning first-details">OPEN (MON - SAT)</span><br /><span className="fw-bold second-details">7:00AM - 6:00PM</span></p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="far fa-calendar-check text-warning pe-4"></i>
                            <div>
                                <p><span className="text-warning first-details">APPOINTMENT</span><br /><span className="fw-bold second-details">(321) 455 7848</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Header;

