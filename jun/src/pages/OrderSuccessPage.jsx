import { setOrderCompleted } from "@/store/features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderSuccessPage = () => {

    const { orderCompleted } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        if(!orderCompleted) {
            history.replace("/");
            return;
        }

        return () => {
            dispatch(setOrderCompleted(false));
        }
    }, [orderCompleted, history, dispatch])

    if(!orderCompleted) return null;

    return(
        <div className="flex flex-col items-center max-w-80 py-20 mx-auto gap-4">
            <h2 className="text-primaryBlue text-center font-bold text-xl md:text-4xl">Order Success!</h2>
            <p className="text-center font-medium text-sm md:text-base">Your products are on their way!</p>
            <button 
                onClick={() => {
                    dispatch(setOrderCompleted(false));
                    history.push("/shop")
                }} 
                className="bg-primaryBlue text-sm text-white font-semibold rounded px-4 py-2">Continue Shopping</button>
        </div>
    )
}

export default OrderSuccessPage;