"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Header from "./Nav/Header/Header";
import HomePage from "./Page/HomePage/HomePage";

const Apiside = createContext();

const useApi = () => useContext(Apiside);


export default function Home() {
  
  const [Api, setApi] = useState ([]);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setApi(data))
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <Apiside.Provider value={{ Api }}>
      <main className="flex flex-col items-center justify-start w-full min-h-screen overflow-hidden bg-gray-50">
        <div className=" w-full container mx-auto flex flex-col items-center justify-center p-4">
          <Header />
          <HomePage />
        </div>
      </main>
    </Apiside.Provider>
  );
}
export {useApi};
