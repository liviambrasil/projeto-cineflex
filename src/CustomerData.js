import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import Sucess from "./Sucess"
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function CustomerData(props) {

    const { selectedSeats } = props

    const [customerName, setCustomerName] = useState("")
    const [customerCPF, setCustomerCPF] = useState()

    function finish () {

            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", 
            {   ids: {selectedSeats},
                name: {customerName},
                cpf: {customerCPF},
            })
            promise.then(() => {
        })
    }

    return (
        <>
        <div class="inputs">
            <h1>Nome do comprador</h1>
            <input type="text" placeholder="Digite seu nome..." onChange={(event) => setCustomerName(event.target.value)} />
            <h1>CPF do comprador</h1>
            <input type="text" placeholder="Digite seu CPF..." onChange={(event) => setCustomerCPF(event.target.value)}/>
        </div>
        <div class="finishOrder">
            <Link to="/sucesso">
                <button onClick={() => <Sucess selectedSeats={selectedSeats} customerName={customerName} customerCPF={customerCPF}/>}>Reservar assento(s)</button>
            </Link>
        </div>
        </>
    )
}