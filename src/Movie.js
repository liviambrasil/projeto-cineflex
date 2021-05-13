import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react"

export default function Movie () {

    const { idFilme } = useParams(); 
    const [sessionData, setSessionData] = useState([])
    
    useEffect(() => {
		const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		promise.then(promise => {
            setSessionData(promise.data)
        })
    }
    , []);


    const {title, posterURL, days} = sessionData

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
                                            <Link to={`/assentos/${sessionHours.id}`}>
                                            <div class="hour">
                                                <p>{sessionHours.name}</p>
                                            </div>
                                            </Link>
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
