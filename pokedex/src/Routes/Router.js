import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex/Pokedex'
import Details from '../pages/Details/Details'

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/pokedex:id"}>
                    <Pokedex />
                </Route>

                <Route exact path={"/details"}>
                    <Details />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
