"use client";
import { CalendarDaysIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
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

  const imageUrls = ["/assets/images/slide2.webp"];

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Slide */}
      <div className="relative w-full">
        <div className="w-full h-[300px] md:h-[600px] overflow-hidden">
          <Image
            src={imageUrls[0]}
            alt="Slide Image"
            width={3000}
            height={3000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <section className="px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main content */}
          <div className="col-span-1">
            <h1 className="text-2xl font-bold mb-5">Heading</h1>
            <p className="mb-4">
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi.
            </p>
            <p className="mb-4">
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi.
            </p>
            <h2 className="text-xl font-semibold my-4">Subheading</h2>
            <p className="mb-4">
              Nullam eget tincidunt dolor, at accumsan odio. Morbi eget ligula
              gravida, pulvinar magna eget, eleifend mi.
            </p>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <div className="bg-white p-4">
              <h5 className="text-lg font-bold mb-3">Most Popular</h5>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <div className="w-1/3">
                    <Image
                      src="/assets/images/book2.jpg"
                      alt="Book"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <a className="text-sm font-bold">
                      Understand the Concepts With Orthodox Interpretation.
                    </a>
                    <div className="flex items-center mt-2">
                      <CalendarDaysIcon className="mr-2" />
                      <p>22 Jul 2019</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3">
                    <Image
                      src="/assets/images/book2.jpg"
                      alt="Book"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <a className="text-sm font-bold">
                      Understand the Concepts With Orthodox Interpretation.
                    </a>
                    <div className="flex items-center mt-2">
                      <CalendarDaysIcon className="mr-2" />
                      <p>22 Jul 2019</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/3">
                    <Image
                      src="/assets/images/book2.jpg"
                      alt="Book"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <a className="text-sm font-bold">
                      Understand the Concepts With Orthodox Interpretation.
                    </a>
                    <div className="flex items-center mt-2">
                      <CalendarDaysIcon className="mr-2" />
                      <p>22 Jul 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
