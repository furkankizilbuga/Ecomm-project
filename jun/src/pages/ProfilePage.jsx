import { useAuth } from "@/hooks/useAuth";
import { fetchPrevOrders } from "@/store/features/clientSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function ProfilePage() {

    const { token } = useAuth();
    const dispatch = useDispatch();
    const { user, prevOrders, addressList } = useSelector(state => state.client);

    

    useEffect(() => {
        dispatch(fetchPrevOrders(token))
    }, [dispatch, token])

    const findAddress = (address_id) => {
        const address = addressList.find((addr) => addr.id === address_id);
        if (!address) return "Address not found";
        return `${address.title} - ${address.district}, ${address.city}`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
    };

    return(
        <div className="flex flex-col justify-center gap-10 px-12 sm:items-start">
            <h2 onClick={() => console.log(user)} className="font-semibold w-full text-center sm:text-left text-primaryBlue text-lg">Welcome, {user.name}</h2>
            <div className="flex flex-col gap-4 w-full">
                <h3 className="font-medium sm:text-xl">Previous Orders</h3>
                <div className="flex flex-col gap-12 md:flex-row md:flex-wrap md:gap-8">
                    {prevOrders.map((order) => (
                        <div key={order.id} className="flex flex-col md:w-[calc(50%-16px)]">
                            <div className="flex justify-between">
                                <h4 className="text-sm font-medium">{formatDate(order.order_date)}</h4>
                                <p className="text-primaryBlue font-medium">${order.price}</p>
                            </div>
                            <div className="flex flex-col gap-4 shadow rounded p-2">
                                <div className="flex flex-col">
                                    <p className="text-xs">{findAddress(order.address_id)}</p>
                                    <p className="text-sm">{order.card_name}</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {order.products.map(product => (
                                        <div key={product.id}>
                                            <div className="flex justify-between">
                                                <div className="flex flex-col">
                                                    <h4 className="text-sm text-primaryBlue font-semibold">{product.name}</h4>
                                                    <p className="text-secondaryTextColor text-xs max-w-52 line-clamp-2 overflow-hidden">{product.description}</p>
                                                </div>
                                                <div className="text-sm text-primaryBlue font-medium">
                                                    <p>{product.count} x {product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}