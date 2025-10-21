"use client";

import React from "react";
import { useApi } from "../../../../page";
import { Card, CardContent } from "@/components/ui/card";


function BigSliderShop() {
  const { Api } = useApi();
  return (
    <section className="w-full flex justify-center items-center flex-col ga">
      <div className="w-full flex  gap-5  h-full">
        {Api.slice(0, 5).map((val, i) => (
          <Card
            key={i}
            className="h-[300px] w-full border shadow-sm rounded-xl hover:shadow-md transition-all duration-200 flex  justify-center items-center "
          >
            <CardContent className=" flex flex-col items-center justify-center h-full  text-center ">
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
        ))}
        </div>
        <div className="w-full flex  gap-5 ">
        {Api.slice(10, 15).map((val, i) => (
          <Card
            key={i}
            className="h-[300px] w-full border shadow-sm rounded-xl hover:shadow-md transition-all duration-200 flex  justify-center items-center"
          >
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
        ))}
        </div>
      
    </section>
  );
}

export default BigSliderShop;
