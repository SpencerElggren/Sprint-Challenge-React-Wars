import React, { useState , useEffect} from 'react';
import axios from 'axios';
import SwCard from "./swCard";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Info() {
    const [currentCharacter, setCharacter] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response.data['results']);
                setCharacter(response.data.results);
            })
            .catch(error => {
                console.log("data not returned", error);
            });
    }, []);

    return (
        <div>
            {currentCharacter.map((char , index) => (
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
    )
};