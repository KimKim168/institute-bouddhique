"use client";
import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import MyMenu from "./my-menu";

function MyLink() {
  const [socialMedia, setSocialMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/links");
        const result = await response.json();
        setSocialMedia(result.data);
      } catch (err) {
        console.error("Failed to fetch social media links:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return <div>Loading social media links...</div>;
  }

  if (error) {
    return (
      <div>Failed to load social media links. Please try again later.</div>
    );
  }

  return (
    <div className="flex justify-end items-center space-x-2">
      {/* Phone Section */}
      <div className="hidden lg:flex items-center bg-color2 px-4 py-2 rounded-full">
        <span className="mr-2">
          <PhoneCall className="w-4 h-4" />
        </span>
        <span>016 535 683</span> {/* Replace with a dynamic number if needed */}
      </div>

      {/* Social Media Links */}
      {socialMedia.map(({ image, link }, id) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            src={`http://127.0.0.1:8000/assets/images/links/${image}`}
            alt="Social Icon"
            width={30}
            height={30}
            className="text-white"
          />
        </a>
      ))}

      {/* Mobile Menu */}
      <div className="lg:hidden flex">
        <MyMenu />
      </div>
    </div>
  );
}

export default MyLink;
