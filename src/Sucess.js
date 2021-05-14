import { useParams } from 'react-router-dom';
import axios from "axios"

export default function Sucess (props) { 
    

    //podia ter feito de um jeito muito melhor mas já não há tempo pra isso
    const movieTitle = props.finalData[0]
    const { date, weekday} = props.finalData[1]
    const assentos = props.finalData[2]
    const customerName = props.finalData[3]
    const customerCPF= props.finalData [4]
    const hour = props.finalData[5]


    return (
        <div class="sucessPage">

            <div class="titleSucess">
                <h1>Pedido feito com sucesso!</h1>
            </div>

            <div class="infos">
                <div class="info">
                    <h1>Filme e sessão</h1>
                    <p>{movieTitle}</p>
                        <div class="session">
                            <p>{date}</p>
                            <p>{hour}</p>
                        </div>
                </div>
            

                <div class="info">
                    <h1>Ingressos</h1>
                    <p>Assentos {assentos}</p>
                </div> 

                <div class="info">
                    <h1>Comprador</h1>
                    <p>{customerName}</p>
                    <p>{customerCPF}</p>
                </div>
            
            </div>

            <div class="divButton">
                <button>voltar pra Home</button>
            </div>
        </div>
    )
}