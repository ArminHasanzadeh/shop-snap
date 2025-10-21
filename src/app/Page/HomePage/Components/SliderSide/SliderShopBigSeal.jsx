"use client"


import React from "react";
import { useApi } from "../../../../page";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function SliderShopBigSeal() {
    const { Api } = useApi();
    return (
        <section className="w-full flex justify-center items-center">
      <div className="w-full ">
        <Carousel
          opts={{
            align: "start",
            loop: false, 
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {Api.slice(10, 20).map((val, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Card className="h-[300px] border shadow-sm rounded-xl hover:shadow-md transition-all duration-200 flex flex-col justify-center">
                  <CardContent className="flex flex-col items-center justify-center h-full  text-center ">
                    <figure className="w-full h-[150px] flex justify-center items-center mb-3 border-b-2">
                      <img
                        src={val.image}
                        alt={val.title}
                        className="object-contain h-full"
                      />
                    </figure>
                    <div className="flex flex-col justify-end items-center flex-1">
                      <p className="text-sm font-medium text-gray-700 line-clamp-2 mb-1">
                        {val.title}
                      </p>
                      <span className="text-lg font-semibold text-black">
                        {val.price} $
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          
          <CarouselPrevious className="left-[-2rem] bg-white shadow-md hover:bg-gray-100" />
          <CarouselNext className="right-[-2rem] bg-white shadow-md hover:bg-gray-100" />
        </Carousel>
      </div>
    </section>
    );
}

export default SliderShopBigSeal;