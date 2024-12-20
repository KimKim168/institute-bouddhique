"use client";
import Image from "next/image";
import { Koulen } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export default function Page() {
  const [legend, setLegend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLegend = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/pages?position=buddhist"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const result = await response.json();
        setLegend(result);
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
    <div className="max-w-screen-xl mx-auto min-h-[90vh] mt-10">
      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 ">
        {/* Heading */}
        <div className="flex gap-4 mb-5">
          <h1
            className={`text-3xl lg:text-3xl text-red-900 text-center  ${koulen.className}`}
          >
            នាទីព្រះពុទ្ធសាសនា

          </h1>
          <div className="relative flex-grow items-center">
            <input
              type="text"
              placeholder="Search"
              className="block w-full px-3 py-2 text-sm border border-red-900 rounded-md shadow-sm focus:outline-1 focus:ring-1 focus:ring-black "
            />
            <Search className="absolute inset-y-2 right-3 flex items-center " />
          </div>
        </div>

        {/* item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {legend.map((item) => (
            <Link
              href={`/client/buddhist/${item.id}`}
              key={item.id}
              className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full aspect-[6/9] object-cover relative">
                <Image
                  src={`http://127.0.0.1:8000/assets/images/pages/${item.image}`}
                  alt="image"
                  fill
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
                <Button href={`/client/buddhist/${item.id}`}>Read More</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
