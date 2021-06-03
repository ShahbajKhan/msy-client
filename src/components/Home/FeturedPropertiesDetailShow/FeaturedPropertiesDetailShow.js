import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FeaturedPropertiesDetailShow.css'
import AgentShow from '../AgentShow/AgentShow'
import FeaturedPropertiesDetail from '../FeaturedPropertiesDetail/FeaturedPropertiesDetail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBed, faBath, faBuilding, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addToOrderList, addToWishList } from '../../../redux/actions/apartmentAction';
import NavBar from '../NavBar/NavBar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Agents, { agentsData } from '../Agents/Agents';
import Footer from '../Footer/Footer';


const FeaturedPropertiesDetailShow = () => {
    const { id } = useParams();
    let history = useHistory();
    const [properties, setProperties] = useState([]);


    const [apartmentData, setApartmentData] = useState({});
    useEffect(() => {
        fetch(`https://safe-reaches-28400.herokuapp.com/apartmentSpecificData/${id}`)
            .then(res => res.json())
            .then(data => {
                setApartmentData(data)
            })
    }, [id])
    const { name, image, price, dining, wash, kitchen, location, size, bed, bathroom, _id } = apartmentData;

    const dispatch = useDispatch()
    function action(apartmentData) {

        history.push(`/bookApartment/${id}`);
    }
    useEffect(() => {
        fetch('https://safe-reaches-28400.herokuapp.com/apartmentData')
            .then(res => res.json())
            .then(data => {
                setProperties(data)
            })
    }, [])
    let propertiesData = properties?.sort(() => Math.random() - Math.random()).slice(0, 3);
    return (
        <>
            <NavBar />
            <div className="container">


                <Carousel dynamicHeight={true}>
                    <div>
                        <img src={image} />
                        <p className="legend">Bedroom</p>
                    </div>
                    <div>
                        <img src={dining} />
                        <p className="legend">Dining</p>
                    </div>
                    <div>
                        <img src={wash} />
                        <p className="legend">Wash</p>
                    </div>
                    <div>
                        <img src={kitchen} />
                        <p className="legend">Kitchen</p>
                    </div>
                </Carousel>

                <div className="row">
                    <div className="col-md-7 col-sm-12 p-0">
                        <h1 className="fw-bolder text-danger">{name},<small className="text-secondary fw-bolder" style={{fontSize:'20px'}}>{location}</small></h1>

                        <h4 className="text-primary">${price}.00</h4>
                        <div className="row ">
                            <div className="col-md-1 col-sm-1 col-1">
                            </div>
                            <div className="col-md-7 col-sm-7 col-7 row  card shadow p-0 bg-dark text-white">
                                <div className="row row-cols-3 mt-auto">
                                    <div className="col p-0 d-flex flex-column justify-content-center align-items-center" >
                                        <FontAwesomeIcon className="mt-1 iconFeatureProperties" icon={faBed} />
                                        <p className=" h6FeatureType">{bed} room</p>
                                    </div>

                                    <div className="col p-0 d-flex flex-column justify-content-center align-items-center " style={{ borderLeft: '1px solid black' }}>
                                        <FontAwesomeIcon className="iconFeatureProperties" icon={faBath} />
                                        <p className=" h6FeatureType">{bathroom} bath</p>
                                    </div>
                                    <div className="col p-0 d-flex flex-column justify-content-center align-items-center" style={{ borderLeft: '1px solid black' }}>
                                        <FontAwesomeIcon className="iconFeatureProperties" icon={faBuilding} />
                                        <p className=" h6FeatureType">{size}sq.pt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Card  */}

                        <div className="mt-5">
                            <h2 className="fw-bolder text-primary">Description:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis sequi ut rem asperiores ex quam, iure nobis ad ipsum?</p>
                        </div>

                        <div className="ms-5 mb-5">
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                            <li className="liFeatureProperties">Lorem ipsum dolor sit amet.</li>
                        </div>
                        <div className="">
                            <button onClick={() => dispatch(addToOrderList(apartmentData))} className="btn btn-warning mx-2 w-100"><FontAwesomeIcon className="me-1" icon={faCartPlus} />Add to cart</button>

                        </div>

                    </div>
                    <div className="col-md-1">

                    </div>

                    <div className="col-md-4  col-sm-12  mt-5">
                        
                        <div className="">
                            <h5 className="fs-3 mt-4">CONTACT US</h5>
                            <input type="text mt-1 " className="form-control" placeholder="EMAIL" />
                            <button type="submit" className="btn btn-primary mt-2">CONTACT</button>
                        </div>


                        
                    </div>

                </div>

            </div>
            <Agents></Agents>
            <Footer></Footer>
        </>
    );
};

export default FeaturedPropertiesDetailShow;