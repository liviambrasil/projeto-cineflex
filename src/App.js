import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react"

import Header from "./Header"
import Movies from "./Movies"
import Movie from "./Movie"
import Seats from "./Seats"
import Sucess from "./Sucess"

export default function App () {
    
    const [finalData, setFinalData] = useState([])
    return (
    <>
    <BrowserRouter>
            <Header />
			<Switch>

                <Route path="/" exact>
                    <Movies />
                </Route>

                <Route path="/sessoes/:idFilme">
                    <Movie />
                </Route>

                <Route path="/assentos/:idSessao">
                    <Seats setFinalData={setFinalData} />
                </Route>

                <Route path="/sucesso">
                    {console.log(finalData)}
                    <Sucess finalData={finalData}/>
                </Route>

            </Switch>
    </BrowserRouter>
    
    
    </>
    )
}