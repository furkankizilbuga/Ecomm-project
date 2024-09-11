/* eslint-disable react/no-unescaped-entities */
import { CarouselComp } from "@/components/CarouselComp";
import CardItem from "@/components/CardItem";
import useImageSize from "@/hooks/useImageSize";


const itemPics = {
    picsVertical: [
        {
            url: "public/assets/cardItemImages/MENproduct1.png",
            category: "MEN"
        },
        {
            url: "public/assets/cardItemImages/WOMENproduct2.png",
            category: "WOMEN"
        },
        {
            url: "public/assets/cardItemImages/WOMENproduct1.png",
            category: "ACCESORIES"
        },
        {
            url: "public/assets/cardItemImages/KIDSproduct1.png",
            category: "KIDS"
        },
    ],
    picsHorizontal: [
        {
            url: "public/assets/cardItemImages/MENproduct1Horizontal.png",
            category: "MEN"
        },
        {
            url: "public/assets/cardItemImages/WOMENproduct2Horizontal.png",
            category: "WOMEN"
        },
        {
            url: "public/assets/cardItemImages/WOMENproduct1Horizontal.png",
            category: "ACCESORIES"
        },
        {
            url: "public/assets/cardItemImages/KIDSproduct1Horizontal.png",
            category: "KIDS"
        },
    ]
}

// <div className="flex flex-col gap-10 sm:flex-row sm:max-w-8xl sm:items-center">
 
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

    const { isMobile } = useImageSize();

    const display = isMobile ? (itemPics.picsVertical || []) : (itemPics.picsHorizontal || [])

    return(
        <div className="flex flex-col items-center bg-[#FAFAFA] pb-20 my-16 gap-6 sm:my-0 sm:pb-32">
            <CarouselComp sliderImages={sliderImages} />
            <div className="flex flex-col gap-8 m-4 sm:m-0">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-textColor font-bold text-2xl">EDITOR'S PICK</h3>
                    <p className="max-w-52 text-center text-secondaryTextColor sm:max-w-96">Problems trying to resolve the conflict between</p>
                </div>
                <div className="grid gap-10 sm:grid sm:grid-cols-3  bg-red-300">
                    {
                        display.map((item, index) => 
                            <CardItem 
                                key={index} 
                                item={item} 
                                />
                        )
                    }
                </div>
           </div>
        </div>
        
    )
}