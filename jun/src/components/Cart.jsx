import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const [cartDisplay, setCartDisplay] = useState(false);
    const { cart } = useSelector(state => state.cart);
    const cartRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCartDisplay(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const calculateProductTotal = (price, count) => {
        return (price * count).toFixed(2);
    };

    const calculateCartTotal = () => {
        return cart.reduce((total, item) => total + (item.product.price * item.count), 0).toFixed(2);
    };

    return (
        <div className="relative" ref={cartRef}>
            <i 
                onClick={() => setCartDisplay(!cartDisplay)}
                className="fa-solid fa-cart-shopping rounded-full w-16 h-16 pt-4 text-2xl sm:pt-2 sm:w-10 sm:h-10 text-center sm:text-base text-primaryBlue my-auto bg-white border border-primaryBlue"
            ></i>
            <div className={`${cartDisplay ? "" : "hidden"} bg-white p-4 flex flex-col absolute w-52 sm:w-72 border border-primaryBlue rounded-md z-50 -inset-x-20 mt-4`}>
                <h2 className="text-primaryBlue font-semibold text-base">My Cart ({cart.length})</h2>
                {cart.map(({product, count, checked}, index) => (
                    <div key={index} className="flex gap-2 h-32 w-full text-sm border-b border-b-primaryBlue py-4">
                        <div className="flex items-center border border-mutedColor rounded min-w-12 sm:min-w-16">
                            <img src={product.images[0].url} alt="product-image" className="w-12 object-cover object-center h-16 rounded sm:w-16 sm:h-20" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-textColor text-xs sm:text-sm font-medium">{product.name}</h3>
                                <p className="text-[8px] sm:text-[10px] text-secondaryTextColor leading-3 sm:overflow-ellipsis">{product.description}</p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-between w-full">
                                    <span className="text-primaryBlue font-medium">${product.price} x {count}</span>
                                </div>
                                <span className="text-secondaryTextColor text-xs">Total: ${calculateProductTotal(product.price, count)}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="pt-2">
                    <span className="font-semibold text-base text-primaryBlue">Cart Total: ${calculateCartTotal()}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <button className="border border-primaryBlue text-xs font-medium px-2 py-2 rounded text-primaryBlue">Go to Cart</button>
                    <button className="bg-primaryBlue text-white text-xs font-semibold px-2 py-2 rounded">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;