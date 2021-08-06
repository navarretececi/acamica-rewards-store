import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home"
import { History } from "../pages/History";
import { Points } from "../pages/Points";
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
            <Route exact path="/points">
                <Points />
            </Route>
            <Route path="/">
                <NotFound />
            </Route>
        </Switch> 
    )
}