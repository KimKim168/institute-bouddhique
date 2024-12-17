"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

function MyFooter() {
  const pathname = usePathname();

  return (
    <>
      {" "}
      <footer className="bg-color-bold  p-10">
        <ul
          className={`flex justify-center text-[10px] md:text-sm xl:text-base space-x-4 mt-4  lg:space-x-8 lg:mt-0 ${koulen.className}`}
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
        </ul>
        <div className="text-white flex justify-center text-[10px] md:text-sm mt-5">
          © 2024. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default MyFooter;
