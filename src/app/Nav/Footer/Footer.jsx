import { Card, CardContent } from '@/components/ui/card';
import Mootor from "../../../../public/Footer/FastDelivery.webp"
import Support from "../../../../public/Footer/Support.webp"
import warranty from "../../../../public/Footer/Warranty.webp"

import Image from 'next/image';
import React from 'react';

function Footer(props) {
    return (
        <footer className='w-screen h-[90vh] flex justify-start items-center flex-col mt-20 relative z-10'>
                <div className='w-[80%] h-auto flex-col flex justify-center items-center gap-15 '>
                    <span className="w-[97%] h-[3px] flex justify-center items-center bg-gray-200"></span>
                    <Card className="w-full h-[150px] flex justify-center items-center !flex-row">
                        <CardContent className='w-[30%] h-full  flex justify-center items-center'>
                            <div className='text-end w-[80%] h-full pr-2'>
                                <h6 className='text-[20px] font-bold pb-2 '>
                                        ارسال در کوتاه‌ترین زمان
                                </h6>
                                <p className='text-[16px] text-gray-500'>
                                        با امکان ارسال اکسپرس، سفارش خود را در کمتر از ۳ ساعت تحویل بگیرید
                                </p>
                            </div>
                            <span className='w-[20%] h-full flex justify-center items-center'>
                            <figure className='w-[90%] h-[90%] bg-gray-100 flex justify-center items-center rounded-2xl'>
                                <Image src={Mootor }  alt='FastDeliver' className='w-[75%] h-[70%] '/>
                            </figure>
                            </span>
                        </CardContent>
                        <CardContent className='w-[30%] h-full  flex justify-center items-center'>
                            <div className='text-end w-[80%] h-full pr-2'>
                                <h6 className='text-[20px] font-bold pb-2 '>
                                       پشتیبانی در 7 روز هفته
                                </h6>
                                <p className='text-[16px] text-gray-500'>
                                       کارشناس‌های اسنپ‌شاپ ۷ روز هفته آماده پاسخ‌گویی به سوالات شما هستند
                                </p>
                            </div>
                            <span className='w-[20%] h-full flex justify-center items-center'>
                            <figure className='w-[90%] h-[90%] bg-gray-100 flex justify-center items-center rounded-2xl'>
                                <Image src={Support }  alt='FastDeliver' className='w-[75%] h-[70%] '/>
                            </figure>
                            </span>
                        </CardContent>
                        <CardContent className='w-[30%] h-full  flex justify-center items-center'>
                            <div className='text-end w-[80%] h-full pr-2'>
                                <h6 className='text-[20px] font-bold pb-2 '>
                                       بازگشت کالا تا 7 روز
                                </h6>
                                <p className='text-[16px] text-gray-500'>
                                       در صورت وجود مشکل در سفارش، می‌توانید تا ۷ روز آن را مرجوع کنید
                                </p>
                            </div>
                            <span className='w-[20%] h-full flex justify-center items-center'>
                            <figure className='w-[90%] h-[90%] bg-gray-100 flex justify-center items-center rounded-2xl'>
                                <Image src={warranty }  alt='FastDeliver' className='w-[75%] h-[70%] '/>
                            </figure>
                            </span>
                        </CardContent>
                    </Card>
                </div>
                <div className='w-full h-[80%] absolute top-40 right-0 -z-10  bg-gray-200 pt-20 flex justify-start items-center flex-col'>
                    <div className='flex justify-center items-center border-2 w-[80%] h-[40%]'>
                        <ul className='flex-col flex justify-start items-end w-[20%] h-full gap-3'>
                            <p className='text-[20px] font-bold text-black'>
                               تماس با ما
                            </p>
                            <li  className='text-[16px] text-gray-500 text-end'>
                               هر روز از ۹ صبح تا ۱۲ بامداد پاسخگو شما هستیم
                            </li>
                            <li  className='text-[20px] font-bold text-[var(--SnapColor)]'>
                              راهنمایی و پشتیبانی
                            </li>
                            <li  className='text-[16px] text-gray-500 '>
                              Arminhsnzadeh@gmail.com  : آدرس ایمیل
                            </li>
                        </ul>
                        <ul className='flex-col flex justify-start items-end w-[20%] h-full gap-3'>
                            <p className='text-[20px] font-bold text-black'>
                              راهنمای خرید از اسنپ شاپ
                            </p>
                            <li  className='text-[16px] text-gray-500'>
                               ثبت سفارش
                            </li>
                            <li  className='text-[16px] text-gray-500'>
                             رویه های ارسال سفارش
                            </li>
                        </ul>
                           <ul className='flex-col flex justify-start items-end w-[20%] h-full gap-3'>
                            <p className='text-[20px] font-bold text-black'>
                               خدمات مشتری
                            </p>
                            <li  className='text-[16px] text-gray-500'>
                               پرسش های متداول
                            </li>
                            <li  className='text-[16px] text-gray-500'>
                              روش‌های مرجوعی کالا در اسنپ شاپ
                            </li>
                            <li  className='text-[16px] text-gray-500'>
                            قوانین و شرایط استفاده
                            </li>
                        </ul>
                        <ul className='flex-col flex justify-start items-end w-[20%] h-full gap-3'>
                            <p className='text-[20px] font-bold text-black'>
                                با اسنپ شاپ
                            </p>
                            <li  className='text-[16px] text-gray-500'>
                                در اسنپ شاپ فروشنده شوید
                            </li>
                            <li  className='text-[16px] text-gray-500'>
                               تماس با اسنپ ‌شاپ
                            </li>
                            <li  className='text-[16px] text-gray-500'>
                              درباره اسنپ شاپ
                            </li>
                            <li  className='text-[16px] text-gray-500'>
                            فرصت‌های شغلی
                            </li>
                        </ul>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;