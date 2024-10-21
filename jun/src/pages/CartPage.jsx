import { setCart } from "@/store/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CartPage = () => {

    const history = useHistory();

    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const countHandler = (productObj, operation) => {

        const op = operation === "increase" ? 1 : -1; 

        let updatedCart = cart.map((item) => {
            if(item.product.id == productObj.product.id) {
                return {
                    ...item,
                    product: {
                        ...item.product,
                        count: Math.max(item.product.count + op, 1)
                    }
                }
            }
            return item;
        })

        dispatch(setCart(updatedCart));
        
    }

    return (
        <div className="flex flex-col gap-4 sm:min-h-[500px] px-12 py-16 sm:items-center bg-lightBackgroundColor">
            <h2 className="text-textColor font-semibold sm:text-xl">My Cart ({cart.length})</h2>
            <div className="flex flex-col gap-4 rounded py-4">
                {cart.map(({product, count, checked}, index) => 
                    <div className="flex flex-col sm:flex-row bg-white items-center gap-2 border border-mutedColor rounded px-2 py-4" key={index}>
                        <input className="mb-2" type="checkbox" />
                        <div className="flex justify-start gap-2 w-full">
                            <div className="flex items-center border border-mutedColor rounded min-w-20 max-w-20 h-40 sm:h-44 sm:min-w-24 sm:max-w-24">
                                <img className="w-20 object-cover object-center sm:w-24" src={product.images[0].url} />
                            </div>
                            <div className="flex flex-col max-h-40 sm:gap-2">
                                <h3 className="font-semibold text-textColor sm:text-lg">{product.name}</h3>
                                <p className="text-secondaryTextColor text-xs sm:text-sm line-clamp-2">{product.description}</p>
                                <p className="text-primaryBlue font-semibold text-sm">{product.rating} <i className="fa-solid fa-star"></i></p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center h-full w-full sm:mr-4">
                            <div className="flex items-center w-20 h-full">
                                <button onClick={() => countHandler({product, count, checked}, "increase")} className="border rounded-l h-8 border-mutedColor px-2 font-bold text-primaryBlue">-</button>
                                <span className="border-t border-b h-8 flex w-full justify-center items-center border-mutedColor px-2 font-medium text-textColor text-sm">{count}</span>
                                <button onClick={() => countHandler({product, count, checked}, "decrease")} className="border rounded-r h-8 border-mutedColor px-2 font-bold text-primaryBlue">+</button>
                            </div>
                            <span className="font-semibold text-sm sm:text-base">${product.price}</span>
                            <i className="fa-solid fa-trash text-primaryBlue"></i>
                        </div>
                    </div>
                )}
                <button disabled={cart.length == 0 && true} className={`bg-primaryBlue ${cart.length == 0 && "hidden"} text-white text-xs sm:text-base font-semibold py-2 rounded`}>Purchase</button>
            </div>
            {cart.length == 0 &&
            <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row sm:justify-center sm:w-4/5">
                <span className="font-semibold text-textColor text-sm sm:text-base flex items-center gap-4">
                    <i className="fa-solid fa-cart-shopping text-2xl text-center text-primaryBlue my-auto border-primaryBlue"></i>You have no products in your cart.
                </span>
                <button onClick={() => history.push("/shop")} className="bg-primaryBlue text-white font-semibold text-xs sm:text-base rounded px-6 py-2">Shop Now</button>
            </div>}
        </div>
    )
}

export default CartPage;