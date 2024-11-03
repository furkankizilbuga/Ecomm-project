import { useSelector } from "react-redux";

const OrderSummary = () => {

    const { cart } = useSelector(state => state.cart);
    const shipmentCost = 29.99;

    const totalPrice = cart.reduce((acc, item) => {
        return item.checked ? acc + (item.product.price * item.count) : acc;
    }, 0);

    const finalTotal = (totalPrice + shipmentCost).toFixed(2);

    return(
        <div className="flex flex-col gap-4 sm:max-w-80">
                <div className="shadow flex gap-2 items-start rounded p-4">
                    <input className="mt-1" type="checkbox" />
                    <p className="text-sm">By proceeding with this purchase, you agree to our <span className="underline font-semibold">terms of service and conditions.</span></p>
                </div>
                <div className="shadow flex flex-col gap-4 p-4 rounded">
                    <h4 className="text-primaryBlue font-semibold text-lg">Order Summary</h4>
                    <div className="border-b-mutedColor py-4 border-b flex flex-col gap-1 text-sm sm:text-base">
                        <div className="flex justify-between font-medium text-textColor">
                            <p>Products Total</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between font-medium text-textColor">
                            <p>Shipment Total</p>
                            <p>${shipmentCost}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-textColor font-medium">Total</p>
                        <p className="text-primaryBlue font-semibold">${finalTotal}</p>
                    </div>
                </div>
                <button className="bg-primaryBlue rounded text-white font-semibold py-2 text-sm sm:text-base">Save and Continue</button>
            </div>
    )
}

export default OrderSummary;