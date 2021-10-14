import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide mx-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/9Nr78ZT/banner-1.png" className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption row">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                <h1 className="heading text-warning">caring for your car the way you would</h1>
                                <button className="all-btn m-3">GET QUITE</button>
                                <button className="all-btn m-3">APPOINTMENT</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/2FXN3Nd/banner-2.png" className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-md-8">
                                <h1 className="heading text-warning">Fine Tunning your auto to premium levels</h1>
                                <button className="all-btn m-3">ABOUT US</button>
                                <button className="all-btn m-3">APPOINTMENT</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/9VnqppR/banner-3.png" className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
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