/* eslint-disable react/prop-types */
export default function CardItem(props) {

    const { item } = props;

    let buttonText;

    if(item.includes("WOMEN")) {
        buttonText = "WOMEN";
    } else if(item.includes("MEN")) {
        buttonText = "MEN";
    } else {
        buttonText = "KIDS";
    }

    return(
        <div className="flex justify-center">
            <div className="relative">
                <img src={item} alt="product-card" className="" />
                <button className="bg-white px-14 py-3 w-40 rounded text-textColor font-bold text-sm absolute bottom-6 left-7">{buttonText}</button>
            </div>
        </div>
    )
}