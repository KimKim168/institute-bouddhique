import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

function MyHero() {
  return (
    <div className="mt-8 md:mt-12">
      <p className="text-center mb-6 text-xl md:text-3xl xl:text-4xl font-semibold text-red-600">
        About
      </p>
      <Card className="border-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4 xl:px-20 gap-8">
        {/* Card 1 */}
        <CardContent className="bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <Link
            href="/client/about"
            className="block relative rounded-lg overflow-hidden group"
          >
            <Image
              className="rounded-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              src="/assets/images/slide3.webp"
              width={3000}
              height={3000}
              alt="Image 1"
            />
            <div className="py-4">
              <h5 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                Icon Ashram A spiritual hermitage
              </h5>
              <p className="text-sm font-light text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Icon Ashram A spiritual hermitage in green valleys of the
                mountains where you can see millions of stars at night.
              </p>
            </div>
          </Link>
        </CardContent>

        {/* Card 2 */}
        <CardContent className="bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <Link
            href="#"
            className="block relative rounded-lg overflow-hidden group"
          >
            <Image
              className="rounded-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              src="/assets/images/slide2.webp"
              width={3000}
              height={3000}
              alt="Image 2"
            />
            <div className="py-4">
              <h5 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                Icon Ashram A spiritual hermitage
              </h5>
              <p className="text-sm font-light text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Icon Ashram A spiritual hermitage in green valleys of the
                mountains where you can see millions of stars at night.
              </p>
            </div>
          </Link>
        </CardContent>

        {/* Card 3 */}
        <CardContent className="bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <Link
            href="#"
            className="block relative rounded-lg overflow-hidden group"
          >
            <Image
              className="rounded-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              src="/assets/images/slide1.webp"
              width={3000}
              height={3000}
              alt="Image 3"
            />
            <div className="py-4">
              <h5 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                Icon Ashram A spiritual hermitage
              </h5>
              <p className="text-sm font-light text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Icon Ashram A spiritual hermitage in green valleys of the
                mountains where you can see millions of stars at night.
              </p>
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default MyHero;
