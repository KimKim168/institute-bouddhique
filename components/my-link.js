"use client";
import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import MyMenu from "./my-menu";

function MyLink() {
  const [socialMedia, setSocialMedia] = useState([]);
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch social media links
        const socialMediaResponse = await fetch(
          "http://127.0.0.1:8000/api/links"
        );
        if (!socialMediaResponse.ok)
          throw new Error("Failed to fetch social media links");

        const socialMediaData = await socialMediaResponse.json();
        setSocialMedia(socialMediaData.data);

        // Fetch contact information
        const contactResponse = await fetch(
          "http://127.0.0.1:8000/api/contact"
        );
        if (!contactResponse.ok)
          throw new Error("Failed to fetch contact information");

        const contactData = await contactResponse.json();
        setContact(contactData);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-end items-center space-x-2">
      {/* Phone Section */}
      {contact.phone_number && (
        <div className="flex text-[10px] sm:text-[11px] md:text-[12px] items-center bg-color2 px-1.5 py-2 rounded-full">
          <span className="mr-1">
            <PhoneCall className="w-4 h-4" />
          </span>
          <span>{contact.phone_number}</span>
        </div>
      )}

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
