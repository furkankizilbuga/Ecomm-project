import { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {

    const [cartDisplay, setCartDisplay] = useState(false);

    const { cart } = useSelector(state => state.cart)

    return(
        <>
            <i 
                onClick={() => setCartDisplay(!cartDisplay)}
                className="fa-solid fa-cart-shopping relative rounded-full w-16 h-16 pt-4 text-2xl sm:pt-2 sm:w-10 sm:h-10 text-center sm:text-base text-primaryBlue my-auto bg-white border border-primaryBlue">
            </i>
            <div className={`${cartDisplay || "hidden"} bg-red-200 px-4 py-2 flex flex-col absolute w-52 border border-primaryBlue rounded-md`}>
                <h2 className="text-primaryBlue text-base" >My Cart {cart.length}</h2>
                {cart.map(({product, count, checked}, index) => 
                    <div key={index} className="flex gap-2 text-sm border-b border-b-primaryBlue py-4">
                        <div className="flex items-center border w-24 max-w-10 border-mutedColor rounded">
                            <img src={product.images[0].url} alt="product-image" className="object-cover object-center h-16 rounded" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-textColor">{product.name}</h3>
                            <p className="text-[8px] text-secondaryTextColor leading-3">{product.description}</p>
                            <div className="flex justify-between w-20">
                                <span className="text-primaryBlue">{product.price}</span>
                                <span>{count}</span>
                            </div>
        
                        </div>
                    </div>
                )}
                <div className="flex justify-between mt-4">
                    <button className="border border-primaryBlue text-xs px-2 py-2 rounded text-primaryBlue">Go to Cart</button>
                    <button className="bg-primaryBlue text-white text-xs font-semibold px-2 py-2 rounded">Purchase</button>
                </div>
            </div>
            
        </>
    )
}

export default Cart;