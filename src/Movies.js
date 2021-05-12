
import axios from "axios"
import { useState, useEffect } from 'react';

export default function Movies () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
		promise.then(promise => {
            setMovies(promise.data)
        })
    }
    , []);

    console.log(movies)
    

    return (
        <>
        <div class="titleSection">
            <h1>Selecione o filme</h1>
        </div>

        <div class="movies">
            {movies.map ((movie) => {
                <div class="movie"> </div>
            })}
        </div>
        </>
    )
}