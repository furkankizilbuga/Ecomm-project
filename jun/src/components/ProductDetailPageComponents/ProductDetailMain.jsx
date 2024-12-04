import { CarouselComp } from "@/components/CarouselComp";
import { setCart } from "@/store/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductDetailMain() {

    const customStyle = "object-cover object-center object-top rounded w-full h-[600px] sm:h-cover sm:min-w-40 sm:w-80 sm:h-96 ";

    const product = useSelector(state => state.product.selectedProduct);
    const { images = [] } = product

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    const addToCartHandler = () => {
        const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

        let updatedCart = [...cart];

        if (existingProductIndex > -1) {
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                count: updatedCart[existingProductIndex].count + 1
            };
        } else {
            const productObj = {
                count: 1,
                checked: true,
                product: product
            }
            updatedCart.push(productObj);
        }

        dispatch(setCart(updatedCart));
    }

    return(
        <div className="bg-lightBackgroundColor py-10 flex flex-col gap-10 sm:items-center sm:px-60">
            <div className="flex items-center px-12 gap-4 sm:px-0 sm:w-full">
                <Link to="/" className="text-textColor font-bold">Home</Link>
                <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                <Link to="/shop" className="font-bold text-mutedColor">Shop</Link>
            </div>
            <div className="flex flex-col xl:flex-row sm:items-center xl:items-start">
                <div className="flex flex-col gap-6 px-10  sm:px-0 sm:max-w-80 ">
                    <CarouselComp images={images} customStyle={customStyle} />
                    <div className="flex gap-4 ">
                        {images.map((item) => 
                            <img src={item.url} key={item.index} className="w-28" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col mx-14 gap-4 py-10">
                    <div className="flex flex-col gap-4 border-b border-b-mutedColor pb-4">
                        <h4 className="font-semibold text-lg">{product.name}</h4>
                        <div className="flex items-center gap-2">
                            <div className="font-semibold text-secondaryColor1">{product.rating} <i className="fa-solid fa-star"></i></div>
                            <p className="text-sm font-semibold">{product.sell_count} Sold</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-2xl text-textColor">${product.price}</p>
                            <div className="flex text-sm items-center gap-2">
                                <span className="text-secondaryTextColor font-semibold ">Availability:</span>
                                <span className="text-primaryBlue font-semibold">{product.stock} in Stock</span>
                            </div>
                        </div>
                        <p className="font-medium text-secondaryTextColor text-sm max-w-72 sm:max-w-full sm:w-96">
                            {product.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-full md:flex-row justify-center md:justify-between md:items-center">
                            <button onClick={addToCartHandler} className="bg-primaryBlue hover:bg-primaryBlueHover transition rounded px-4 py-3 text-white font-semibold text-xs">ADD TO CART</button>
                            <div className="flex gap-3 items-center justify-center">
                                <i className="fa-solid fa-heart rounded-full p-2 bg-white border border-mutedColor"></i>
                                <i className="fa-solid fa-cart-shopping rounded-full p-2 bg-white border border-mutedColor"></i>
                                <i className="fa-solid fa-eye rounded-full p-2 bg-white border border-mutedColor"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}