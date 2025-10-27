"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Header from "./Nav/Header/Header";
import HomePage from "./Page/HomePage/HomePage";
import Footer from "./Nav/Footer/Footer";

const Apiside = createContext();
export const useApi = () => useContext(Apiside);

export default function Home() {
  const [Api, setApi] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // 👇 محاسبه قیمت نهایی برای هر محصول
        const updatedProducts = data.products.map((product) => {
          const finalPrice =
            product.price - (product.price * product.discountPercentage) / 100;
          return { ...product, finalPrice: finalPrice.toFixed(2) };
        });

        setApi(updatedProducts);
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);


  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => {
      if(res.ok) return res.json()
        throw new Error(err)
    })
    .then(data => {
      setCategories(data)
    })
    .catch((err)=>console.log(err))
  },[])
  console.log(Categories);
  
  
  

  return (
    <Apiside.Provider value={{ Api, loading ,Categories }}>
      <main className="flex flex-col items-center justify-center w-full h-auto  overflow-hidden bg-gray-50">
        <div className="w-full container  flex flex-col items-center justify-center ">
          <Header />
          <HomePage />
          <Footer />
        </div>
      </main>
    </Apiside.Provider>
  );
}
