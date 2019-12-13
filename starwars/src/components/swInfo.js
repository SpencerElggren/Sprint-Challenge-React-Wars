import React, { useState , useEffect} from 'react';
import axios from 'axios';
import SwCard from "./swCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";


export default function Info() {
    const [currentCharacter, setCharacter] = useState([]);
    const [currentPage, setPage] = useState('');

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/${'?' + currentPage}`)
            .then(response => {
                console.log(response.data['results']);
                setCharacter(response.data.results);
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }, [currentPage]);

    return (
        <div>
            <Button onClick={() => setPage('page=1')}>1</Button>
            <Button onClick={() => setPage('page=2')} >2</Button>
            <Button onClick={() => setPage('page=3')} >3</Button>
            <Button onClick={() => setPage('page=4')} >4</Button>
            <Button onClick={() => setPage('page=5')} >5</Button>
            <Button onClick={() => setPage('page=6')} >6</Button>
            <Button onClick={() => setPage('page=7')} >7</Button>
            <div>
                {currentCharacter.map((char, index) => (
                    <SwCard
                        key={index}
                        name={char.name}
                        gender={char.gender}
                        height={char.height}
                        eye_color={char.eye_color}
                        birth_year={char.birth_year}
                    />
                ))}
            </div>
        </div>
    )
};