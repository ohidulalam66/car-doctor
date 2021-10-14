import React from 'react';
import './Works.css';

const Works = () => {
    return (
        <>
            <div className="container">
                <div className="text-center">
                    <h2 className="fw-bold"><img src="https://i.ibb.co/pZ026bf/747945.png" alt="" /> HOW IT WORKS <img src="https://i.ibb.co/pZ026bf/747945.png" alt="" /></h2>
                    <h6 className="text-warning">Start by scheduling an appointment with us</h6>
                    <hr />
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 py-4 text-center">
                    <div className="col">
                        <h5 className="fw-bold">APPOINTMENT</h5>
                        <p className="">An agreement to meet with someone at a particular time. The act of giving a particular job or position.</p>
                    </div>
                    <div className="col">
                        <h5 className="fw-bold">DIAGNOSE</h5>
                        <p className="">The process of identifying a disease, condition, or injury from its signs and symptoms.</p>
                    </div>
                    <div className="col">
                        <h5 className="fw-bold">QU0TATION</h5>
                        <p className="">A group of words taken from a text or speech and repeated by someone other than the original author or speaker.</p>
                    </div>
                    <div className="col">
                        <h5 className="fw-bold">REPAIR</h5>
                        <p className="">Repair is the act of fixing or the state of being repaired. An example of a repair is a fixed brake system on a car.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Works;