import React from 'react';
import './TopGallery.css';

const TopGallery = () => {
    return (
        <>
            <div className="mx-2 my-4">
                <div className="row row-cols-1 row-cols-md-4 g-0">
                    <div className="col">
                        <img src="https://i.ibb.co/KL7DZdX/gallery-1.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div className="col">
                        <img src="https://i.ibb.co/bNNL4Vg/gallery-2.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div className="col">
                        <img src="https://i.ibb.co/0ykFWwg/gallery-3.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div className="col">
                        <img src="https://i.ibb.co/jv21BXw/gallery-4.jpg" className="w-100" alt="..." />
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="container d-flex justify-content-around align-items-center">
                        <div className="d-flex">
                            <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-gallery-miscellaneous-kiranshastry-gradient-kiranshastry.png" className="img-fluid" alt=".." />
                            <div className="mt-4 ms-5">
                                <h2 className="fw-bold">CERTIFIED REPAIR SHOP</h2>
                                <p>
                                    Take a look into our car repair shop here at Car Doctor Service
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="gallery-btn">VIEW GALLERY</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopGallery;
