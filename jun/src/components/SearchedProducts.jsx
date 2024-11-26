/* eslint-disable no-useless-escape */
import { useHistory } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function SearchedProducts({ searchedProducts }) {

    const history = useHistory();

    const createSlug = (name) => {
        return name
            .toLocaleLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .trim();
    };

    const clickHandler = (categoryId, productName, productId) => {
        const productNameSlug = createSlug(productName);
        history.push(`/shop/${categoryId}/${productNameSlug}/${productId}`);
        window.scrollTo(0, 0);
    };

    /*
    
        TODO 5-6 tane gözüksün. Daha sonrası için view all butonu olacak.
        Tıklandığında aramalarınızla eşleşen sonuçlar şeklinde bir sayfaya yönlendirecek.

    */

    return (
        <div className="flex flex-col p-2 rounded bg-white shadow max-w-60">
            {
                searchedProducts.length > 0 && (
                <ul className="flex flex-col gap-3">
                    {searchedProducts.map(product => (
                        <li 
                            key={product.id}
                            onClick={() => clickHandler(product.category_id, product.name, product.id)}
                            className="border border-mutedColor rounded-sm flex justify-between">
                            <div className="border-r w-16 min-w-16 max-w-16 border-mutedColor flex items-center justify-center">
                                <img
                                    className="w-12 max-w-12 min-w-12" 
                                    src={product.images[0].url} />
                            </div>
                            <div className="w-32 flex flex-col mx-2 overflow-hidden justify-around">
                                <h4 className="text-sm font-medium truncate max-w-full">{product.name}</h4>
                                <div className="flex justify-between text-sm font-medium">
                                    <p className="text-primaryBlue">${product.price}</p>
                                    <p className="text-secondaryTextColor">{product.rating}</p>
                                </div>
                            </div>
                        </li>
                        )
                    )}
                </ul>
                )
            }
        </div>
    )
}