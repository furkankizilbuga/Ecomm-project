import OrderCard from "@/components/ProfilePageComponents/OrderCard";
import { useAuth } from "@/hooks/useAuth";
import { fetchPrevOrders } from "@/store/features/clientSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

export default function ProfilePage() {

    const { token } = useAuth();
    const dispatch = useDispatch();
    const history = useHistory();
    const { user, prevOrders, addressList } = useSelector(state => state.client);

    const prevOrdersText = () => {
        if(addressList.length > 0) {
            return "Previous Orders"
        } else {
            return "You have no previous orders!"
        }
    }

    useEffect(() => {
        dispatch(fetchPrevOrders(token))
    }, [dispatch, token])

    return(
        <div className="flex flex-col px-12 sm:items-start">
            <div className="flex flex-col justify-center gap-10 sm:items-start">
                <h2 onClick={() => console.log(user)} className="font-semibold w-full text-center sm:text-left text-primaryBlue text-lg">Welcome, {user.name}</h2>
                <div className="flex flex-col gap-4 w-full md:gap-12">
                    <h3 className="font-medium text-center sm:text-left sm:text-xl">{prevOrdersText()}</h3>
                    <div className="flex flex-col gap-12 md:flex-row md:flex-wrap md:gap-8">
                        {prevOrders.map((order) => (
                            <OrderCard
                                key={order.id}
                                order={order} />
                        ))}
                    </div>
                </div>
            </div>
            {addressList.length < 1 &&
            <button onClick={() => history.push("/shop")} className="bg-primaryBlue text-white font-semibold py-2 rounded md:-mt-8 sm:px-12">Shop Now</button>}
        </div>
    )
}