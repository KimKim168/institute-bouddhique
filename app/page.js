"use client";
import {
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

export default function Home() {
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
    "/assets/images/slide0.webp",
    "/assets/images/slide1.webp",
    "/assets/images/slide2.webp",
    "/assets/images/slide3.webp",
    "/assets/images/slide4.webp",
  ];
  return (
    <>
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
      {/* Card */}
      <section className="mt-20">
        <div>
          <p className="text-center mb-10 text-xl  md:text-3xl xl:text-4xl font-bold text-red-600">
            TItle
          </p>
          <Card className="border-none grid grid-cols-3 px-10">
            {/* 1 */}
            <CardContent>
              <Link href="/client/about">
                <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <Image
                      className="rounded-xl w-full p-2"
                      src="/assets/images/slide3.webp"
                      width={3000}
                      height={3000}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 line-clamp-1 text-xl font-bold tracking-tight text-color  hover:text-red-500">
                        Icon Ashram A spiritual hermitage spiritual hermitage
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Icon Ashram A spiritual hermitage in green valleys of the
                      mountains where you can see millions of stars at night.
                    </p>
                  </div>
                </div>
              </Link>
            </CardContent>

            {/* 3 */}
            <CardContent>
              <div className="hover:scale-105  transition-transform duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-xl w-full p-2"
                    src="/assets/images/slide2.webp"
                    width={3000}
                    height={3000}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 line-clamp-1 text-xl font-bold tracking-tight text-color  hover:text-red-500">
                      Icon Ashram A spiritual hermitage spiritual hermitage
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Icon Ashram A spiritual hermitage in green valleys of the
                    mountains where you can see millions of stars at night.
                  </p>
                </div>
              </div>
            </CardContent>
            {/* 4 */}
            <CardContent>
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-xl w-full p-2"
                    src="/assets/images/slide1.webp"
                    width={3000}
                    height={3000}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 line-clamp-1 text-xl font-bold tracking-tight text-color  hover:text-red-500">
                      Icon Ashram A spiritual hermitage spiritual hermitage
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Icon Ashram A spiritual hermitage in green valleys of the
                    mountains where you can see millions of stars at night.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/*End Card */}

      {/* Start */}
      <section class="my-20">
        <p className="text-center text-xl mb-10  md:text-3xl xl:text-4xl font-bold text-red-600">
          TItle
        </p>
        <div class="grid max-w-screen-2xl px-10 py-5 mx-auto lg:gap-8 xl:gap-10 lg:py-8 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-6">
            <h1 class="text-color max-w-2xl mb-4 text-xl md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-none  dark:text-white">
              Payments tool for software companies
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex ">
            <Image
              src="/assets/images/slide7.webp"
              alt="mockup"
              width="2000"
              height="2000"
              className="w-full aspect-video h-[300px] rounded-lg shadow-lg object-cover border-l-[#921b1f] bg-white border-l-[10px] rounded-l-lg py-1 pr-1"
            ></Image>
          </div>
        </div>
        <div class="grid max-w-screen-2xl px-10 py-5 mx-auto lg:gap-8 xl:gap-10 lg:py-8 lg:grid-cols-12">
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex ">
            <Image
              src="/assets/images/slide7.webp"
              alt="mockup"
              width="2000"
              height="2000"
              className="w-full aspect-video h-[300px] object-cover rounded-lg shadow-lg border-r-[#921b1f] bg-white border-r-[10px] rounded-r-lg py-1 pl-1"
            ></Image>
          </div>
          <div class="mr-auto place-self-center lg:col-span-6 ml-auto">
            <h1 class="text-color max-w-2xl mb-4 text-xl md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-none  dark:text-white">
              Payments tool for software companies
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
          </div>
        </div>
        <div class="grid max-w-screen-2xl px-10 py-5 mx-auto lg:gap-8 xl:gap-10 lg:py-8 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-6">
            <h1 class="text-color max-w-2xl mb-4 text-xl md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-none  dark:text-white">
              Payments tool for software companies
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex ">
            <Image
              src="/assets/images/slide7.webp"
              alt="mockup"
              width="2000"
              height="2000"
              className="w-full aspect-video h-[300px] rounded-lg shadow-lg object-cover border-l-[#921b1f] bg-white border-l-[10px] rounded-l-lg py-1 pr-1"
            ></Image>
          </div>
        </div>
      </section>

      {/* End */}
    </>
  );
}
