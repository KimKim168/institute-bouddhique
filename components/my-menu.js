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
import { PhoneCallIcon, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { Koulen } from "next/font/google";
import { BASE_LOGIN_URL } from "@/env";

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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
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
                      ? "underline text-red-600 "
                      : "text-black hover:underline"
                  }`}
                >
                  អំពីវិទ្យាស្ថាន
                </a>
              </li>
            </ul>
          </SheetHeader>
          <div className="flex flex-col min-h-[55%]">
            {/* Your main content goes here */}
            <div className="flex-grow">{/* Other content */}</div>

            {/* Footer */}
            <SheetFooter className="py-4 border-t border-gray-200">
              <a href={BASE_LOGIN_URL} className="flex justify-start items-center space-x-1">
                <User/>
              </a>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MyMenu;
