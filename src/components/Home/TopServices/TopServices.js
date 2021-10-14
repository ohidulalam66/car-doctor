import React, { useEffect, useState } from 'react';
import TopService from '../TopService/TopService';
import './TopServices.css';

const TopServices = () => {
    const [topServices, setTopServices] = useState([]);

    useEffect(() => {
        const url = ('./topServices.json')
        fetch(url)
            .then(res => res.json())
            .then(data => setTopServices(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center my-5">
                <h2> <img src="https://i.ibb.co/pZ026bf/747945.png" alt="" /> OUR SERVICES <img src="https://i.ibb.co/pZ026bf/747945.png" alt="" /></h2>
                <h6 className="text-warning">Premium long lasting performance for your car</h6>
                <hr />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                {
                    topServices.map(topService =>
                        <TopService
                            key={topService.name}
                            topService={topService}
                        ></TopService>)
                }
            </div>
        </div>
    );
};

export default TopServices;