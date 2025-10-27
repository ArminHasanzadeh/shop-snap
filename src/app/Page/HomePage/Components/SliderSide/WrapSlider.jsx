"use client";

import React from "react";
import Wrapimg1 from "../../../../../../public/WrapBox/9eac1b20-cf9e-432b-bada-15fedbd3e203.png";
import Wrapimg2 from "../../../../../../public/WrapBox/9eac1b33-d809-4cff-839c-1765d6dfbef3.png";
import Wrapimg3 from "../../../../../../public/WrapBox/9eac1b64-3d7b-4e96-a61b-e980481f1217.png";
import Wrapimg4 from "../../../../../../public/WrapBox/9eac1b76-2f5f-4710-b088-45eed135631c.png";
import Wrapimg5 from "../../../../../../public/WrapBox/9eac1b99-00c2-43cd-929e-7c9a4e45a399.png";
import Wrapimg6 from "../../../../../../public/WrapBox/9f99ce1c-6051-49f0-b755-9065b20d271c.jpg";
import { useApi } from "../../../../page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const CategoriesIMg = [
  { img: Wrapimg6 },
  { img: Wrapimg5 },
  { img: Wrapimg3 },
  { img: Wrapimg4 },
  { img: Wrapimg2 },
  { img: Wrapimg1 },
];
 


function WrapSlider() {
  const {Categories } = useApi();
  
  


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
            {Categories?.slice(0, 6).map((val ,i) => (
              <CarouselItem
                key={i}
                className=" basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 w-[150px] "
              >
                <Card className="h-[300px] w-full flex flex-col justify-center items-center border-none shadow-none">
                  <CardContent className="w-full flex flex-col items-center justify-center h-full text-center">
                    <span className="w-full h-[150px] flex justify-center items-center ">
                      <Image className="w-full h-full" src={CategoriesIMg[i]?.img} alt="imgwrap" />
                    </span>
                    <div className="flex flex-col justify-end items-center  w-full">
                      <p className="text-sm font-medium text-gray-700 line-clamp-2 mb-1">
                        {val.name}
                      </p>
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

export default WrapSlider;
