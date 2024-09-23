import { Link } from "react-router-dom"

const categories = [
    {
        img: "assets/shopCategories/shop-categories1.png",
        name: "CLOTHES",
        quantity: 0
    },
    {
        img: "assets/shopCategories/shop-categories1.png",
        name: "CLOTHES",
        quantity: 0
    },
    {
        img: "assets/shopCategories/shop-categories1.png",
        name: "CLOTHES",
        quantity: 0
    },
    {
        img: "assets/shopCategories/shop-categories1.png",
        name: "CLOTHES",
        quantity: 0
    },
    {
        img: "assets/shopCategories/shop-categories1.png",
        name: "CLOTHES",
        quantity: 0
    }
]

export default function ShopCategories() {





    return(
        <div className="bg-[#FAFAFA] w-full flex flex-col items-center justify-center gap-14 py-10">
            <div className="flex flex-col items-center gap-14 sm:flex-row sm:w-full sm:justify-between sm:px-12">
                <h3 className="text-textColor font-bold text-xl">Shop</h3>
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-textColor font-bold">Home</Link>
                    <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                    <span className="font-bold text-mutedColor">Shop</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:px-40 sm:flex-wrap">
                {
                    categories.map((item, index) => 
                        <div key={index} className="relative cursor-pointer">
                            <img className="rounded" src={item.img} />
                            <div className="flex flex-col gap-4 items-center font-semibold text-sm text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                                <h4>{item.name}</h4>
                                <p>{item.quantity} items</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}