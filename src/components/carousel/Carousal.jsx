import React from 'react'
import foodimg1 from "../../images/food1.jpg"
import foodimg2 from "../../images/food2.jpg"
import foodimg3 from "../../images/food3.jpg"
import './carousel.css'
// import foodimg4 from "../images/food4.jpg"
const Carousal = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foodimg1} className="d-block w-100 carimg" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foodimg2} className="d-block w-100 carimg" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={foodimg3} className="d-block w-100 carimg" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousal
