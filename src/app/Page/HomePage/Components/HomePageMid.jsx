import React from "react";
import SliderShopApi from "../Components/SliderSide/SliderShopApi";
import MidImg1 from "../../../../../public/Home/HomeMid/a025f5ad-1754-43bc-922b-ce490221f798.jpg";
import MidImg2 from "../../../../../public/Home/HomeMid/a026d1db-55e4-49d5-b040-12bf0745c5a5.jpg";
import MidImg3 from "../../../../../public/Home/HomeMid/a026d4db-f3ae-4fa8-9cac-987bf922ff21 (1).jpg";
import MidImg4 from "../../../../../public/Home/HomeMid/a0242112-0c0b-41fd-8971-0a6c5859924a.jpg";
import MidImg5 from "../../../../../public/Home/HomeMid/a01a6e64-c3dc-42cd-b4a6-a6b5f3d170c7.jpg";
import MidImg6 from "../../../../../public/Home/HomeMid/9f67c8e2-cffd-4f91-a10c-7589d8bf5e91.jpg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import SliderShopBigSeal from "./SliderSide/SliderShopBigSeal";
import BigSliderShop from "./SliderSide/BigSliderShop";
import HomePageTop from "./HomePageTop";
import WrapSlider from "./SliderSide/WrapSlider";

function HomePageMid() {
  
  return (
    <section className="mt-10 flex justify-center items-center flex-col w-[100%]">
      <Card className="flex justify-center items-center flex-col border-none shadow-none w-[80%] ">
        <CardHeader className="w-full text-end text-2xl">
          <h3 className="text-pink-700 ">فروش ویژه</h3>
        </CardHeader>
        <CardContent className={"flex justify-center items-center"}>
          <SliderShopApi />
        </CardContent>
      </Card>

        <span className="w-[85%] h-[3px] flex justify-center items-center bg-gray-200 mt-5"></span>
      <Card className="border-none shadow-none w-[80%] max-xl:w-full max-xl:gap-2 h-[30vh]  flex justify-center items-center">
        <CardContent className="flex justify-center items-center w-full h-full  mt-5 ">
          <ul className="flex justify-center items-center w-full h-full gap-10">
            <li className="max-md:w-[400px] max-md:h-[250px]">
              <Image src={MidImg1} className="rounded-md" alt="MidPhoto" />
            </li>
            <li className="max-md:hidden">
              <Image src={MidImg2} className="rounded-md" alt="MidPhoto" />
            </li>
            <li className="max-lg:hidden">
              <Image src={MidImg3} className="rounded-md" alt="MidPhoto" />
            </li>
            <li className="max-xl:hidden">
              <Image src={MidImg4} className="rounded-md" alt="MidPhoto" />
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="flex justify-center items-center flex-col border-none shadow-none w-[80%]">
        <CardHeader className="w-full text-end text-2xl">
          <h3 className="text-pink-700 ">پرفروش ها</h3>
        </CardHeader>
        <CardContent className={"flex justify-center items-center"}>
          <SliderShopBigSeal />
        </CardContent>
      </Card>


      <Card className="border-none shadow-none w-full h-auto  flex justify-center items-center">
        <span className="w-[85%] h-[3px] flex justify-center items-center bg-gray-200"></span>
        <h3 className="text-pink-700 text-end w-[80%] text-2xl ">دسته بندی</h3>
        <CardContent className="flex justify-center items-center w-[80%] h-auto  cal">
          <WrapSlider />
        </CardContent>
      </Card>

      <Card className="border-none shadow-none w-[80%] max-lg:w-full flex justify-center items-center">
        <CardContent className="flex justify-center items-center w-full h-[200px] mt-5 max-md:hidden">
          <ul className="flex justify-center items-center w-full h-full gap-10">
            <li className=" w-full h-full">
              <Image
                src={MidImg5}
                className="rounded-md w-full h-full"
                alt="MidPhoto"
              />
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="flex justify-center items-center flex-col border-none shadow-none w-[80%] h-auto max-md:hidden">
        <CardHeader className="w-full text-end text-2xl">
          <h3 className="text-pink-700 ">فروش ویژه برند پانسی</h3>
        </CardHeader>
        <CardContent>
          <BigSliderShop />
        </CardContent>
      </Card>

      <Card className="border-none shadow-none w-[80%]  flex justify-center items-center">
        <CardContent className="flex justify-center items-center w-full h-[200px] mt-5 max-md:hidden">
          <ul className="flex justify-center items-center w-full h-full gap-10">
            <li className=" w-full h-full">
              <Image
                src={MidImg6}
                className="rounded-md w-full h-full"
                alt="MidPhoto"
              />
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

export default HomePageMid;
