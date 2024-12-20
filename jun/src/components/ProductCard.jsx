/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */

import { useHistory } from "react-router-dom";


export default function ProductCard(props) {

    const { id, name, description, price, stock, rating, images, category_id } = props.item;
    const { url } = images[0];

    const history = useHistory();

    const createSlug = (name) => {
        return name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .trim();
    };
    
    const productNameSlug = createSlug(name);
    const productUrl = `/shop/${category_id}/${productNameSlug}/${id}`;

    const clickHandler = () => {
        
        history.push(productUrl);
        window.scrollTo(0, 0);
    };


    return(
        <a href={productUrl} rel="noopener noreferrer" onClick={clickHandler}>
            <div className="flex cursor-pointer flex-col rounded-md shadow py-4 max-w-80 w-72 h-[700px] items-center gap-6 pb-10 transition-transform duration-300 md:hover:scale-105 md:hover:shadow">
                <img className="w-72 h-96 object-cover" src={url} alt={name} />
                <div className="flex flex-col items-center gap-3">
                    <h4 className="text-textColor font-bold ">{name}</h4>
                    <p className="text-secondaryTextColor font-medium text-center mx-4 text-sm md:max-[700px]:text-primaryBlue">{description}</p>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-secondaryColor1 font-bold">${price}</span>
                        <span className="text-mutedColor text-sm font-bold">{stock} in Stock</span>
                        <span className="text-secondaryColor1 font-bold">{rating} <i className="fa-solid fa-star"></i></span>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-secondaryColor1 p-2 rounded-full"></div>
                        <div className="bg-primaryBlue p-2 rounded-full"></div>
                        <div className="bg-alertColor p-2 rounded-full"></div>
                        <div className="bg-darkBackgroundColor p-2 rounded-full"></div>
                    </div>
                </div>
            </div>
        </a>
    )
}