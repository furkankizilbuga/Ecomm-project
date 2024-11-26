/* eslint-disable react/prop-types */
export default function CardItem(props) {

    const { item, index } = props;

    return(
            <div className={index < 2 ? "row-span-2 relative w-fit shadow" : "relative w-fit shadow"}>
                <img src={item.url} alt="card-item" className={`${index > 1 ? "w-64 sm:w-96 sm:h-[350px] sm:object-cover" : "w-64 sm:w-96 sm:h-[740px] sm:object-cover"} `}  />
                <button className="bg-white bg-opacity-80 hover:bg-opacity-100 transition shadow px-14 py-3 w-40 rounded text-textColor font-bold text-sm absolute bottom-6 left-7 flex items-center justify-center">{item.category}</button>
            </div>
    )
}