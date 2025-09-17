import React from "react";
import Image from "next/image";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

// Sample static data
const data = [
  {
    id: 1,
    name: "អគារបណ្ណាល័យកណ្ដាល",
    short_description: "អាគារដែលផ្តល់សេវាបណ្ណាល័យសម្រាប់សិស្ស និងនិស្សិត។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 2,
    name: "បណ្ណាល័យឌីជីថល",
    short_description: "បណ្ណាល័យអនឡាញដែលមានសៀវភៅអេឡិចត្រូនិច និងឯកសារជាច្រើន។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 3,
    name: "បន្ទប់អាន",
    short_description: "បន្ទប់អានមានផាសុខភាព សម្រាប់ការសិក្សា និងស្រាវជ្រាវ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 4,
    name: "បន្ទប់សិក្សាជាក្រុម",
    short_description: "កន្លែងសិក្សាសម្រាប់ក្រុមដែលត្រូវការចែករំលែកគំនិត។",
    image: "https://picsum.photos/600/400",
  },
];

export default async function Page() {

  return (
    <div className={`max-w-screen-2xl mx-auto px-2 xl:px-16 mt-5 md:mt-12`}>
      <h1
        className={`text-center text-lg md:text-2xl text-red-900 ${koulen.className}`}
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
            <h2 className="mb-2 text-xl font-extrabold text-gray-900 lg:text-3xl dark:text-white">
              {item.name}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 lg:text-lg">
              {item.short_description}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={item.image}
              width={500}
              height={500}
              alt={item.name}
              className="w-full aspect-video object-cover rounded-lg shadow-md py-1 pr-1 border-l-[#921b1f] bg-white border-l-[10px] rounded-l-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
