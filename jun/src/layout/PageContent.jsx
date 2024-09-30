import ProductDetailPage from "@/pages/ProductDetailPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import { Switch, Route } from "react-router-dom";
import ContactPage from "@/pages/ContactPage";
import TeamPage from "@/pages/TeamPage";
import SignUpPage from "@/pages/SignUpPage";

export default function PageContent() {
    return(
        <div className="font-montserrat">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/shop/product/:productId">
                    <ProductDetailPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/team">
                    <TeamPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </div>
    )
}