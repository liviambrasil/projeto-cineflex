import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./Header"
import Movies from "./Movies"
import Movie from "./Movie"
import Seats from "./Seats"
import Sucess from "./Sucess"

export default function App () {
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
                    <Seats />
                </Route>
            </Switch>
    </BrowserRouter>
    
    
    </>
    )
}