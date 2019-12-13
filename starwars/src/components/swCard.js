import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";



const SwCard = props => {
    return (
        <Card className='cards'>
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.gender}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Height: {props.height}</ListGroupItem>
                <ListGroupItem>Eye Color: {props.eye_color}</ListGroupItem>
                <ListGroupItem>Birth Year: {props.birth_year}</ListGroupItem>
            </ListGroup>
        </Card>
    )
};

export default SwCard