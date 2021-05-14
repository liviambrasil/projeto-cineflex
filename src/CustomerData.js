import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom";

export default function CustomerData(props) {

    const { selectedSeats, movieTitle, day, setFinalData, hour } = props
    const [customerName, setCustomerName] = useState("")
    const [customerCPF, setCustomerCPF] = useState()
    const history = useHistory()

    function Finish () {

            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", 
                {ids: selectedSeats,
                name: `${customerName}`,
                cpf: `${customerCPF}`,
                }
            )

            promise.then(() => history.push("/sucesso"))
            //promise.catch(alert("Falha ao carregar o pedido"))

            setFinalData([movieTitle, day, selectedSeats, customerName, customerCPF, hour])

    }

    return (
        <>
            <div class="inputs">
                <h1>Nome do comprador</h1>
                <input type="text" placeholder="Digite seu nome..." onChange={(event) => setCustomerName(event.target.value)} />
                <h1>CPF do comprador</h1>
                <input type="text" placeholder="Digite seu CPF..." onChange={(event) => setCustomerCPF(event.target.value)}/>
            </div>
            <div class="divButton">
                <button onClick={Finish}>Reservar assento(s)</button>
            </div>
        </>
    )
}