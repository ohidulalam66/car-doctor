import React from 'react';
import './TopService.css';

const TopService = ({ topService }) => {
    const { img, name, desc } = topService;
    return (
        <>
            <div className="col text-center">
                <div className="card-img mx-auto mb-3">
                    <img src={img} className="w-100" alt="..." />
                </div>
                <div>
                    <h4 className="fw-bold">{name}</h4>
                    <p className="card-text">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TopService;