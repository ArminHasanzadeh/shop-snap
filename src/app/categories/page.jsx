"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Snap from "../../../public/Header/text-logo.webp";
import { Button } from "@/components/ui/button";
import FilterSidebar from "./component/FilterSidebar";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoriesPage() {
  const [Api, setApi] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // تعداد محصولات در سبد خرید
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalQuantity = storedCart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCount(totalQuantity);

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCount = updatedCart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCount(updatedCount);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // fetch products و اعمال درصد تخفیف و finalPrice
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const productsWithDiscount = data.products.map((p) => {
          const discount = p.discountPercentage || 0;
          const finalPrice = parseFloat(
            (p.price - (p.price * discount) / 100).toFixed(2)
          );

          return {
            ...p,
            finalPrice,
            discountPercentage: discount,
          };
        });

        setApi(productsWithDiscount);
        setFilteredProducts(productsWithDiscount);
        setLoading(false);
      })
      .catch((err) => console.error(err));
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
              className="w-[40px] h-[40px] rounded-sm border-1 border-black flex justify-center items-center relative"
            >
              <Link
                href="/shopCart"
                className="w-full h-full flex justify-center items-center"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </span>
              </Link>

              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex justify-center items-center">
                  {count}
                </span>
              )}
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
              <Link href={"/"}>
                <Image className="w-full h-full" src={Snap} alt="SnapIcone" />
              </Link>
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
              <Card className="h-[300px] w-full border shadow-sm rounded-xl hover:shadow-md transition-all duration-200 flex flex-col justify-center items-center cursor-pointer">
                <CardContent className="w-full flex flex-col items-center justify-center h-full text-center">
                  <figure className="w-full h-[150px] flex justify-center items-center mb-3 border-b-2">
                    <img
                      src={val.images[0]}
                      alt={val.title}
                      className="object-contain h-full w-full"
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
