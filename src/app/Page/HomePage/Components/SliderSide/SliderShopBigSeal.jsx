"use client";

import React from "react";
import { useApi } from "../../../../page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function SliderShopBigSeal() {
  const { Api, loading } = useApi();
   if (loading) return <p>در حال دریافت اطلاعات...</p>;

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
            {Api?.slice(10, 20).map((val) => (
              <CarouselItem
                key={val.id}
                className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 w-[150px] "
              >
                <Card className="h-[300px] w-full border shadow-sm rounded-xl   flex flex-col justify-center items-center">
                  <CardContent className="w-full flex flex-col items-center justify-center h-full text-center">
                    <figure className="w-full h-[150px] flex justify-center items-center mb-3 border-b-2">
                      <img
                        src={val.images[0]}
                        alt={val.title}
                        className="object-contain h-full w-full"
                      />
                    </figure>
                    <div className="flex flex-col justify-end items-center  w-full">
                      <p className="text-sm font-medium text-gray-700 line-clamp-2 mb-1">
                        {val.title}
                      </p>
                      <p className="text-gray-500 line-through text-sm w-full">
                        ${val.price}
                      </p>
                      <div className="flex justify-center items-center gap-2 w-full ">
                        <p className="text-black  text-[20px] w-[50%] flex justify-end items-center">
                          ${val.finalPrice}
                        </p>
                        <span className="w-auto font-bold  rounded-3xl flex justify-center text-white p-1 items-end text-[15px] bg-[var(--SnapColor)]">
                          {val.discountPercentage}%
                        </span>
                      </div>
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
