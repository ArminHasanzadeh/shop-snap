import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Snap from "../../../../public/Header/text-logo.webp";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Archive } from 'lucide-react';

function Header(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalQuantity = storedCart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setCount(totalQuantity);

    // آپدیت وقتی localStorage تغییر کند
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
  return (
    <header className="w-full h-[60px] flex justify-center items-center p-2 bg-gray-100  shadow-sm  fixed top-0 z-99">
      <ul className="w-[70%] h-full flex justify-center items-center">
        <li className="w-[10%] h-full flex justify-start items-center ">
          <Button
            variant="outline"
            className={
              "w-[40px] h-[40px] rounded-sm border-1 border-black flex justify-center items-center relative"
            }
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

            {/* Badge تعداد */}
            {count > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex justify-center items-center">
                {count}
              </span>
            )}
          </Button>
        </li>

        <li className="w-[30%] h-full flex justify-start items-center">
          <Button
            variant="outline"
            className={
              "border-2 border-black p-5 flex justify-center items-center"
            }
          >
            <Link href={"/categories"}>
              <span>همه محصولات</span>
            </Link>
            <span>
              <Archive />
            </span>
          </Button>
        </li>
        <li className="w-[40%] h-full flex justify-end items-center gap-2">
          <span className="w-[15%] h-[90%]">
            <Link href={"/"}>
              <Image className="w-full h-full" src={Snap} alt="SnapIcone" />
            </Link>
          </span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
