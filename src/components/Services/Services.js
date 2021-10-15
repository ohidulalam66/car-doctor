import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = ('./services.json')
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        services.map(service =>
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;