import { useState } from "react"

export default function Seat (seatData) {

const { name, isAvailable } = seatData.seat
const [classSeat, setClassSeat] = useState(isAvailable ? "seat grey" : "seat yellow")
const {selectedSeats, setSelectedSeats} = useState([])


console.log(seatData.seat)


function ClickSeat () {

    if(classSeat === "seat grey") {
        setClassSeat("seat green");
    }
    else if(classSeat === "seat green") {
        setClassSeat("seat grey")
    }
    else {
        setClassSeat("seat yellow")
        alert("Esse lugar não está disponível!")
    }
}

return (
    <div onClick={ClickSeat} class={classSeat}>
        <p  class="seatNumber">{name}</p>
    </div>
    )
}

    