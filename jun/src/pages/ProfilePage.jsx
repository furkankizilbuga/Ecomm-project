import OrderCard from "@/components/ProfilePageComponents/OrderCard";
import { useAuth } from "@/hooks/useAuth";
import { fetchPrevOrders } from "@/store/features/clientSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function ProfilePage() {

    const { token } = useAuth();
    const dispatch = useDispatch();
    const { user, prevOrders } = useSelector(state => state.client);

    

    useEffect(() => {
        dispatch(fetchPrevOrders(token))
    }, [dispatch, token])

    return(
        <div className="flex flex-col justify-center gap-10 px-12 sm:items-start">
            <h2 onClick={() => console.log(user)} className="font-semibold w-full text-center sm:text-left text-primaryBlue text-lg">Welcome, {user.name}</h2>
            <div className="flex flex-col gap-4 w-full md:gap-12">
                <h3 className="font-medium sm:text-xl">Previous Orders</h3>
                <div className="flex flex-col gap-12 md:flex-row md:flex-wrap md:gap-8">
                    {prevOrders.map((order) => (
                        <OrderCard
                            key={order.id}
                            order={order} />
                    ))}
                </div>
            </div>
        </div>
    )
}