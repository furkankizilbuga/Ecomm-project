/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

export default function SearchedProducts({ viewAllHandler }) {

    const history = useHistory();

    const { productsHeader } = useSelector(state => state.product);

    const createSlug = (name) => {
        return name
            .toLocaleLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .trim();
    };

    const productClickHandler = (categoryId, productName, productId) => {
        const productNameSlug = createSlug(productName);
        history.push(`/shop/${categoryId}/${productNameSlug}/${productId}`);
        window.scrollTo(0, 0);
    };


    return (
        <div className="flex flex-col p-2 rounded border border-mutedColor bg-white shadow max-w-60">
            {
                productsHeader.length > 0 && (
                <ul className="flex flex-col gap-3">
                    {productsHeader.map(product => (
                        <li 
                            key={product.id}
                            className="border border-mutedColor rounded-sm flex justify-between">
                            <div 
                                onClick={() => productClickHandler(product.category_id, product.name, product.id)} 
                                className="cursor-pointer border-r w-16 min-w-16 max-w-16 border-mutedColor flex items-center justify-center">
                                <img
                                    className="w-12 max-w-12 min-w-12" 
                                    src={product.images[0].url} />
                            </div>
                            <div className="w-32 flex flex-col mx-2 overflow-hidden justify-around">
                                <h4 onClick={() => productClickHandler(product.category_id, product.name, product.id)} className="text-sm font-semibold underline cursor-pointer truncate max-w-full">{product.name}</h4>
                                <div className="flex justify-between text-sm font-medium">
                                    <p className="text-primaryBlue">${product.price}</p>
                                    <p className="text-secondaryTextColor">{product.rating}</p>
                                </div>
                            </div>
                        </li>
                        )
                    )}
                    {
                        productsHeader.length >= 7 && (
                            <li className="flex flex-col items-center gap-2">
                                <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
                                <button onClick={viewAllHandler} className="text-white bg-primaryBlue w-full rounded font-medium">View All</button>
                            </li>
                        )
                    }
                </ul>
                ) 
            }
        </div>
    )
}