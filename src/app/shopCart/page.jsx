"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Header from "../Nav/Header/Header";
import Footer from "../Nav/Footer/Footer";

export default function ShopCart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decrease = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const enrichedCart = cart.map((item) => {
    const apiItem = products.find((p) => p.id === item.id);
    const discount = apiItem?.discountPercentage || 0;
    const finalPrice = apiItem
      ? parseFloat(
          (apiItem.price - (apiItem.price * discount) / 100).toFixed(2)
        )
      : item.price;
    return {
      ...item,
      price: apiItem?.price || item.price,
      discountPercentage: discount,
      finalPrice,
      thumbnail: apiItem?.thumbnail || item.thumbnail,
      title: apiItem?.title || item.title,
    };
  });

  const totalPrice = enrichedCart.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  if(!enrichedCart) {
    return <>loading ...</>
  }

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex justify-center items-center mt-40 ">
        <div className="w-[85%]  flex flex-col ">
          <h1 className="text-2xl font-bold mb-6 flex justify-center items-center ">
            سبد خرید
          </h1>

          {enrichedCart.length === 0 ? (
            <div className="flex justify-center items-center flex-col mt-20 mb-20">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </span>

              <p className="text-muted-foreground mt-5 flex justify-center items-center text-xl ">
                سبد خرید شما خالی است
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-start w-full overflow-hidden">
              <Card className="rounded-2xl w-[20%] flex justify-center items-center">
                <CardHeader className={"w-full text-center"}>
                  <CardTitle>جمع کل</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center">
                  <span className="text-muted-foreground">
                    مبلغ قابل پرداخت
                  </span>
                  <span className="text-lg font-bold">
                    ${totalPrice?.toFixed(2)}
                  </span>
                </CardContent>
                <CardFooter className={"w-[200px]"}>
                  <Button className="w-full rounded-xl">
                    ادامه فرآیند خرید
                  </Button>
                </CardFooter>
              </Card>
              <div className="flex justify-center items-center w-[80%] gap-10  flex-col">
                {enrichedCart.map((item) => (
                  <Card
                    key={item.id}
                    className="rounded-2xl w-[85%] flex justify-center items-center "
                  >
                    <CardContent className="w-full flex gap-4 justify-center items-center">
                      <div className=" flex justify-start w-[80%] items-center">
                        <div className="flex items-center justify-between h-[200px] w-[25%] border-r-2 ">
                          <div className="flex items-center gap-2 border-2 p-3 rounded-xl ">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => decrease(item.id)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-6 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => increase(item.id)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              className={"w-[35px] h-[35px]"}
                              size="icon"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2
                                size={20}
                                className=" text-destructive "
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-center items-end w-[80%] flex-col">
                          <h2 className="font-semibold">{item.title}</h2>
                          <p className="text-sm text-muted-foreground mt-1 line-through">
                            ${item?.price?.toFixed(2)}
                          </p>

                          {item.discountPercentage > 0 && (
                            <span className="inline-block bg-[var(--SnapColor)] text-white px-2 py-1 rounded-md text-xs mt-1">
                              {item.discountPercentage}% تخفیف
                            </span>
                          )}

                          <p className="text-lg font-bold mt-1">
                            قیمت نهایی: ${item?.finalPrice?.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <figure className="w-[20%]">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </figure>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
