"use client";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export default function MyNew() {
  const [legend, setLegend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLegend = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/news");
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const result = await response.json();
        setLegend(result.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLegend();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className={`max-w-screen-2xl mx-auto px-2 xl:px-16 mt-5 md:mt-12 `}>
      {/* Content Section */}
      <div>
        {/* Heading */}
        <div className="flex text-xl lg:text-3xl items-center text-red-900  md:mb-2">
          <h1 className={`flex-1   ${koulen.className}`}>ព័ត៌មានថ្មីៗ</h1>
          <Link
            href="/client/news"
            className="text-sm md:text-base hover:cursor-pointer hover:underline underline-offset-4 "
          >
            View more
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {legend.map((item) => (
            <Link
              href={`/client/khmer-legends/${item.id}`}
              key={item.id}
              className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={`http://127.0.0.1:8000/assets/images/news/${item.image}`}
                  alt={item.name}
                  
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.short_description}
                  </p>
                </div>
                <Button href={`/client/khmer-legends/${item.id}`}>
                  Read More
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
