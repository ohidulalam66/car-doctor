import React from 'react';
import './TopService.css';

const TopService = ({ topService }) => {
    const { img, name, desc } = topService;
    return (
        <>
            <div className="col text-center">
                <img src={img} className="w-25 mb-3" alt="..." />
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