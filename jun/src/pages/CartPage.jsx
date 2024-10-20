import { useSelector } from "react-redux";

const CartPage = () => {

    const { cart } = useSelector(state => state.cart);

    return (
        <div className="flex flex-col mx-12">
            <h2 className="text-textColor font-semibold">My Cart ({cart.length})</h2>
            <div className="flex flex-col gap-4 sm:border border-mutedColor rounded py-4">
                {cart.map(({product, count, checked}, index) => 
                    <div className="flex flex-col items-center gap-2 border border-mutedColor rounded px-2 py-4" key={index}>
                        <input type="checkbox" />
                        <div className="flex gap-2">
                            <div className="flex items-center border border-mutedColor rounded min-w-20 max-w-20 h-40 sm:min-w-24">
                                <img className="w-20 object-cover object-center rounded" src={product.images[0].url} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-textColor">{product.name}</h3>
                                <p className="text-secondaryTextColor text-xs overflow-ellipsis">{product.description}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center h-full w-full">
                            <div className="flex items-center w-20 h-full">
                                <button className="border rounded-l h-8 border-mutedColor px-2 font-semibold text-primaryBlue">-</button>
                                <span className="border-t border-b h-8 flex w-full justify-center items-center border-mutedColor px-2 font-medium text-textColor text-sm">{count}</span>
                                <button className="border rounded-r h-8 border-mutedColor px-2 font-semibold text-primaryBlue">+</button>
                            </div>
                            <span className="font-semibold text-sm">${product.price}</span>
                            <i className="fa-solid fa-trash text-primaryBlue"></i>
                        </div>
                    </div>
                )}
            </div>
            <button className="bg-primaryBlue text-white text-xs font-semibold w-full py-2 rounded">Purchase</button>
        </div>
    )
}

export default CartPage;