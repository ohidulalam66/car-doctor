import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="sticky-top bg-white">
                <nav className="container navbar navbar-expand-lg navbar-light bg-white py-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-5 mb-2 fw-bold mb-lg-">
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="/home">Home <i className="fas fa-angle-down"></i></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="/services">Services <i className="fas fa-angle-down"></i></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="#">Mechanics <i className="fas fa-angle-down"></i></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="#">About us <i className="fas fa-angle-down"></i></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="#">Contact us <i className="fas fa-angle-down"></i></Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="#">Sign Up <i className="fas fa-angle-down"></i></Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;