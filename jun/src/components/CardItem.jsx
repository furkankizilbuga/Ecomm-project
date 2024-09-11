/* eslint-disable react/prop-types */
export default function CardItem(props) {

    const { item } = props;


    return(
            <div className="relative w-fit bg-lime-200">
                <img src={item.url} alt="product-card" className=""  />
                <button className="bg-white px-14 py-3 w-40 rounded text-textColor font-bold text-sm absolute bottom-6 left-7">{item.category}</button>
            </div>
    )
}