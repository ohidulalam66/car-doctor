import React from 'react';
import './PricingCart.css';

const PricingCart = () => {
    return (
        <>
            <div className="container pricing-container py-5 mb-5">
                <div className="row d-flex justify-content-evenly align-items-center">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/xFdznmS/engine.png" className="pricing-img img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold">PRICING</h2>
                        <p>Lowest prices for car inspection</p>
                        <table className="table table-border">
                            <thead className="bg-warning">
                                <tr>
                                    <th scope="col">ENGINE SIZE</th>
                                    <th scope="col">INSPECTION</th>
                                    <th scope="col">REVISION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">up to 1300cc</th>
                                    <td>£29.95</td>
                                    <td>£39.95</td>
                                </tr>
                                <tr>
                                    <th scope="row">up to 1600cc</th>
                                    <td>£34.95</td>
                                    <td>£39.95</td>
                                </tr>
                                <tr>
                                    <th scope="row">up to 1900cc</th>
                                    <td>£41.95</td>
                                    <td>£48.95</td>
                                </tr>
                                <tr>
                                    <th scope="row">up to 2200cc</th>
                                    <td>£49.95</td>
                                    <td>£51.95</td>
                                </tr>
                                <tr>
                                    <th scope="row">over 3000cc</th>
                                    <td>£54.95</td>
                                    <td>£59.95</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingCart;
