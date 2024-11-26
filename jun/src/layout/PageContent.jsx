import ProductDetailPage from "@/pages/ProductDetailPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import { Switch, Route, Redirect } from "react-router-dom";
import ContactPage from "@/pages/ContactPage";
import TeamPage from "@/pages/TeamPage";
import SignUpPage from "@/pages/SignUpPage";
import AboutUsPage from "@/pages/AbousUsPage";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import CartPage from "@/pages/CartPage";
import CreateOrderPage from "@/pages/CreateOrderPage";
import OrderSuccessPage from "@/pages/OrderSuccessPage";
import { useAuth } from "@/hooks/useAuth";
import CategoryPage from "@/pages/CategoryPage";

export default function PageContent() {

    const { isAuthenticated } = useAuth();

    return(
        <div className="font-montserrat min-h-[calc(100vh-200px)]">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/shop">
                    <ShopPage />
                </Route>
                <Route exact path="/shop/:categoryId">
                    <CategoryPage />
                </Route>
                <Route path="/shop/:categoryId/:productNameSlug/:id">
                    <ProductDetailPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/team">
                    <TeamPage />
                </Route>
                <Route path="/signup">
                    {isAuthenticated ? <Redirect to="/" /> : <SignUpPage />}
                </Route>
                <Route path="/about">
                    <AboutUsPage />
                </Route>
                <Route path="/login">
                    {isAuthenticated ? <Redirect to="/" /> : <LoginPage />}
                </Route>
                <Route path="/profile/:clientName">
                    {isAuthenticated ?  <ProfilePage /> : <Redirect to="/login"/>}
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/create-order">
                    {isAuthenticated ?  <CreateOrderPage /> : <Redirect to="/login"/>}
                </Route>
                <Route path="/success">
                    <OrderSuccessPage />
                </Route>
                <Route path="*">
                    <p className="px-12 font-semibold text-center md:text-lg md:mt-20">There is nothing here: 404!</p>
                </Route>
            </Switch>
        </div>
    )
}