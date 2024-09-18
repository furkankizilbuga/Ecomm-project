import UserMock from "@/pages/UserMock";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import RegisterMock from "@/pages/RegisterMock";
import ProductMock from "@/pages/ProductMock";
import CommentMock from "@/pages/CommentMock";

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
                <Route exact path="/user">
                    <UserMock />
                </Route>
                <Route exact path="/register">
                    <RegisterMock />
                </Route>
                <Route exact path="/product">
                    <ProductMock />
                </Route>
                <Route exact path="/comment">
                    <CommentMock />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}