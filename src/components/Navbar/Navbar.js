import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="container navbar navbar-expand-lg navbar-light bg-white py-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-5 mb-2 fw-bold mb-lg-">
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/home">Home <i class="fas fa-angle-down"></i></Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="#">Services <i class="fas fa-angle-down"></i></Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="#">Mechanics <i class="fas fa-angle-down"></i></Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="#">Shop <i class="fas fa-angle-down"></i></Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="#">Gallery <i class="fas fa-angle-down"></i></Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="#">About us <i class="fas fa-angle-down"></i></Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="#">Contact us <i class="fas fa-angle-down"></i></Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;