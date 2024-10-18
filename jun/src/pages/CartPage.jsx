import { useSelector } from "react-redux";

const CartPage = () => {

    const { cart } = useSelector(state => state.cart);

    return (
        <>
            <h2>My Cart (2 Ürün)</h2>
            <div>
                {cart.map(({product, count, checked}, index) => 
                    <div className="flex items-center" key={index}>
                        <input type="checkbox" />
                        <div>
                            <img src={product.images[0].url} />
                            <div>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div>
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
        </>
    )
}

export default CartPage;