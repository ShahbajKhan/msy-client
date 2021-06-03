import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './FeaturePropertiesDetail.css'
import { useHistory } from 'react-router';

const FeaturedPropertiesDetail = (props) => {
    const history = useHistory();
    const { name, image, location, bed, size, price, bathroom, _id } = props.property;
    const handleDetailsApartment = (_id) => {
        history.push(`/apartment/feature/${_id}`)
    }

    return (
        <div className="col mt-5" >
            <div className="card h-100 cardFeature shadow">
                <div className="imageFeaturedProperties" style={{ height: '55%' }}>
                    <img src={image} className="h-100 w-100" alt="..." />


                </div>

                <div className="card-body py-0 cardBodyFeaturedProperties">
                    <h5 className="text-center fw-bolder mt-1 h5FeaturedProperties">{name}</h5>
                    <p className="text-center pFeaturedProperties"><FontAwesomeIcon icon={faMapMarkerAlt}/><span className="ms-2"> {location}</span></p>
                    <p className="text-secondary fw-bolder">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, consequuntur.</p>
                </div>
                <div className="priceFeaturedProperties mb-1" style={{ height: '12%' }}>
                    <hr className="m-auto w-75"></hr>
                    <div className="d-flex justify-content-between align-items-between mx-4 mt-1 mb-1">
                        <button className="btn btn-primary">${price}</button>
                        <button className="OrderBtn1 btn btn-primary" onClick={() => handleDetailsApartment(_id)}>More <FontAwesomeIcon icon={faArrowRight}/> </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeaturedPropertiesDetail;