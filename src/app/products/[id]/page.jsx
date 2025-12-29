"use client";
import Header from "@/app/Nav/Header/Header";
import { useEffect, useState } from "react";
import Snap from "../../../../public/Header/text-logo.webp";
import Image from "next/image";
import { Store, ShieldCheck, Car, Star } from "lucide-react";
import "../../Master.css";

export default function ProductDetail({ params }) {
  const {id} = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (!product) return <p>محصول یافت نشد</p>;

  return (
    <>
      <Header />
      <div className="w-full h-full justify-center items-center  flex  mt-40">
        <section className="w-full h-full flex justify-center items-center gap-10">
          <div className="w-[20%] h-[600px] flex justify-start items-center flex-col border-2 p-2 rounded-2xl gap-2">
            <div className="w-full h-[20%] bg-[var(--SnapMore)] rounded-2xl flex justify-center items-center">
              <div className=" w-[50%] h-full flex justify-center items-center flex-col ">
                <p className="font-bold text-3xl">{product.price}$</p>
                <p className="line-through text-center text-lg text-gray-500">
                  {" "}
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                  $
                </p>
              </div>
              <div className=" w-[50%] h-full flex justify-center items-center">
                <p className="w-auto font-bold rounded-3xl flex justify-center text-white p-1 items-end text-[20px] bg-[var(--SnapColor)]">
                  {product.discountPercentage}%
                </p>
              </div>
            </div>
            <div className="w-full h-[35%]  flex-col justify-center items-center ">
              <div className="w-full h-[30%]  flex justify-end items-center text-xl font-bold">
                <h3>فروشنده</h3>
              </div>
              <div className="w-full h-[35%] flex justify-end text-end text-gray-500 items-center  p-2 gap-3">
                <div>
                  <p>پشخ کاکتوس</p>
                  <span className="flex ">
                    {" "}
                    <p className="text-green-500">عالی</p>:عملکرد فروشنده
                  </span>
                </div>
                <div>
                  <span>
                    <Store />
                  </span>
                </div>
              </div>
              <div className="w-full h-[35%] border-b-2 border-t-2 flex justify-end items-center gap-3 p-2 text-[20px] text-gray-500">
                <p>گارانتی سلامت فیزیکی کالا</p>
                <span>
                  <ShieldCheck size={30} />
                </span>
              </div>
            </div>
            <div className="w-full h-[25%]  flex justify-center items-center flex-col gap-5 p-2">
              <h6 className="flex justify-end items-center w-full font-bold text-[18px]">
                نوع ارسال
              </h6>
              <div className="flex justify-end items-center w-full ">
                <div className="flex justify-start items-center  w-[50%] h-[70%]">
                  <span className="bg-[var(--TimeCar)] w-[5 0%] h-full rounded-sm flex justify-center items-center">
                    <p className="text-gray-500 text-[13px] text-center ">
                      بین 3 تا 4 روز
                    </p>
                  </span>
                </div>
                <div className="w-[50%] flex justify-end gap-3 items-center">
                  <p className=" flex justify-end items-center ">عادی</p>
                  <span className="text-gray-500  ">
                    <Car size={30} />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-[10%]  bg-[var(--SnapColor)] mt-10 rounded-sm flex justify-center items-center text-xl text-white">
              <p>افزودن به سبد خرید</p>
            </div>
          </div>
          <div className="w-[25%] h-[600px] flex justify-start pt-8 items-end flex-col gap-5">
            <div className="w-full h-[10%] justify-end flex  items-center ">
              <h1 className="text-2xl font-bold">{product.title}</h1>
            </div>
            <div className="w-[80%] h-[10%] justify-center flex  items-center ">
              <div className="w-[60%] border-1 h-[90%] rounded-4xl flex  justify-end items-center  gap-4 p-2">
                <p className="text-gray-500 ">({product.stock}امتیاز)</p>
                <p className="font-bold text-[20px]">{product.rating}</p>

                <Star strokeWidth={3} className="text-yellow-500" />
              </div>
            </div>
            <div className="w-full h-[50%]  mt-20 flex justify-start items-end flex-col p-5">
              <ul className="flex justify-center items-end flex-col text-gray-500   gap-3">
                <p className="text-[18px] text-gray-500  pb-7">ویژگی ها</p>
                <li> نوع دسته:ثابت</li>
                <li>نحوه باز و بسته شدن:ضامن دار</li>
                <li>نحوه باز و بسته شدن:ضامن دار</li>
                <li>جنس دسته:فلز</li>
              </ul>
            </div>
          </div>
          <div className="w-[30%] h-[600px] flex justify-center items-center flex-col border-2 rounded-sm">
            <figure className="flex-col">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full rounded-lg my-4"
              />
            </figure>
            <span className="w-[50%] h-auto flex justify-start items-center">
              <Image className="w-10 h-5" src={Snap} alt="SnapIcone" />
            </span>
          </div>
        </section>
    
      </div>
    </>
  );
}
