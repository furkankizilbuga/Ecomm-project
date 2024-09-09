import Blog from "@/components/Blog";
import { CarouselComp } from "@/components/CarouselComp";

const blogImages = [
    "assets/blogImages/BLOGimage1.png",
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
            price: "$16.48",
            button: "ADD TO CART"
        },
        {
            url: "assets/sliderImages/featuredProductsSliderImg2Horizontal.png",
            subTitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ]
}

export default function FeaturedProducts() {
    return(
        <div className="flex flex-col gap-16">
            <div className="flex">
                <CarouselComp className="" sliderImages={sliderImages} />
            </div>
            <div className="flex flex-col items-center gap-6">
                <p className="text-mutedColor font-bold text-sm">SUMMER 2020</p>
                <div className="text-center flex flex-col gap-4">
                    <h2 className="text-textColor font-bold text-4xl">Part of the <br /> Neural <br /> Universe</h2>
                    <p className="max-w-52 text-center text-secondaryTextColor font-semibold">We know how large objects will act, but things on a small scale.</p>
                </div>
                <div className="flex-col flex gap-4 mb-6">
                    <button className="text-white bg-primaryBlue font-bold rounded text-xs py-3 px-8">BUY NOW</button>
                    <button className="text-primaryBlue rounded text-xs font-bold border border-primaryBlue py-3">Learn More</button>
                </div>
                <img src="assets/neuralUniverseBottomImg.png" />
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-primaryBlue text-sm font-bold">Practice Advice</p>
                <h2 className="text-textColor font-bold text-4xl">Featured <br /> Products</h2>
                <p className="text-secondaryTextColor font-semibold">Problems trying to resolve the <br /> conflict between the two major</p>
                <div className="flex flex-col gap-6">
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