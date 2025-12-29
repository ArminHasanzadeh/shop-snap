"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Snap from "../../../public/Header/text-logo.webp";
import { Handbag } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterSidebar from "./component/FilterSidebar";

import { Card, CardContent } from "@/components/ui/card"; // فرض بر اینه shadcn/cards رو داری

export default function CategoriesPage() {
  const [Api, setApi] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  

  // fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        // محاسبه finalPrice و discountPercentage برای هر محصول
        const productsWithDiscount = data.products.map((p) => ({
          ...p,
          finalPrice: Math.round(p.price * 0.9), // فرض مثال 10% تخفیف
          discountPercentage: 10,
        }));
        setApi(productsWithDiscount);
        setFilteredProducts(productsWithDiscount);
        setLoading(false);
      });
  }, []);

  // search filter
  const searchedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="p-4">در حال بارگذاری...</p>;

  return (
    <div className="flex flex-col items-center">
      {/* HEADER */}
      <header className="w-full h-[70px] bg-white border-b border-gray-300 flex justify-center items-center sticky top-0 z-30">
        <ul className="w-full flex justify-center items-center">
          <li className="w-[10%]">
            <Button
              variant="outline"
              size="icon"
              className="w-[40px] h-[40px] bg-white rounded-sm border border-black"
            >
              <Handbag size={25} />
            </Button>
          </li>

          <li className="w-[40%] flex justify-end">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو محصول"
              className="border rounded-lg px-4 py-2 w-[80%]"
              dir="rtl"
            />
          </li>

          <li className="w-[10%] flex justify-end">
            <figure className="w-[100px] h-[60px]">
              <Image src={Snap} alt="logo" className="w-full h-full" />
            </figure>
          </li>
        </ul>
      </header>

      {/* CONTENT */}
      <section className="w-[80%] flex justify-center items-start mt-10 gap-6">
        {/* PRODUCTS */}
        <div className="w-[80%] grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {searchedProducts.map((val) => (
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

                      {/* اضافه شدن شرط برای نمایش درصد تخفیف */}
                      {val.discountPercentage > 0 && (
                        <span className="w-auto font-bold rounded-3xl flex justify-center text-white p-1 items-end text-[15px] bg-[var(--SnapColor)]">
                          {val.discountPercentage}%
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* FILTER SIDEBAR */}
        <div className="w-[20%] sticky top-24">
          <FilterSidebar products={Api} onFilter={setFilteredProducts} />
        </div>
      </section>
    </div>
  );
}
