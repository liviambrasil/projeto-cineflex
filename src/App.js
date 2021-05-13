import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./Header"
import Movies from "./Movies"
import Movie from "./Movie"

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
            </Switch>
    </BrowserRouter>
    
    
    </>
    )
}