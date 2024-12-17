"use client";
import { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Koulen } from "next/font/google";
import MyMenu from "./my-menu";
import { usePathname } from "next/navigation";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const socialMedia = [
    { image: "/assets/images/facebook.png", href: "#" },
    { image: "/assets/images/telegram.png", href: "#" },
    { image: "/assets/images/youtube.png", href: "#" },
  ];

  return (
    <header>
      <nav className="bg-transparent px-5 lg:px-10 py-2.5 dark:bg-gray-800">
        <div className="grid grid-cols-12 items-center max-w-screen-2xl mx-auto gap-4">
          {/* Search */}
          <div className="hidden md:col-span-4 md:block">
            <form className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gold"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm text-primary border border-gray-300 bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Search ..."
                  required
                />
                <button
                  type="submit"
                  className="absolute end-1.5 bottom-[4px] bg-color hover:bg-color text-white font-medium text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Logo */}
          <div className="hidden col-span-4 md:flex justify-center">
            <Image
              src="/assets/images/logo.png"
              width={100}
              height={100}
              alt="Logo"
            />
          </div>

          {/* Contact & Socials */}
          <div className="hidden md:col-span-4 md:flex justify-end items-center space-x-2">
            <div className="hidden lg:flex items-center bg-color2 px-4 py-2 rounded-full">
              <span className="mr-2">
                <PhoneCall className="w-4 h-4" />
              </span>
              <span>*** *** ***</span>
            </div>
            {socialMedia.map(({ image, href }, idx) => (
              <a key={idx} href={href}>
                <Image
                  src={image}
                  alt="Social Icon"
                  width={30}
                  height={30}
                  className="text-white"
                />
              </a>
            ))}
            <div className="lg:hidden flex">
              <MyMenu />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex justify-between items-center">
          <Image
            src="/assets/images/logo.png"
            width={70}
            height={70}
            alt="Logo"
          />
          <div className="flex ">
            {socialMedia.map(({ image, href }, idx) => (
              <a key={idx} href={href}>
                <Image
                  src={image}
                  alt="Social Icon"
                  width={35}
                  height={35}
                  className="text-white mr-2"
                />
              </a>
            ))}
            <MyMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="hidden bg-color-bold p-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-500"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="hidden  lg:flex justify-center  bg-color-bold px-5 xl:px-16 transition-all duration-300 ease-in-out">
        <ul
          className={`flex  items-center text-[10px] md:text-sm xl:text-base p-4 space-x-5 text-start ${koulen.className}`}
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
      </div>
    </header>
  );
};

export default Navbar;
