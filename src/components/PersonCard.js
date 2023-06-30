import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PersonCard.css'

const PersonCard = props => {
    let {imgSrc, age,contactno, title} = props.data;
    console.log(imgSrc);
    return(
         <div className="slide-container swiper">
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">
                    
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src={imgSrc} alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">{title}</h2>
                            <p className="age">{age}</p>
                            <p className="contactno">{contactno}</p>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    ) 

}

export default PersonCard;