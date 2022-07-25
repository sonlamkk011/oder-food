import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Shared/Header/Header";
import BreadDetails from "./Foods/Details/BreadDetails/BreadDetails";
import RiceDetails from "./Foods/Details/RiceDetails/RiceDetails";
import Foods from "./Foods/Foods";


const Public = () => {
    return(
        <>
        <Header />
        <BrowserRouter >
        <Switch >
           
            <Route path="/foods" exact>
                <Foods />
            </Route>
            <Route path="/rice-details" exact>
                <RiceDetails />
            </Route>
            <Route path="/bread-details" exact>
                <BreadDetails />

            </Route>
           
            
        </Switch>
        </BrowserRouter>
        </>
    )
}
export default Public;