/* eslint-disable react/prop-types */
export default function CardItem(props) {

    const { item, index } = props;

    return(
            <div className={index < 2 ? "row-span-2 relative w-fit" : "relative w-fit"}>
                <img src={item.url} alt="product-card" className={index > 1 ? "sm:w-96 sm:h-[350px] sm:object-cover" : "sm:w-96 sm:h-[740px] sm:object-cover"}  />
                <button className="bg-white px-14 py-3 w-40 rounded text-textColor font-bold text-sm absolute bottom-6 left-7 flex items-center justify-center">{item.category}</button>
            </div>
    )
}