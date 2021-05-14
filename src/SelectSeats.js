import React from "react"

export default function ClickSeat (seats, classSeat, setClassSeat) {

    const {selectedSeats, setSelectedSeats} = React.useState([])


    if(classSeat === "seat grey") {
        setClassSeat("seat green");
        setSelectedSeats([...selectedSeats, seats.name]);
    }
    else if(classSeat === "seat green") {
        setClassSeat("seat grey")

        const index = selectedSeats.findIndex((element) => element === seats ? true : false)
        setSelectedSeats(selectedSeats.splice(index, 1));
    }
    else {
        setClassSeat("seat yellow")
    }
}