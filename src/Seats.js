import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import ClickSeat from "./SelectSeats"
import Seat from "./Seat"
import CustomerData from "./CustomerData"

export default function Seats() {

    const { idSessao } = useParams()
    const [seatsData, setSeatsData] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
		const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		promise.then(promise => {
            setSeatsData(promise.data)
        })
    }
    , []);

    const {day, movie, seats} = seatsData

    if(seats !== [] && seats !== undefined) {
        return (
            <>
                <div class= "titleSection">
                    <h1>Selecione os assentos</h1>
                </div>
                <div class="seats">
                    {seats.map((seat) => {
                        return(
                        <Seat seat={seat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
                        )}
                        )
                    }    
                </div>

                <div class="seatsTypes">
                    <div class="seatType">
                        <div class="seat green"></div>
                        <p>Selecionado</p>
                    </div>
                    <div class="seatType">
                        <div class="seat grey"></div>
                        <p>Disponível</p>
                    </div>
                    <div class="seatType">
                        <div class="seat yellow"></div>
                        <p>Disponível</p>
                    </div>
                </div>

                <div class="bottomBar">
                        <img src={movie.posterURL} />
                        <h1>{movie.title}</h1>
                </div>
                <CustomerData selectedSeats={selectedSeats}/>
            </>
        )}
    else {
        return (
        <h1>Carregando...</h1>
        )}

}