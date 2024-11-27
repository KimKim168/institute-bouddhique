"use client";
import {
  CalendarDaysIcon,
  FacebookIcon,
  PhoneCall,
  Send,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 5;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 3000); // 3 seconds interval for auto-slide

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const imageUrls = [
    "/assets/images/slide2.webp",
    "/assets/images/slide3.webp",
    "/assets/images/slide4.webp",
  ];

  return (
    <>
      {" "}
      {/* Slide */}
      <div className="max-w-screen-2xl mx-auto">
        <Carousel className="w-full" selectedIndex={currentIndex}>
          <CarouselContent>
            {imageUrls.map((src, index) => (
              <CarouselItem key={index}>
                <Image
                  src={src}
                  width={3000}
                  height={3000}
                  className="w-full h-[600px] aspect-video object-cover"
                  alt={`Image ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
        </Carousel>
      </div>
      {/*End Slide */}
      {/*Start */}
      <section className="max-w-screen-2xl mx-auto px-10 my-20">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-9">
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <h1 className="text-xl my-5 md:text-xl xl:text-2xl font-bold text-color leading-tight">
              H1 Heading
            </h1>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <h2 className="text-xl my-5 md:text-xl xl:text-2xl font-bold text-color leading-tight">
              H2 Heading
            </h2>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <h3 className="text-xl my-5 md:text-xl xl:text-2xl font-bold text-color leading-tight">
              H3 Heading
            </h3>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <h4 className="text-xl my-5 md:text-xl xl:text-2xl font-bold text-color leading-tight">
              H4 Heading
            </h4>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <h5 className="text-xl my-5 md:text-xl xl:text-2xl font-bold text-color leading-tight">
              H5 Heading
            </h5>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
            <h6 className="text-xl my-5 md:text-xl xl:text-2xl font-bold text-color leading-tight">
              H6 Heading
            </h6>
            <p>
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi. Proin massa tortor,
              ornare sit amet commodo et, eleifend vel odio. Integer porta orci
              ornare metus egestas.
            </p>
          </div>
          <div className="col-span-3">
            <div id="categories-2" className="bg-white p-4">
              <h5 className="text-sm md:text-lg xl:text-xl font-bold text-color leading-tight">
                Categories
              </h5>
              <ul className="list-disc pl-4">
                <li>
                  <a href="#">Mantras</a>
                </li>
                <li className="">
                  <a href="#">Meditation</a>
                </li>
                <li className="">
                  <a href="#">News</a>
                </li>
                <li className="3">
                  <a href="#">Spiritual</a>
                </li>
                <li className="">
                  <a href="#">Theories</a>
                </li>
                <li className="">
                  <a href="#">Yoga</a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 mt-10">
              <h5 className="text-sm md:text-lg xl:text-xl font-bold text-color leading-tight">
                Most Popular
              </h5>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-5 mt-3">
                <div className="col-span-4">
                  <Image
                    src="/assets/images/book2.jpg"
                    width={400}
                    height={400}
                    alt="image"
                    className="aspect-square object-cover h-[150px]"
                  ></Image>
                </div>
                <div className="col-span-3 ">
                  <a className="text-xs my-5  xl:text-sm font-bold text-color leading-tight">
                    Understand the Concepts With Orthodox Interpretation.
                  </a>
                  <div className="flex items-center mt-2">
                    <CalendarDaysIcon className="mr-2"></CalendarDaysIcon>
                    <p>22 Jul 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End  */}
    </>
  );
}
