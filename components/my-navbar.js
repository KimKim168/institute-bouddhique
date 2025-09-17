"use client";
import { useState } from "react";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { usePathname } from "next/navigation";
import MyLink from "./my-link";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav className="py-2 bg-transparent dark:bg-gray-800">
        <div className="flex items-center justify-between max-w-screen-2xl px-2 xl:px-[100px] mx-auto gap-1">
          {/* Logo */}
          <div className="justify-center hidden md:flex">
            <Image
              src="/assets/images/logo.png"
              width={100}
              height={100}
              alt="Logo"
              className="w-20 lg:w-24 md:w-20"
            />
          </div>
          <div className="justify-center flex-1 hidden transition-all duration-300 ease-in-out lg:flex">
            <ul
              className={`flex  items-center text-[10px] md:text-sm xl:text-lg p-4 space-x-3 lg:space-x-5 text-start ${koulen.className}`}
            >
              <li>
                <a
                  href="/"
                  className={`py-2 rounded ${
                    pathname === "/"
                      ? "underline text-black "
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
                      ? "underline text-black "
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
                      ? "underline text-black "
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
                      ? "underline text-black "
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
                      ? "underline text-black "
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
                      ? "underline text-black "
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
                      ? "underline text-black "
                      : "text-black hover:underline"
                  }`}
                >
                  អំពីវិទ្យាស្ថាន
                </a>
              </li>
            </ul>
          </div>
          {/* Contact & Socials */}
          <div className="items-center justify-end hidden space-x-2 md:flex">
          {/* <a href={BASE_LOGIN_URL}><User/></a> */}
            <MyLink />
          </div>
          
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center justify-between px-4 md:hidden">
          <Image
            src="/assets/images/logo.png"
            width={70}
            height={70}
            alt="Logo"
          />
          <div>
            <MyLink />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="hidden p-4 bg-color-bold">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-500"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
