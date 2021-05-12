import Movie from "./Movie"
import axios from "axios"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Movies () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
		promise.then(promise => {
            setMovies(promise.data)
        })
    }
    , []);

    //console.log(movies)

    return (
        <>
        <div class="titleSection">
            <h1>Selecione o filme</h1>
        </div>

        <div class="movies">
            {movies.map ((movie) => {

                const {id, title, posterURL, overview} = movie
                return (
                    <Link to={`/sessoes/${movie.id}`}>
                        <Movie id={id} title={title} posterURL={posterURL} overview={overview}/>
                    </Link>
                )
            }
            )}
        </div>
        </>
    )
}

