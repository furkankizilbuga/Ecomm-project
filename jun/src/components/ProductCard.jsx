/* eslint-disable react/prop-types */


export default function ProductCard(props) {

    const { item, onClick } = props;
    const { name, description, price, stock, rating, images } = item;
    const { url } = images[0];

    return(
        <div onClick={onClick} className="flex cursor-pointer flex-col rounded-md border border-1 py-4 max-w-80 w-72 h-[700px] items-center gap-6 pb-10">
            <img className="rounded w-72 h-96 object-cover" src={url} />
            <div className="flex flex-col items-center gap-3">
                <h4 className="text-textColor font-bold ">{name}</h4>
                <p className="text-secondaryTextColor font-bold text-center mx-4 text-sm md:max-[700px]:text-primaryBlue">{description}</p>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-secondaryColor1 font-bold">${price}</span>
                    <span className="text-mutedColor text-sm font-bold">{stock} on Stock</span>
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
    )
}