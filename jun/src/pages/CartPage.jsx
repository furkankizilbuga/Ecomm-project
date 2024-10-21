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
            if(item.product.id === productObj.product.id) {
                return {
                    ...item,
                    count: Math.max(item.count + op, 1)
                }
            }
            return item;
        })
        dispatch(setCart(updatedCart));
    }

    const totalItems = cart.reduce((acc, item) => acc + item.count, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.product.price * item.count), 0).toFixed(2);

    return (
        <div className="flex flex-col gap-4 sm:min-h-[500px] px-12 sm:px-12 py-16 bg-lightBackgroundColor">
            <h2 className="text-textColor font-semibold sm:text-xl">My Cart ({cart.length})</h2>
            {cart.length === 0 &&
            <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row sm:justify-center">
                <span className="font-semibold text-textColor text-sm sm:text-base flex items-center gap-4">
                    <i className="fa-solid fa-cart-shopping text-2xl text-center text-primaryBlue my-auto border-primaryBlue"></i>You have no products in your cart.
                </span>
                <button onClick={() => history.push("/shop")} className="bg-primaryBlue text-white font-semibold text-xs sm:text-base rounded px-6 py-2">Shop Now</button>
            </div>}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
                <div className="flex flex-col gap-4 rounded lg:w-3/4">
                    {cart.map(({product, count, checked}, index) => (
                        <div className="flex flex-col md:flex-row bg-white items-center gap-2 shadow rounded px-2 py-4" key={index}>
                            <input className="mb-2" type="checkbox" />
                            <div className="flex justify-start gap-2 w-full">
                                <div className="flex items-center border border-mutedColor rounded min-w-20 max-w-20 h-40 md:h-44 md:min-w-24 md:max-w-24">
                                    <img className="w-20 object-cover object-center md:w-24" src={product.images[0].url} alt={product.name} />
                                </div>
                                <div className="flex flex-col max-h-40 md:gap-2">
                                    <h3 className="font-semibold text-textColor md:text-lg">{product.name}</h3>
                                    <p className="text-secondaryTextColor text-xs md:text-md line-clamp-2">{product.description}</p>
                                    <p className="text-primaryBlue font-semibold text-md">{product.rating} <i className="fa-solid fa-star"></i></p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center h-full w-full md:mr-4">
                                <div className="flex items-center w-20 h-full">
                                    <button onClick={() => countHandler({product, count, checked}, "decrease")} className="border rounded-l h-8 border-mutedColor px-2 font-bold text-primaryBlue">-</button>
                                    <span className="border-t border-b h-8 flex w-full justify-center items-center border-mutedColor px-2 font-medium text-textColor text-sm">{count}</span>
                                    <button onClick={() => countHandler({product, count, checked}, "increase")} className="border rounded-r h-8 border-mutedColor px-2 font-bold text-primaryBlue">+</button>
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-semibold text-xs md:text-base">${product.price.toFixed(2)} / per</span>
                                    <span className="font-bold text-xs md:text-base text-primaryBlue">Total: ${(product.price * count).toFixed(2)}</span>
                                </div>
                                <i className="fa-solid fa-trash text-primaryBlue"></i>
                            </div>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && 
                <div className="lg:w-1/4 h-72 bg-white p-4 rounded shadow flex flex-col">
                    <div className="mb-4 overflow-y-auto flex flex-col gap-2">
                        <h4 className="font-semibold text-primaryBlue">Products:</h4>
                        <ul className="list-disc pl-5">
                            {cart.map(({product, count}) => (
                                <li className="" key={product.id}>
                                    <p className="text-sm font-medium">{product.name} x{count}</p>
                                    <p className="text-primaryBlue font-semibold"> ${(product.price * count).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-secondaryTextColor font-medium text-sm flex flex-col">
                            <p className="">Total Items: {totalItems}</p>
                            <p className="">Total Price: ${totalPrice}</p>
                            </div>
                        <button 
                            disabled={cart.length === 0} 
                            className={`w-full bg-primaryBlue text-white text-sm sm:text-base font-semibold py-2 rounded ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Purchase
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default CartPage;