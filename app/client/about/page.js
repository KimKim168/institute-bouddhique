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
    "/assets/images/slide1.webp",
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
      <section className="bg-white px-10 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <!-- Text Content --> */}
          <div>
            <div className="mb-6">
              {/* <h6 className="text-gray-600 uppercase text-xs md:text-sm xl:text-lg text-color1">
                Vision
              </h6> */}
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-color leading-tight">
                Our Core Vision and Mission
              </h1>
            </div>
            <div className="mb-6">
              <h6 className="mb-2 text-xs md:text-sm xl:text-lg text-color1">
                Vision
              </h6>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper.
              </p>
            </div>
            <div>
              <h6 className="  mb-2 text-xs md:text-sm xl:text-lg text-color1">
                Mission
              </h6>
              <p className="text-gray-700">
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper. Suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor.
              </p>
            </div>
          </div>

          {/* <!-- Image Content --> */}
          <div className="flex justify-center ">
            <Image
              src="/assets/images/book3.jpg"
              alt="Core Vision and Mission"
              width={3000}
              height={3000}
              className="w-full rounded-lg shadow-lg border-l-[#921b1f] bg-white border-l-[10px] rounded-l-lg py-1 pr-1"
            />
          </div>
        </div>
      </section>
      {/*End  */}
      {/*Start  */}
      <section className="relative max-w-screen-2xl mx-auto w-full py-16 px-10">
        <div className="container ">
          <div className="text-center mb-12">
            {/* <span className="block text-gray-400 uppercase text-sm">Team</span> */}
            <h1 className="text-4xl font-bold text-color">
              Our Leadership <br /> Team
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg text-center">
              <Image
                src="/assets/images/team1.jpg"
                alt="Tyler Lee"
                width={2000}
                height={2000}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h4 className="text-color text-lg font-semibold">Tyler Lee</h4>
                <p className="text-color3">Leadership Council</p>
              </div>
            </div>
            {/* Team Member 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg text-center">
              <Image
                src="/assets/images/team1.jpg"
                alt="Tyler Lee"
                width={2000}
                height={2000}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h4 className="text-color text-lg font-semibold">Tyler Lee</h4>
                <p className="text-color3">Leadership Council</p>
              </div>
            </div>
            {/* Team Member 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg text-center">
              <Image
                src="/assets/images/team1.jpg"
                alt="Tyler Lee"
                width={2000}
                height={2000}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h4 className="text-color text-lg font-semibold">Tyler Lee</h4>
                <p className="text-color3">Leadership Council</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/leadership"
              className="bg-color text-white py-4 px-6 rounded-lg hover-bg-color transition"
            >
              View All Team
            </Link>
          </div>
        </div>
      </section>
      {/*End  */}
    </>
  );
}
