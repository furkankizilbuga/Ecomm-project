/* eslint-disable react/no-unescaped-entities */
import { CarouselComp } from "@/components/CarouselComp";
import CardItem from "@/components/CardItem";

const itemPics = [
    "public/assets/MENproduct1.png",
    "public/assets/WOMENproduct2.png",
    "public/assets/WOMENproduct1.png",
    "public/assets/KIDSproduct1.png",
]


 
const sliderImages = {
    sliderImagesVertical: [
        {
            url: "public/assets/sliderImages/shop-hero-1-product-slide-1Vertical.png",
            subTitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ],
    sliderImagesHorizontal: [
        {
            url: "public/assets/sliderImages/shop-hero-1-product-slide-1.jpg",
            subTitle: "SUMMER 2020",
            title: "Vita Classic Product",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ]
}

export default function EditorsPick() {
    return(
        <div className="flex flex-col items-center bg-[#FAFAFA] pb-20 my-16 gap-6 sm:my-0 sm:pb-32">
            <CarouselComp sliderImages={sliderImages} />
            <div className="flex flex-col gap-8 m-4 sm:m-0">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-textColor font-bold text-2xl">EDITOR'S PICK</h3>
                    <p className="max-w-52 text-center text-secondaryTextColor sm:max-w-96">Problems trying to resolve the conflict between</p>
                </div>
                {
                    itemPics.map((item, index) => 
                        <CardItem key={index} item={item} />
                    )
                }
           </div>
        </div>
        
    )
}