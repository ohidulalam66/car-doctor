import React from 'react';
import './TireServices.css';
import tireIcon from '../../../images/tire/tire.png'


const TireServices = () => {
    return (
        <>
            <div className="tire-container">
                <div className="container">
                    <div className="tire-heading d-flex justify-content-around align-items-center">
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
                    <div className="row  d-flex justify-content-evenly pb-5 my-5">
                        <div className="col-md-6">
                            <div id="accordionExample">
                                <div>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-white fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What Diameter?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                The two-digit number is in inches and the most regular sizes are from 8” to 28”. If you want to know if a particular spare tire cover will fit to your wheels simply read the numbers off the sidewall of your current vehicle or trailer tire.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed bg-white fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What Width?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Tire width/section width/cross section are the first three tire numbers of the code, in millimeters. The measurement shows the distance from the widest spot of the inner sidewall to the same of the outer sidewall. Look for something like 185, 195 etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed bg-white fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is Aspect Ratio?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>
                                                Aspect ratio/tire is the relation of the tire’s width and height in percent. So, 55 profile is 55% of the width, meaning the tire’s height is (taking the width of 205 mm) 112.75 mm or 4.4”. Without these numbers have a standard profile.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center p-5 tire-left">
                            <div>
                                <h2 className="text-center fw-lighter text-white">FREE CHECK & REPLACEMENT</h2>
                                <button className="all-btn">BOOK APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TireServices;