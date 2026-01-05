"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

export default function FilterSidebar({ products, onFilter }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sort, setSort] = useState("default");

  // استخراج دسته‌بندی‌ها
  useEffect(() => {
    const uniqueCategories = [
      "all",
      ...new Set(products.map((p) => p.category)),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  // اعمال فیلترها
  useEffect(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);

    onFilter(result);
  }, [products, category, priceRange, sort]);

  const resetFilters = () => {
    setCategory("all");
    setPriceRange([0, 2000]);
    setSort("default");
  };

  return (
    <div
      className="border-2 flex flex-col gap-10 p-5 rounded-xl"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">فیلترها</h3>
        <button
          onClick={resetFilters}
          className="text-pink-500 text-sm cursor-pointer"
          
        >
          حذف فیلترها
        </button>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price"]}>
        {/* CATEGORY */}
        <AccordionItem value="category">
          <AccordionTrigger className={'cursor-pointer'}>دسته‌بندی‌ها</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`cursor-pointer rounded px-2 py-1 text-sm
                    ${
                      category === cat
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* PRICE */}
        <AccordionItem value="price">
          <AccordionTrigger className={'cursor-pointer'}>قیمت</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <Slider
              value={priceRange}
              min={0}
              max={2000}
              step={10}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between text-xs text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>

            <div className="border-t pt-3 space-y-2">
              <button
                onClick={() => setSort("price-low")}
                className={`w-full text-right px-2 py-1 rounded
                  ${
                    sort === "price-low"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
              >
                ارزان‌ترین
              </button>

              <button
                onClick={() => setSort("price-high")}
                className={`w-full text-right px-2 py-1 rounded
                  ${
                    sort === "price-high"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
              >
                گران‌ترین
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
