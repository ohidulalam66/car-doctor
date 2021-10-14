import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption row">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                <h3 className="thumbnail-title">Car Doctor Services</h3>
                                <h1 className="heading text-warning">caring for your car the way you would</h1>
                                <button className="all-btn m-3">GET QUITE</button>
                                <button className="all-btn m-3">APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-md-8">
                                <h3 className="thumbnail-title">Car Doctor Care</h3>
                                <h1 className="heading text-warning">Fine Tunning your auto to premium levels</h1>
                                <button className="all-btn m-3">ABOUT US</button>
                                <button className="all-btn m-3">APPOINTMENT</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                <h3 className="thumbnail-title">Car Doctor Garage</h3>
                                <h1 className="heading text-warning">a building for housing a motor vehicle or vehicles</h1>
                                <button className="all-btn m-3">CONTACT US</button>
                                <button className="all-btn m-3">APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;