import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
import React from "react"

export default function Seats() {

    const { idSessao } = useParams()
    const [seatsData, setSeatsData] = useState([])

    useEffect(() => {
		const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		promise.then(promise => {
            setSeatsData(promise.data)
        })
    }
    , []);

    console.log(seatsData)
    const {day, movie, seats} = seatsData
    const {classSeat, setClassSeat} = React.useState("")
    const {selectedSeats, setSelectedSeats} = React.useState([])


    if(seats !== [] && seats !== undefined) {
        return (
            <>
                <div class= "titleSection">
                    <h1>Selecione os assentos</h1>
                </div>
                <div class="seats">
                    {seats.map((seats) => {
                        return (
                        <div class={seats.isAvailable ? "seat grey" : "seat yellow"}>
                            <p>{seats.name}</p>
                        </div>
                        )
                        })
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
            </>
        )}
    else {
        return (
        <h1>Carregando...</h1>
        )}

}