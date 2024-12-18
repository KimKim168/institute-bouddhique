"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });
export default function MyHero() {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Beauty of Modern Design",
      description:
        "An insight into how modern design trends shape user experiences.",
      image: "/assets/images/book1.jpg",
    },
    {
      id: 2,
      title: "The Rise of AI in Everyday Applications",
      description:
        "Learn how artificial intelligence is being integrated into daily tools.",
      image: "/assets/images/book1.jpg",
    },
    {
      id: 3,
      title: "Sustainability in Web Development",
      description:
        "Discover eco-friendly approaches in software and web development.",
      image: "/assets/images/book1.jpg",
    },
    {
      id: 4,
      title: "Innovations in Mobile Technology",
      description:
        "A look at the latest breakthroughs in mobile devices and platforms.",
      image: "/assets/images/book1.jpg",
    },
  ];

  return (
    <div className={`max-w-screen-xl mx-auto `}>
      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-16">
        {/* Heading */}
        <h1
          className={`text-3xl lg:text-4xl text-red-900 text-center mb-6  ${koulen.className}`}
        >
          ប្រជុំរឿងព្រេងខ្មែរ
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                </div>
                <Button>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
