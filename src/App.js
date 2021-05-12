import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header"
import Movies from "./Movies"


export default function App () {
    return (
    <>
    <Header />
    <Movies />
    </>
    )
}