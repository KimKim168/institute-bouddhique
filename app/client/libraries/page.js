import React from "react";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { BASE_API_URL, IMAGE_PAGE_URL } from "@/env";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

export default async function Page(props) {
  const searchParams = await props.searchParams || {};
  const search = searchParams.search || "";

  // Fetch data from the API
  const response = await fetch(
    `${BASE_API_URL}/pages?&position=library&search=${search}`
  );
  if (!response.ok) {
    console.error("Failed to fetch data");
    return <div>Error loading data</div>;
  }
  const result = await response.json();
  const data = result.data;

  return (
    <div className={`max-w-screen-2xl mx-auto px-2 xl:px-16 mt-5 md:mt-12 `}>
      <h1
        className={`text-center text-lg md:text-2xl  text-red-900 ${koulen.className}`}
      >
        បណ្ណាល័យ
      </h1>
      {data?.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col sm:flex-row ${
            index % 2 === 0 ? "sm:flex-row-reverse" : ""
          } items-center justify-between gap-5 lg:gap-10 mt-5 md:mt-10`}
        >
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg">
              {item.short_description}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={`${IMAGE_PAGE_URL}${item.image}`}
              width={500}
              height={500}
              alt="Descriptive Alt Text"
              className="w-full aspect-video object-cover rounded-lg shadow-md py-1 pr-1 border-l-[#921b1f] bg-white border-l-[10px] rounded-l-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
