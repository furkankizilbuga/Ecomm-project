/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useImageSize from "@/hooks/useImageSize";

export function CarouselComp(props) {
  const { sliderImages = {} } = props;
  const { isMobile } = useImageSize();
  const display = isMobile 
    ? (sliderImages.sliderImagesVertical || []) 
    : (sliderImages.sliderImagesHorizontal || []);

  return (
    <Carousel>
      <CarouselContent>
        {display.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full">
              <img src={item.url} className="object-cover w-screen h-full" />
              <Card className="absolute inset-0 flex flex-col items-center text-center gap-7 z-10 mt-36 bg-transparent border-none">
                <CardContent className="flex flex-col items-center justify-center text-center gap-6 mx-2">
                  <p className="text-white font-light text-sm">{item.subTitle}</p>
                  <h2 className="text-white font-bold text-4xl">{item.title}</h2>
                  <p className="max-w-52 text-md text-white">{item.description}</p>
                  <p className="font-bold text-white text-lg">{item.price ? item.price : ""}</p>
                  <button className="bg-successColor rounded text-white font-semibold text-sm px-10 py-4">
                    {item.button}
                  </button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
