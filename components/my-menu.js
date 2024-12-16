"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

function MyMenu() {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/images/menu.png"
            width="20"
            height="20"
            alt="menu"
            aria-label="Open menu" // Optional for accessibility
            className="bg-white w-9 p-[5px] rounded-md"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-center">Menu</SheetTitle>
            <hr></hr>
            <ul className={`text-start space-y-3 ${koulen.className}`}>
              <li>
                <a
                  href="/"
                  className={`py-2 rounded ${
                    pathname === "/"
                      ? "underline underline-offset-4 text-red-500"
                      : "text-black "
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
                      ? "underline underline-offset-4 text-red-500 "
                      : "text-black"
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
                      ? "underline underline-offset-4 text-red-500"
                      : "text-black"
                  }`}
                >
                  អំពីវិទ្យាស្ថាន
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`py-2 rounded ${
                    pathname === "/contact"
                      ? "underline underline-offset-4 text-red-500"
                      : "text-black"
                  }`}
                >
                  ប្រជុំរឿងព្រេងខ្មែរ
                </a>
              </li>
              <li>
                <a
                  href="/video-gallery"
                  className={`py-2 rounded ${
                    pathname === "/video-gallery"
                      ? "underline underline-offset-4 text-red-500"
                      : "text-black"
                  }`}
                >
                  បណ្ណាល័យ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`py-2 rounded ${
                    pathname === "/about"
                      ? "underline underline-offset-4 text-red-500"
                      : "text-black"
                  }`}
                >
                  ទស្សនាវដ្ដីកម្ពុជសុរិយា
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`py-2 rounded ${
                    pathname === "/about"
                      ? "underline underline-offset-4 text-red-500"
                      : "text-black"
                  }`}
                >
                  នាទីព្រះពុទ្ធសាសនា
                </a>
              </li>
            </ul>
          </SheetHeader>
          <div className="flex flex-col min-h-[55%]">
            {/* Your main content goes here */}
            <div className="flex-grow">{/* Other content */}</div>

            {/* Footer */}
            <SheetFooter className="py-4 border-t border-gray-200">
              <div className="flex justify-start items-center space-x-1">
                <PhoneCallIcon className="mr-1 md:mr-2 w-5 md:w-5" />
                <p className="text-[16px]">*** *** ***</p>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MyMenu;
