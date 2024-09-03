/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComp(props) {
  
  const { sliderImages = [] } = props;

  return (
    <Carousel>
      <CarouselContent>
      {sliderImages.map((img, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="aspect-[4/3] h-full p-0">
                  <img src={img} className="object-cover mx-auto w-screen sm:h-auto" /> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}