import { Card, CardContent } from "@/components/ui/card";
import Mootor from "../../../../public/Footer/FastDelivery.webp";
import Support from "../../../../public/Footer/Support.webp";
import warranty from "../../../../public/Footer/Warranty.webp";

import Image from "next/image";
import React from "react";

function Footer(props) {
  return (
    <footer className="w-screen h-[90vh] flex justify-start items-center flex-col mt-20 relative z-10">
      <div className="w-[80%] h-auto flex-col flex justify-center items-center gap-15 ">
        <span className="w-[97%] h-[3px] flex justify-center items-center bg-gray-200"></span>
        <Card className="w-full h-[150px] flex justify-center items-center !flex-row">
          <CardContent className="w-[30%] h-full  flex justify-center items-center">
            <div className="text-end w-[80%] h-full pr-2">
              <h6 className="text-[20px] font-bold pb-2 ">
                ارسال در کوتاه‌ترین زمان
              </h6>
              <p className="text-[16px] text-gray-500">
                با امکان ارسال اکسپرس، سفارش خود را در کمتر از ۳ ساعت تحویل
                بگیرید
              </p>
            </div>
            <span className="w-[20%] h-full flex justify-center items-center">
              <figure className="w-[90%] h-[90%] bg-gray-100 flex justify-center items-center rounded-2xl">
                <Image
                  src={Mootor}
                  alt="FastDeliver"
                  className="w-[75%] h-[70%] "
                />
              </figure>
            </span>
          </CardContent>
          <CardContent className="w-[30%] h-full  flex justify-center items-center">
            <div className="text-end w-[80%] h-full pr-2">
              <h6 className="text-[20px] font-bold pb-2 ">
                پشتیبانی در 7 روز هفته
              </h6>
              <p className="text-[16px] text-gray-500">
                کارشناس‌های اسنپ‌شاپ ۷ روز هفته آماده پاسخ‌گویی به سوالات شما
                هستند
              </p>
            </div>
            <span className="w-[20%] h-full flex justify-center items-center">
              <figure className="w-[90%] h-[90%] bg-gray-100 flex justify-center items-center rounded-2xl">
                <Image
                  src={Support}
                  alt="FastDeliver"
                  className="w-[75%] h-[70%] "
                />
              </figure>
            </span>
          </CardContent>
          <CardContent className="w-[30%] h-full  flex justify-center items-center">
            <div className="text-end w-[80%] h-full pr-2">
              <h6 className="text-[20px] font-bold pb-2 ">
                بازگشت کالا تا 7 روز
              </h6>
              <p className="text-[16px] text-gray-500">
                در صورت وجود مشکل در سفارش، می‌توانید تا ۷ روز آن را مرجوع کنید
              </p>
            </div>
            <span className="w-[20%] h-full flex justify-center items-center">
              <figure className="w-[90%] h-[90%] bg-gray-100 flex justify-center items-center rounded-2xl">
                <Image
                  src={warranty}
                  alt="FastDeliver"
                  className="w-[75%] h-[70%] "
                />
              </figure>
            </span>
          </CardContent>
        </Card>
      </div>
      <div className="w-full h-[80%] absolute top-40 right-0 -z-10  bg-gray-200 pt-20 flex justify-start items-center flex-col">
        <div className="flex justify-center items-center border-2 w-[80%] h-[40%]">
          <ul className="flex-col flex justify-start items-end w-[20%] h-full gap-3">
            <p className="text-[20px] font-bold text-black">تماس با ما</p>
            <li className="text-[16px] text-gray-500 text-end">
              هر روز از ۹ صبح تا ۱۲ بامداد پاسخگو شما هستیم
            </li>
            <li className="text-[20px] font-bold text-[var(--SnapColor)]">
              راهنمایی و پشتیبانی
            </li>
            <li className="text-[16px] text-gray-500 ">
              Arminhsnzadeh@gmail.com : آدرس ایمیل
            </li>
          </ul>
          <ul className="flex-col flex justify-start items-end w-[20%] h-full gap-3">
            <p className="text-[20px] font-bold text-black">
              راهنمای خرید از اسنپ شاپ
            </p>
            <li className="text-[16px] text-gray-500">ثبت سفارش</li>
            <li className="text-[16px] text-gray-500">رویه های ارسال سفارش</li>
          </ul>
          <ul className="flex-col flex justify-start items-end w-[20%] h-full gap-3">
            <p className="text-[20px] font-bold text-black">خدمات مشتری</p>
            <li className="text-[16px] text-gray-500">پرسش های متداول</li>
            <li className="text-[16px] text-gray-500">
              روش‌های مرجوعی کالا در اسنپ شاپ
            </li>
            <li className="text-[16px] text-gray-500">
              قوانین و شرایط استفاده
            </li>
          </ul>
          <ul className="flex-col flex justify-start items-end w-[20%] h-full gap-3">
            <p className="text-[20px] font-bold text-black">با اسنپ شاپ</p>
            <li className="text-[16px] text-gray-500">
              در اسنپ شاپ فروشنده شوید
            </li>
            <li className="text-[16px] text-gray-500">تماس با اسنپ ‌شاپ</li>
            <li className="text-[16px] text-gray-500">درباره اسنپ شاپ</li>
            <li className="text-[16px] text-gray-500">فرصت‌های شغلی</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[50%]  mt-50">
        <div className="w-[83%] h-[85%] flex justify-end gap-5 items-end flex-col">
          <h6 className="text-2xl  ">اسنپ شاپ | فروشگاه اینترنتی اسنپ</h6>
          <p className="text-end w-[80%] pb-5 text-gray-500">
            اسنپ شاپ یک فروشگاه اینترنتی است که در سال 1399 به عنوان یک پلتفرم
            تجارت الکترونیک فعالیت خود را آغاز کرد. این فروشگاه علاوه‌بر ارائه
            خدمات به خریداران با روش‌های ارسال سریع وتحویل فوری، شرایطی را برای
            فروشندگان نیز فراهم کرده است تا بتوانند محصولات خود را به فروش
            برسانند. فروشندگان می‌توانند با مراجعه به بخش در اسنپ شاپ فروشنده
            شوید شرایط را مطالعه کرده و مراحل ساخت حساب کاربری تا فروش محصول را
            طی کنند. در بخش‌های مختلف، توضیحات کاملی ارائه شده‌اند که از
            مهم‌ترین آن‌ها می‌توان به موارد زیر اشاره کرد
          </p>
        </div>
        <div className="w-full h-[15%] bg-gray-300 flex justify-center items-center">
          <div className="w-[83%] h-full flex justify-center items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <ul>
                <div className="flex justify-center items-center gap-3 w-full h-auto ">
                  <a
                    href={
                      "https://www.linkedin.com/in/armin-hasanzadeh-687554333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    }
                    className="flex gap-2 justify-center items-center text-[var(--FontTextColor)]"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z"
                        fill="#ABB2BF"
                      />
                    </svg>
                  </a>

                  <a href={"https://github.com/ArminHasanzadeh"}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z"
                        fill="#ABB2BF"
                      />
                    </svg>
                  </a>
                  <a
                    href={"https://www.instagram.com/armin__hasnzadeh"}
                    className="flex gap-2 justify-center items-center text-[var(--FontTextColor)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 2476 2476"
                      id="Instagram"
                    >
                      <path
                        d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"
                        fill="#abb2bf"
                        class="color000000 svgShape"
                      />
                    </svg>
                  </a>
                </div>
              </ul>
            </div>
            <div className="w-[50%] h-full font-bold text-[20px] flex justify-center items-center">
              <p>
                کلیه حقوق استفاده از محتوای این وب سایت نزد اسنپ شاپ محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
