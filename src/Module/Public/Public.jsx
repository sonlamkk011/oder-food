import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Drinks from "./Drinks/Drinks";
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
            <Route path="/drinks" exact>
                <Drinks />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/contact" exact>
                <Contact />
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