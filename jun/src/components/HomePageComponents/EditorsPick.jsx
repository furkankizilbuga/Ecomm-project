/* eslint-disable react/no-unescaped-entities */
import { CarouselComp } from "@/components/CarouselComp";
import CardItem from "@/components/CardItem";

const itemPics =  [
        {
            url: "assets/cardItemImages/MENproduct1.png",
            category: "MEN",
            shop: "/shop/1/unisex-3-l/62"
        },
        {
            url: "assets/cardItemImages/WOMENproduct2.png",
            category: "WOMEN",
            shop: "/shop/1/siyah-100-pamuk/2"
        },
        {
            url: "assets/cardItemImages/WOMENproduct1.png",
            category: "ACCESORIES"
        },
        {
            url: "assets/cardItemImages/KIDSproduct1.png",
            category: "KIDS"
        },
    ]


 
const sliderImages = {
    sliderImagesVertical: [
        {
            url: "assets/sliderImages/shop-hero-1-product-slide-1Vertical.png",
            subTitle: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ],
    sliderImagesHorizontal: [
        {
            url: "assets/sliderImages/shop-hero-1-product-slide-1.png",
            subTitle: "SUMMER 2020",
            title: "Vita Classic Product",
            description: "We know how large objects will act, but things on a small scale.",
            button: "SHOP NOW"
        },
    ]
}

export default function EditorsPick() {

    const customStyle = "object-cover w-screen h-[900px] sm:h-[700px]";

    return(
        <div className="flex flex-col items-center bg-[#FAFAFA] pb-20 my-16 gap-6 sm:my-0 sm:pb-32">
            <CarouselComp sliderImages={sliderImages} customStyle={customStyle} />
            <div className="flex flex-col gap-8 m-4 sm:m-0">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-textColor font-bold text-2xl">EDITOR'S PICK</h3>
                    <p className="max-w-52 text-center text-secondaryTextColor sm:max-w-96">Problems trying to resolve the conflict between</p>
                </div>
                <div className="grid sm:grid-cols-3 place-items-center sm:grid-rows-2 gap-10 sm:mx-10">
                    {
                        itemPics.map((item, index) => 
                            <CardItem 
                                key={index}
                                index={index}
                                item={item} 
                                />
                        )
                    }
                </div>
           </div>
        </div>
        
    )
}