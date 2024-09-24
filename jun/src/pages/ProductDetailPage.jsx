import { CarouselComp } from "@/components/CarouselComp";
import { Link } from "react-router-dom";

const sliderImages = {
    sliderImagesVertical: [
        "/assets/productCardImages/WOMENproduct3.png",
        "/assets/productCardImages/MENproduct3.png"
    ],
    sliderImagesHorizontal: [
        "/assets/productCardImages/WOMENproduct3.png",
        "/assets/productCardImages/MENproduct3.png"
    ]
}
   

export default function ProductDetailPage() {
    return(
        <div className="bg-lightBackgroundColor py-10 flex flex-col items-center gap-10">
            <div className="flex items-center gap-4">
                <Link to="/" className="text-textColor font-bold">Home</Link>
                <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                <Link to="/shop" className="font-bold text-mutedColor">Shop</Link>
            </div>
            <div>
                <div className="flex flex-col gap-6 px-10">
                    <CarouselComp sliderImages={sliderImages} />
                    <div className="flex gap-4 ">
                        {sliderImages.sliderImagesVertical.map((item, index) => 
                            <img src={item} key={index} className="w-36" />
                        )}
                    </div>
                </div>
                <div className="flex flex-col border border-b-secondaryTextColor">
                    <h4>Ürün ismi</h4>
                    <div className="flex">
                        <div>Rating</div>
                        <p>10 Reviews</p>
                    </div>
                    <div className="flex">
                        <p>$1.139</p>
                        <p>Availability: In Stock</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ad accusantium mollitia, 
                        dolorem modi atque aliquid nobis quasi velit voluptatum id 
                        veritatis ea earum doloribus magni nam. 
                        Earum sapiente harum ex.
                    </p>
                </div>
                <div>
                    <div>RENKLER</div>
                    <div className="flex">
                        <button>Select Options</button>
                        <div>
                            <i className="fa-solid fa-heart"></i>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <i className="fa-solid fa-eye"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}