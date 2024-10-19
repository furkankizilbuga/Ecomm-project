import { useSelector } from "react-redux";

const CartPage = () => {

    const { cart } = useSelector(state => state.cart);

    return (
        <div className="flex flex-col mx-12">
            <h2>My Cart (2 Ürün)</h2>
            <div className="flex flex-col">
                {cart.map(({product, count, checked}, index) => 
                    <div className="flex items-center gap-2" key={index}>
                        <input type="checkbox" />
                        <div className="flex gap-2">
                            <div className="flex items-center border border-mutedColor rounded min-w-20 max-w-20 h-40 sm:min-w-24">
                                <img className="w-20 object-cover object-center rounded" src={product.images[0].url} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textColor">{product.name}</h3>
                                <p className="text-secondaryTextColor text-sm">{product.description}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex">
                                <button>-</button>
                                <span>{count}</span>
                                <button>+</button>
                            </div>
                            <span>{product.price}</span>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default CartPage;