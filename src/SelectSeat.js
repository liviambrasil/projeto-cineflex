export default function SelectSeat() {

    return (
        <>
            <div class= "titleSection">
                <h1>Selecione os assentos</h1>
            </div>
            <div class="seats">
                {() => {
                    for (let i=0 ; i<50 ; i++) {
                        <div class="seat">{i}</div>
                    }
                }
            }           
            </div>
        </>
    )

}