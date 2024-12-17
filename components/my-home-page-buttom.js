"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

function ResponsiveSection({ title, description, image, reverse }) {
  return (
    <Link href="/client/about">
      <div
        className={`flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-6 lg:px-16 py-10 ${
          reverse ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h2 className="text-xl md:text-3xl xl:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={image}
            alt="Descriptive Alt Text"
            width={1200}
            height={800}
            className="w-full aspect-video object-cover h-auto rounded-lg shadow-md py-1 pr-1 border-l-[#921b1f] bg-white border-l-[10px] rounded-l-lg"
          />
        </div>
      </div>
    </Link>
  );
}

function MyHomePageButtom() {
  const sections = [
    {
      title: "Payments tool for software companies",
      description:
        "From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.",
      image: "/assets/images/slide7.webp",
      reverse: false,
    },
    {
      title: "Simplify your workflow with advanced tools",
      description:
        "With a modern toolset and integrations, managing your operations has never been easier.",
      image: "/assets/images/slide2.webp",
      reverse: true,
    },
    {
      title: "Explore new horizons with innovation",
      description:
        "Revolutionize the way you do business with cutting-edge solutions tailored for your needs.",
      image: "/assets/images/slide3.webp",
      reverse: false,
    },
  ];

  return (
    <section className="my-16">
      <h1
        className={`text-center mb-6 text-xl md:text-3xl xl:text-4xl  text-red-900 ${koulen.className}`}
      >
        បណ្ណាល័យ
      </h1>
      {sections.map((section, index) => (
        <ResponsiveSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </section>
  );
}

export default MyHomePageButtom;
