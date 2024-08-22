/* eslint-disable react/no-unescaped-entities */
import { CarouselComp } from "@/components/CarouselComp";
import CardItem from "@/components/CardItem";

const itemPics = [
    "public/assets/MENproduct1.png",
    "public/assets/WOMENproduct2.png",
    "public/assets/WOMENproduct1.png",
]

export default function HomePage() {
    return(
        <div className="flex flex-col items-center my-16 gap-6 sm:my-0">
           <CarouselComp />
           <div className="flex flex-col gap-8 m-4 sm:m-0">
            <div className="flex flex-col items-center gap-3">
                <h3 className="text-textColor font-bold text-2xl">EDITOR'S PICK</h3>
                <p className="max-w-52 text-center text-secondaryTextColor">Problems trying to resolve the conflict between</p>
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