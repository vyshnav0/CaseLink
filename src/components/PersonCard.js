import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PersonCard.css'

const PersonCard = props => {
    let {imgSrc, age, title} = props.data;
    return(
         <div className="slide-container swiper">
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">
                    
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1687841652~exp=1687842252~hmac=47785435afa58b0ed6d4b9e1a31e56e89cad1cbf34c97af34a9885ebb299c3fd" alt="" class="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">{title}</h2>
                            <p className="age">{age}</p>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    ) 

}

export default PersonCard;