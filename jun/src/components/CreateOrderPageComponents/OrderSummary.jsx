/* eslint-disable react/prop-types */
import { useAuth } from "@/hooks/useAuth";
import { postOrder, setOrderCompleted } from "@/store/features/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderSummary = ({ activeSection, handleSectionChange }) => {

    const { token } = useAuth();
    const dispatch = useDispatch();
    const { cart, payment, address } = useSelector(state => state.cart);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const shipmentCost = 29.99;

    const totalPrice = cart.reduce((acc, item) => {
        return item.checked ? acc + (item.product.price * item.count) : acc;
    }, 0);

    const finalTotal = (totalPrice + shipmentCost).toFixed(2);

    const getButtonText = () => {
        if(isLoading) {
            return (
                <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-dotted ease-in-out rounded-full animate-spin border-white"></div>
                </div>
            )
        }

        return activeSection == 'address' ? 'Save and Continue' : 'Complete Order';
    };

    const handleButtonClick = () => {
        if (activeSection === 'address' && Object.keys(address).length > 0) {
            handleSectionChange('payment');
        } else if (activeSection === 'payment' && Object.keys(payment).length > 0 && Object.keys(address).length > 0) {
            setIsLoading(true);
            const payload = {
                address_id: address.id,
                order_date: new Date().toISOString(),
                card_no: payment.card_no,
                card_name: payment.name_on_card,
                card_expire_month: payment.expire_month,
                card_expire_year: payment.expire_year,
                card_ccv: 321,
                price: finalTotal,
                products: cart.map(({ count, product }) => ({
                    product_id: product.id,
                    count: count,
                    detail: product.detail
                })),
            };

            dispatch(postOrder({ payload, token }))
            .unwrap()
            .then(() => {
                dispatch(setOrderCompleted(true));
                history.push("/success");
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    };

    const isButtonDisabled = () => {
        if (activeSection === 'address') {
            return Object.keys(address).length === 0;
        }
        return !isChecked || Object.keys(payment).length === 0 || Object.keys(address).length === 0;
    };

    return(
        <div className="flex flex-col gap-4 sm:max-w-80">
                <div className="shadow flex gap-2 items-start rounded p-4">
                    <input
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="mt-1" type="checkbox" />
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
                <button 
                    disabled={isButtonDisabled()} 
                    onClick={handleButtonClick} 
                    className={`bg-primaryBlue rounded text-white font-semibold py-2 text-sm sm:text-base ${isButtonDisabled() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {getButtonText()}
                </button>
            </div>
    )
}

export default OrderSummary;