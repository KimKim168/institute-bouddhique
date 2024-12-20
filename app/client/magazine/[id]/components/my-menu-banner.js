"use client";
import React from "react";
import { Koulen } from "next/font/google";
import { usePathname } from "next/navigation";
import Image from "next/image";
const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

function MyMenuBanner() {
  const pathname = usePathname();
  return (
    <>
      <div className="sticky top-0 mt-10">
        <ul
          className={`space-y-2 text-sm p-4 bg-gray-900 rounded-md ${koulen.className}`}
        >
          <li>
            <a
              href="/"
              className={`py-2 rounded ${
                pathname === "/"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              ទំព័រដើម
            </a>
          </li>
          <li>
            <a
              href="/client/news"
              className={`py-2 rounded ${
                pathname === "/client/news"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              ព័ត៌មានថ្មីៗ
            </a>
          </li>

          <li>
            <a
              href="/client/khmer-legends"
              className={`py-2 rounded ${
                pathname === "/client/khmer-legends"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              ប្រជុំរឿងព្រេងខ្មែរ
            </a>
          </li>
          <li>
            <a
              href="/client/libraries"
              className={`py-2 rounded ${
                pathname === "/client/libraries"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              បណ្ណាល័យ
            </a>
          </li>
          <li>
            <a
              href="/client/magazine"
              className={`py-2 rounded ${
                pathname === "/client/magazine"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              ទស្សនាវដ្ដីកម្ពុជសុរិយា
            </a>
          </li>
          <li>
            <a
              href="/client/buddhist"
              className={`py-2 rounded ${
                pathname === "/client/buddhist"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              នាទីព្រះពុទ្ធសាសនា
            </a>
          </li>
          <li>
            <a
              href="/client/about"
              className={`py-2 rounded ${
                pathname === "/client/about"
                  ? "underline text-white "
                  : "text-white hover:underline"
              }`}
            >
              អំពីវិទ្យាស្ថាន
            </a>
          </li>
        </ul>
        <Image
          src="/assets/images/banner.jpg"
          width={1000}
          height={1000}
          alt="banner"
          className="w-full h-[70vh] aspect-[9/16] object-cover rounded-md mt-2"
        />
      </div>
    </>
  );
}

export default MyMenuBanner;
