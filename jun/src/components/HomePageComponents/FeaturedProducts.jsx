import Blog from "@/components/Blog";
import { CarouselComp } from "@/components/CarouselComp";
import { useHistory } from "react-router-dom";

const blogImages = [
    "assets/blogImages/BLOGimage1.png",
    "assets/blogImages/BLOGimage2.png",
    "assets/blogImages/BLOGimage3.png",
    "assets/blogImages/BLOGimage1.png",
    "assets/blogImages/BLOGimage2.png",
    "assets/blogImages/BLOGimage3.png",
    "assets/blogImages/BLOGimage2.png",
    "assets/blogImages/BLOGimage3.png"
]

const sliderImages = {
    sliderImagesVertical: [
        {
            url: "assets/sliderImages/featuredProductsSliderImg1.png",
            subTitle: "SUMMER 2020",
            title: "Vita Classic Product",
            description: "We know how large objects will act, but things on a small scale.",
            price: "$16.48",
            button: "ADD TO CART"
        },
        {
            url: "assets/sliderImages/featuredProductsSliderImg2.png",
            subTitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ],
    sliderImagesHorizontal: [
        {
            url: "assets/sliderImages/featuredProductsSliderImg1Horizontal.png",
            subTitle: "SUMMER 2020",
            title: "Vita Classic Product",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
        {
            url: "assets/sliderImages/featuredProductsSliderImg2Horizontal.jpg",
            subTitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ]
}

export default function FeaturedProducts() {

    const customStyle = "object-cover w-screen h-[900px] sm:h-[700px]";

    const history = useHistory();

    return(
        <div className="flex flex-col items-center gap-16 mt-16 sm:mt-16">
            <div className="flex">
                <CarouselComp customStyle={customStyle} sliderImages={sliderImages} />
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row-reverse sm:gap-24">
                <div className="flex flex-col items-center gap-6 md:items-start">
                    <p className="text-mutedColor font-bold text-sm md:text-left">SUMMER 2020</p>
                    <div className="text-center flex flex-col items-center gap-4 md:text-left">
                        <h2 className="text-textColor max-w-56 font-bold text-4xl sm:max-w-96">Part of the Neural Universe</h2>
                        <p className="max-w-52 text-center text-secondaryTextColor font-semibold md:text-left sm:max-w-96">We know how large objects will act, but things on a small scale.</p>
                    </div>
                    <div className="flex-col flex gap-4 mb-6 sm:flex-row sm:justify-center">
                        <button 
                            onClick={() => {
                                history.push("/shop")
                                window.scrollTo(0, 0);
                            }} 
                            className="text-white bg-primaryBlue font-bold rounded text-xs py-3 px-8 hover:bg-[#118dd4] transition">BUY NOW</button>
                        <button className="text-primaryBlue rounded text-xs font-bold border border-primaryBlue py-3 px-8">Learn More</button>
                    </div>
                </div>
                <img className="" src="assets/neuralUniverseBottomImg.png" />
            </div>
            <div className="flex flex-col items-center gap-3 sm:mt-10">
                <p className="text-primaryBlue text-sm font-bold">Practice Advice</p>
                <h2 className="text-textColor text-center font-bold text-4xl max-w-52 sm:max-w-none">Featured Products</h2>
                <p className="text-secondaryTextColor font-semibold text-center max-w-72 sm:max-w-n">Problems trying to resolve the conflict between the two major</p>
                <div className="flex flex-col items-center max-w-7xl justify-center gap-6 mb-16 sm:flex-row sm:gap-x-8 sm:flex-wrap">
                    {
                        blogImages.map((item, index) => 
                            <Blog key={index} item={item} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}