import React from 'react';
import './TireServices.css';
import tireIcon from '../../../images/tire/tire.png'


const TireServices = () => {
    return (
        <>
            <div className="tire-container">
                <div className="container tire-heading d-flex justify-content-around align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="tire-icon me-5" src={tireIcon} alt="" />
                        <div>
                            <h2>QUICK TIRE FINDER</h2>
                            <p>Want to find the perfect fitment for your car wheels?</p>
                        </div>
                    </div>
                    <div>
                        <button className="all-btn">GET HELP</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                Right-aligned but left aligned when large screen
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <li><button class="dropdown-item" type="button">Action</button></li>
                                <li><button class="dropdown-item" type="button">Another action</button></li>
                                <li><button class="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    );
};

export default TireServices;