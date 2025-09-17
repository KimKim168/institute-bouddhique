"use client";
import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import MyMenu from "./my-menu";

export default function MyLink() {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    setSocialMedia([
      {
        image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
        link: "https://facebook.com",
      },
      {
        image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg",
        link: "https://twitter.com",
      },
      {
        image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
        link: "https://instagram.com",
      },
    ]);
  }, []);

  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      {/* Social Media Links */}
      <div className="flex items-center space-x-3">
        {socialMedia.map(({ image, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={`social-${idx}`}
              width={30}
              height={30}
              className="rounded-full"
            />
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <MyMenu />
      </div>
    </div>
  );
}
