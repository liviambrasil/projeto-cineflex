import { useState } from "react"

export default function Seat (props) {

const { seat, selectedSeats, setSelectedSeats } = props
const { name, isAvailable } = seat
const [classSeat, setClassSeat] = useState(isAvailable ? "seat grey" : "seat yellow")


function SelectSeats () {

    if(classSeat === "seat grey") {
        setClassSeat("seat green");
        setSelectedSeats([...selectedSeats, name])
        }

    else if(classSeat === "seat green") {
        setClassSeat("seat grey")

        const arrSelectedSeats = selectedSeats
        const index = selectedSeats.findIndex((seat) => seat === name ? true : false)
        arrSelectedSeats.splice(index, 1)
        setSelectedSeats(arrSelectedSeats)
    }

    else {
        setClassSeat("seat yellow")
        alert("Esse lugar não está disponível!")
    }
    
}

return (
    <div onClick={SelectSeats} class={classSeat}>
        <p  class="seatNumber">{name}</p>
    </div>
    )
}