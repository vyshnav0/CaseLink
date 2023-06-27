import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import '../style/PersonCard.css'

const PersonCard = props => {
    let {imgSrc, age, title} = props.data;
    return(
        <>
          <Card className ="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src = {imgSrc}/>
            </div>
            <Card.Body className="text-center">
                 <Card.Title>{title}</Card.Title>
                 <Card.Title className = "display-9">{age}</Card.Title>
            </Card.Body>
          </Card>
        </>
    ) 

}

export default PersonCard;