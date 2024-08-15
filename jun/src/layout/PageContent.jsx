import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

export default function PageContent() {
    return(
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}