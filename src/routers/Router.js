import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home"
import { History } from "../pages/History";
import { NotFound } from "../components/notification/NotFound";

export const Router =()=>{
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/history">
                <History />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch> 
    )
}