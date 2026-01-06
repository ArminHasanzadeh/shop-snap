import { Card, CardContent } from "@/components/ui/card";
import Mootor from "../../../../public/Footer/FastDelivery.webp";
import Support from "../../../../public/Footer/Support.webp";
import warranty from "../../../../public/Footer/Warranty.webp";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="w-full  flex flex-col mt-10  relative z-10  bg-gray-200">
      {/* Services */}
      <div className="w-full flex justify-center px-4 ">
        <div className="w-full max-w-7xl flex flex-col items-center gap-6 ">
          <Card className="w-full ">
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
              {/* Item */}
              {[
                {
                  title: "ارسال در کوتاه‌ترین زمان",
                  desc: "با امکان ارسال اکسپرس، سفارش خود را در کمتر از ۳ ساعت تحویل بگیرید",
                  img: Mootor,
                },
                {
                  title: "پشتیبانی در 7 روز هفته",
                  desc: "کارشناس‌های اسنپ‌شاپ ۷ روز هفته آماده پاسخ‌گویی هستند",
                  img: Support,
                },
                {
                  title: "بازگشت کالا تا 7 روز",
                  desc: "در صورت وجود مشکل، تا ۷ روز امکان مرجوعی دارید",
                  img: warranty,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-1 text-end">
                    <h6 className="text-lg font-bold mb-2">{item.title}</h6>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Links */}
      <div className="w-full  mt-12 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-end">
          <ul className="space-y-3">
            <p className="font-bold text-lg">تماس با ما</p>
            <li className="text-sm text-gray-600">۹ صبح تا ۱۲ بامداد</li>
            <li className="font-bold text-[var(--SnapColor)]">پشتیبانی</li>
            <li className="text-sm text-gray-600">Arminhsnzadeh@gmail.com</li>
          </ul>

          <ul className="space-y-3">
            <p className="font-bold text-lg">راهنمای خرید</p>
            <li className="text-sm text-gray-600">ثبت سفارش</li>
            <li className="text-sm text-gray-600">رویه ارسال</li>
          </ul>

          <ul className="space-y-3">
            <p className="font-bold text-lg">خدمات مشتری</p>
            <li className="text-sm text-gray-600">پرسش‌های متداول</li>
            <li className="text-sm text-gray-600">مرجوعی کالا</li>
            <li className="text-sm text-gray-600">قوانین</li>
          </ul>

          <ul className="space-y-3">
            <p className="font-bold text-lg">با اسنپ شاپ</p>
            <li className="text-sm text-gray-600">فروشنده شوید</li>
            <li className="text-sm text-gray-600">درباره ما</li>
            <li className="text-sm text-gray-600">فرصت‌های شغلی</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 p-2 text-end flex-col gap-5 bg-gray-200">
        <h6 className="text-xl font-bold mb-4">
          اسنپ شاپ | فروشگاه اینترنتی اسنپ
        </h6>
        <p className="text-sm text-gray-500 leading-7">
          اسنپ شاپ یک فروشگاه اینترنتی است که در سال 1399 به عنوان یک پلتفرم
          تجارت الکترونیک فعالیت خود را آغاز کرد. این فروشگاه علاوه‌بر ارائه
          خدمات به خریداران با روش‌های ارسال سریع وتحویل فوری، شرایطی را برای
          فروشندگان نیز فراهم کرده است تا بتوانند محصولات خود را به فروش
          برسانند. فروشندگان می‌توانند با مراجعه به بخش در اسنپ شاپ فروشنده شوید
          شرایط را مطالعه کرده و مراحل ساخت حساب کاربری تا فروش محصول را طی
          کنند. در بخش‌های مختلف، توضیحات کاملی ارائه شده‌اند که از مهم‌ترین
          آن‌ها می‌توان به موارد زیر اشاره کرد:
        </p>
      </div>

      <div className="w-full bg-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center text-center md:text-end">
          <div className="flex gap-4">{/* social icons unchanged */}</div>
          <p className="text-sm font-bold">کلیه حقوق این وب‌سایت محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
