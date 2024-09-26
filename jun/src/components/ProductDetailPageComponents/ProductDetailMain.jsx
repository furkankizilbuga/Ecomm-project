import { CarouselComp } from "@/components/CarouselComp";
import { Link } from "react-router-dom";

const sliderImages = {
    sliderImagesVertical: [
        {
            url: "/assets/productCardImages/WOMENproduct3.png",
            subTitle: "",
            title: "",
            description: "",
            button: ""
        },
        {
            url: "/assets/productCardImages/MENproduct3.png",
            subTitle: "",
            title: "",
            description: "",
            button: ""
        }
    ],
    sliderImagesHorizontal: [
        {
            url: "/assets/productCardImages/WOMENproduct3.png",
            subTitle: "",
            title: "",
            description: "",
            button: ""
        },
        {
            url: "/assets/productCardImages/MENproduct3.png",
            subTitle: "",
            title: "",
            description: "",
            button: ""
        }
    ]
}

export default function ProductDetailMain() {

    const customStyle = "object-cover object-center object-top rounded w-full h-[400px] sm:h-cover sm:min-w-40 sm:max-w-80 sm:max-h-96 ";

    return(
        <div className="bg-lightBackgroundColor py-10 flex flex-col gap-10 sm:items-center sm:px-60">
            <div className="flex items-center px-12 gap-4 sm:px-0 sm:w-full">
                <Link to="/" className="text-textColor font-bold">Home</Link>
                <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                <Link to="/shop" className="font-bold text-mutedColor">Shop</Link>
            </div>
            <div className="flex flex-col xl:flex-row sm:items-center xl:items-start">
                <div className="flex flex-col gap-6 px-10  sm:px-0 sm:max-w-80 ">
                    <CarouselComp sliderImages={sliderImages} customStyle={customStyle} />
                    <div className="flex gap-4 ">
                        {sliderImages.sliderImagesVertical.map((item, index) => 
                            <img src={item.url} key={index} className="w-36" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col mx-14 gap-4 py-10">
                    <div className="flex flex-col gap-4 border-b border-b-mutedColor pb-4">
                        <h4 className="font-semibold text-lg">Ürün ismi</h4>
                        <div className="flex items-center gap-2">
                            <div>Rating</div>
                            <p className="text-sm font-semibold">10 Reviews</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-2xl text-textColor">$1.139</p>
                            <div className="flex text-sm items-center gap-2">
                                <span className="text-secondaryTextColor font-semibold ">Availability:</span>
                                <span className="text-primaryBlue font-semibold">In Stock</span>
                            </div>
                        </div>
                        <p className="font-medium text-secondaryTextColor text-sm max-w-72 sm:max-w-full sm:w-96">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ad accusantium mollitia, 
                            dolorem modi atque aliquid nobis quasi velit voluptatum id 
                            veritatis ea earum doloribus magni nam. 
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>RENKLER</div>
                        <div className="flex justify-between items-center">
                            <button className="bg-primaryBlue rounded px-4 py-3 text-white font-semibold text-xs">Select Options</button>
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-heart rounded-full p-2 bg-white border border-mutedColor"></i>
                                <i className="fa-solid fa-cart-shopping rounded-full p-2 bg-white border border-mutedColor"></i>
                                <i className="fa-solid fa-eye rounded-full p-2 bg-white border border-mutedColor"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}