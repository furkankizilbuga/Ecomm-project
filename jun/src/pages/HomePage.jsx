import { CarouselComp } from "@/components/CarouselComp";
import CardItem from "@/components/CardItem";

const itemPics = [
    "public/assets/MENproduct1.png",
    "public/assets/WOMENproduct2.png",
]

export default function HomePage() {
    return(
        <div className="">
           <CarouselComp />
           <div className="flex flex-col gap-8 m-4">
            {
                itemPics.map((item, index) => 
                    <CardItem key={index} item={item} />
                )
            }
           </div>
        </div>
        
    )
}