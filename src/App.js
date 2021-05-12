import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header"
import Movies from "./Movies"
import Movie from "./Movie"

export default function App () {
    return (
    <>
    <BrowserRouter>
			<Switch>
                <Route path="/" exact>
                    <Header />
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