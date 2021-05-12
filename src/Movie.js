import { Link } from 'react-router-dom'

export default function Movie (movieData) {

const {id, title, posterURL, overview} = movieData

    return (
            <div class="movie">
                <img src= {posterURL} />
            </div>
    )
}