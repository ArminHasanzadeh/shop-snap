"use client";

import React from "react";
import { useApi } from "../../../../page";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function BigSliderShop() {
  const { Api, loading } = useApi();
  if (loading) return <p>در حال دریافت اطلاعات...</p>;

  return (
    <section className="w-full flex justify-center items-center flex-col h-auto">
      {/* بخش اول */}
      <div className="w-full flex gap-5 h-full">
        {Api?.slice(0, 5).map((val) => (
          <Link href={`/products/${val.id}`} key={val.id} className="w-full">
            <Card className="h-[300px] w-full border shadow-sm rounded-xl hover:shadow-md transition-all duration-200 flex justify-center items-center cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-full text-center">
                <figure className="w-full h-[150px] flex justify-center items-center mb-3 border-b-2">
                  <img
                    src={val.images[0]}
                    alt={val.title}
                    className="object-contain h-full"
                  />
                </figure>

                <div className="flex flex-col justify-end items-center w-full">
                  <p className="text-sm font-medium text-gray-700 line-clamp-2 mb-1">
                    {val.title}
                  </p>

                  <p className="text-gray-500 line-through text-sm w-full">
                    ${val.price}
                  </p>

                  <div className="flex justify-center items-center gap-2 w-full">
                    <p className="text-black text-[20px] w-[50%] flex justify-end items-center">
                      ${val.finalPrice}
                    </p>

                    <span className="w-auto font-bold rounded-3xl flex justify-center text-white p-1 items-end text-[15px] bg-[var(--SnapColor)]">
                      {val.discountPercentage}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* بخش دوم */}
      <div className="w-full h-full flex gap-5 justify-center items-center">
        {Api?.slice(6, 11).map((val) => (
          <Link href={`/products/${val.id}`} key={val.id} className="w-full">
            <Card className="h-[300px] w-full border shadow-sm rounded-xl hover:shadow-md transition-all duration-200 flex justify-center items-center cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-full text-center">
                <figure className="w-full h-[150px] flex justify-center items-center mb-3 border-b-2">
                  <img
                    src={val.images[0]}
                    alt={val.title}
                    className="object-contain h-full"
                  />
                </figure>

                <div className="flex flex-col justify-end items-center w-full">
                  <p className="text-sm font-medium text-gray-700 line-clamp-2 mb-1">
                    {val.title}
                  </p>

                  <p className="text-gray-500 line-through text-sm w-full">
                    ${val.price}
                  </p>

                  <div className="flex justify-center items-center gap-2 w-full">
                    <p className="text-black text-[20px] w-[50%] flex justify-end items-center">
                      ${val.finalPrice}
                    </p>

                    <span className="w-auto font-bold rounded-3xl flex justify-center text-white p-1 items-end text-[15px] bg-[var(--SnapColor)]">
                      {val.discountPercentage}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BigSliderShop;
