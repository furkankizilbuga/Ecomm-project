import ProductDetailPage from "@/pages/ProductDetailPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

export default function PageContent() {
    return(
        <div className="font-montserrat">
            <Header />
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
            </Switch>
            <Footer />
        </div>
    )
}