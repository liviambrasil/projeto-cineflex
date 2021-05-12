import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import React from "react"

export default function Movie (movieData) {

    const { idFilme } = useParams();
    console.log(idFilme);
    const {id, title, posterURL, overview} = movieData
    const {sessionData, setSessionData} = React.useState([])
    
    useEffect(() => {
		const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		promise.then(promise => {
            setSessionData(promise)
        })
    }
    , []);

    return (
        <div>

        </div>
    );
}