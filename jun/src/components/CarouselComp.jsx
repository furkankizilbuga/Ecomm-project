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
import { useHistory } from "react-router-dom";

export function CarouselComp(props) {
  const { sliderImages = {}, images = [], customStyle } = props;
  const { isMobile } = useImageSize();
  const history = useHistory();

  const display = images.length > 0 
    ? images 
    : (isMobile 
        ? (sliderImages.sliderImagesVertical?.length ? sliderImages.sliderImagesVertical : [])
        : (sliderImages.sliderImagesHorizontal?.length ? sliderImages.sliderImagesHorizontal : []));

  const buttonHandler = () => {
    history.push("/shop");
    window.scrollTo(0, 0);
  } 

  return (
    <Carousel className="">
      <CarouselContent className="">
        {display.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-full">
              <img src={item.url} className={customStyle} />
              <Card className="absolute inset-0 flex flex-col items-center text-center gap-7 z-10 mt-36 bg-transparent border-none sm:items-start sm:ml-48 sm:mt-52">
                <CardContent className="flex flex-col items-center justify-center text-center gap-6 mx-2 max-w-80 sm:items-start sm:max-w-80 sm:text-start">
                  <p className="text-white font-light text-sm">{item.subTitle}</p>
                  <h2 className="text-white font-bold text-4xl">{item.title}</h2>
                  <p className="text-md text-white">{item.description}</p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button 
                      onClick={buttonHandler}
                      className={`${item.button == null ? `bg-none` : `bg-successColor`} hover:bg-[#10b35b] transition shadow-sm rounded text-white font-semibold text-sm px-9 py-3 sm: sm:px-8`}>
                      {item.button}
                    </button>
                  </div>
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
