"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { BASE_API_URL, IMAGE_PAGE_URL } from "@/env";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

function MyHomePageButtom() {
  const [data, setData] = useState(null); // Initially set data to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const response = await fetch(
          `${BASE_API_URL}/pages/?&position=library`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); // Set the fetched data
      } catch (error) {
        setError(error.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Set loading to false once the request completes
      }
    };

    fetchLibrary();
  }, []);

  return (
    <div className={`max-w-screen-2xl mx-auto px-2 xl:px-16 mt-5 md:mt-12 `}>
      <h1
        className={`text-center mb-6 text-xl md:text-3xl  text-red-900 ${koulen.className}`}
      >
        បណ្ណាល័យ
      </h1>
      {data?.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col sm:flex-row ${
            index % 2 === 0 ? "sm:flex-row-reverse" : ""
          } items-center justify-between gap-5 lg:gap-10 mt-10`}
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

export default MyHomePageButtom;
