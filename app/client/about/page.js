"use client";

import Image from "next/image";

import { Koulen } from "next/font/google";
import MyAboutSlider from "@/components/my-about-slide";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export default function page() {
  return (
    <>
      {" "}
      {/* Slide */}
      <MyAboutSlider />
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
              <h1
                className={`text-3xl md:text-4xl xl:text-5xl text-red-900 leading-tight ${koulen.className}`}
              >
                អំពីវិទ្យាស្ថាន
              </h1>
            </div>
            <div className="space-y-4">
              {/* Address */}
              <div className="text-blue flex items-start gap-2">
                <Image
                  src="/assets/images/location.png"
                  width={24}
                  height={24}
                  alt="Location Icon"
                  className="min-w-6"
                />
                <p className="text-sm">
                  HW4P+78C, Preah Sisowath Quay, Phnom Penh 12301
                </p>
              </div>
              {/* Phone */}
              <div className="text-blue flex items-center gap-2">
                <Image
                  src="/assets/images/telephone.png"
                  width={24}
                  height={24}
                  alt="Phone Icon"
                  className="min-w-6"
                />
                <p className="text-sm">016 535 683</p>
              </div>
              {/* Email */}
            </div>
            <div className="mb-6 mt-4">
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
    </>
  );
}
