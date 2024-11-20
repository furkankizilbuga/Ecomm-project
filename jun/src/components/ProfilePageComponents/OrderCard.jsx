import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const OrderCard = (props) => {
    const { order } = props;
    const { addressList } = useSelector(state => state.client);

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

    return (
        <div className="flex flex-col md:w-[calc(50%-16px)] h-full">
            <div className="flex justify-between">
                <h4 className="text-sm font-medium md:text-lg">{formatDate(order.order_date)}</h4>
                <p className="text-primaryBlue font-medium md:text-lg">${order.price}</p>
            </div>
            <div className="flex flex-col gap-4 shadow rounded p-2 h-full">
                <div className="flex flex-col">
                    <p className="text-xs md:text-sm">{findAddress(order.address_id)}</p>
                    <p className="text-sm md:text-base">{order.card_name}</p>
                </div>
                <div className="scrollbar-simple flex flex-col gap-4 overflow-y-auto h-[200px] md:px-4">
                    {order.products.map(product => (
                        <div key={product.id}>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h4 className="text-sm text-primaryBlue font-semibold md:text-lg">{product.name}</h4>
                                    <p className="text-secondaryTextColor text-xs max-w-52 line-clamp-2 overflow-hidden">{product.description}</p>
                                </div>
                                <div className="text-sm md:text-base text-primaryBlue font-medium">
                                    <p>{product.count} x {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
