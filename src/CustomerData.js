import { useState } from "react"

export default function CustomerData() {

    const [customerName, setCustomerName] = useState("")
    const [customerCPF, setCustomerCPF] = useState()
    console.log(customerName)
    console.log(customerCPF)

    return (
        <>
        <div class="inputs">
            <h1>Nome do comprador</h1>
            <input type="text" placeholder="Digite seu nome..." onChange={(event) => setCustomerName(event.target.value)} />
            <h1>CPF do comprador</h1>
            <input type="text" placeholder="Digite seu CPF..." onChange={(event) => setCustomerCPF(event.target.value)}/>
        </div>
        <div class="finishOrder">
            <button>Reservar assento(s)</button>
        </div>
        </>
    )
}