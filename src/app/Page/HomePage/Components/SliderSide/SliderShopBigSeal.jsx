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
import Link from "next/link";

function SliderShopBigSeal() {
  const { Api, loading } = useApi();
  if (loading) return <p>در حال دریافت اطلاعات...</p>;

  return (
    <section className="w-[80%] flex justify-center items-center">
      <div className="w-full flex justify-center items-center ">
        <Carousel
          opts={{
            align: "center",
            loop: false,
          }}
          className=" flex justify-center w-full" 
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {Api?.slice(10, 20).map((val) => (
              <CarouselItem
                key={val.id}
                className="
                  basis-1/2      /* موبایل: 2 آیتم */
                  sm:basis-1/5   /* sm: 2 آیتم */
                  md:basis-1/3   /* md: 3 آیتم */
                  lg:basis-1/4   /* lg: 4 آیتم */
                  xl:basis-1/5   /* xl: 5 آیتم */
                 max-sm:w-[10vh]
                 w-[180px]
                "
              >
                <Link
                  href={`/products/${val.id}`}
                  key={val.id}
                  className="w-full"
                >
                  <Card className="h-[300px] w-full border shadow-sm rounded-xl flex flex-col justify-center items-center">
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
                </Link>
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
