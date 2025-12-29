import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Snap from "../../../../public/Header/text-logo.webp";

import Image from "next/image";
import React from "react";
import Link from "next/link";

function Header(props) {
  return (
    <header className="w-full h-[60px] flex justify-center items-center p-2 bg-gray-100  shadow-sm  fixed top-0 z-99">
      <ul className="w-[70%] h-full flex justify-center items-center">
        <li className="w-[10%] h-full flex justify-start items-center ">
          <Button
            variant="outline"
            className={
              "w-[40px] h-[40px]  rounded-sm border-1 border-black flex justify-center items-center"
            }
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
          </Button>
        </li>

        <li className="w-[30%] h-full flex justify-start items-center">
          <Button
            variant="outline"
            className={
              "border-2 border-black p-5 flex justify-center items-center"
            }
          >
            <span>ورود و عضویت</span>
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
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
            </span>
          </Button>
        </li>
        <li className="w-[40%] h-full flex justify-end items-center gap-2">
          <span className="w-[15%] h-[90%]">
          
              <Image className="w-full h-full" src={Snap} alt="SnapIcone" />
            
          </span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
