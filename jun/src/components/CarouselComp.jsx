/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";

export function CarouselComp(props) {
  
  const { sliderImages = {} } = props;

  const [isMobile, SetIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => SetIsMobile(window.innerWidth < 640);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const display = isMobile 
  ? (sliderImages.sliderImagesVertical || []) 
  : (sliderImages.sliderImagesHorizontal || []);


  return (
    <Carousel>
      <CarouselContent>
      {display.map((img, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="h-full p-0 max-h-76 mx-auto">
                  <img src={img} className="object-fill mx-auto w-screen h-auto" /> 
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