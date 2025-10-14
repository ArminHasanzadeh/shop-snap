"use client";
import React, { useEffect, useRef, useState } from "react";

function SliderShopApi() {
  const [Api, setApi] = useState([]);
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setApi(data))
      .catch((err) => console.log(err));
  }, []);

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center mt-10 relative">
      {/* Slider Container */}
      <div className="relative w-full max-w-[1200px] flex items-center">
        {/* Prev Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          {/* SVG Arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="myslider flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 py-4"
        >
          {Api.slice(0, 10).map((val, i) => (
            <div
              key={i}
              className="flex-none w-[200px] border rounded-lg shadow-md p-2 bg-white flex flex-col items-center"
            >
              <figure className="w-full h-[200px] flex justify-center items-center mb-2">
                <img
                  className="object-contain h-full"
                  src={val.image}
                  alt={val.title}
                />
              </figure>
              <p className="text-sm font-medium text-center mb-1">{val.title}</p>
              <span className="text-red-500 font-bold">{val.price} $</span>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          {/* SVG Arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default SliderShopApi;
