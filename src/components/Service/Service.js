import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { image, name, price, mechanics, description } = service;
    return (
        <>
            <div className="col">
                <div className="card-box p-3">
                    <img src={image} className="img-fluid d-block mx-auto services-img" alt="..." />
                    <div>
                        <h3 className="fw-bold">{name}</h3>
                        <h5 className="">Mechanics: {mechanics}</h5>
                        <h5>Price: <span className="text-warning fw-bold"> £{price}</span></h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <button className="all-btn my-3">BOOK APPOINTMENT</button>
                </div>
            </div>
        </>
    );
};

export default Service;