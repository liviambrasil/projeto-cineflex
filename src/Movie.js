import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react"

export default function Movie (/*movieData*/) {

    const { idFilme } = useParams();
    
    //const {id, title, posterURL, overview} = movieData
    const [sessionData, setSessionData] = useState([])
    const [sessions, setSessions] = useState([])
    
    useEffect(() => {
		const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		promise.then(promise => {
            setSessionData(promise.data)
        })
    }
    , []);

console.log(sessionData);

    const {title, posterURL, days} = sessionData
    console.log(days)

    if(days !== [] && days !== undefined) {
    return (
        <>
            <div class="titleSection">
                <h1>Selecione o horário</h1>
            </div>

            <div class="days-hours">

                {days.map((session) => {
                    const {weekday, date, showtimes} = session
                    return (
                        <>
                            <div class="day">
                                <p>{weekday} - {date}</p>
                            </div>
                            
                            <div class="sessionHour">
                                {showtimes.map((sessionHours) => {
                                    return (
                                        <div class="hour">
                                            <p>{sessionHours.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                })
            }
            </div>

            <div class="bottomBar">
                    <img src={posterURL} />
                    <h1>{title}</h1>
            </div>
        </>
    )}
    else {
        return (
            <h1>Carregando...</h1>
        )
    };
}
