"use client";
import { BASE_API_URL, IMAGE_CONTACT_URL } from "@/env";
import { Koulen } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_API_URL}/contact`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className=" px-4 py-10 md:px-10 md:py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div>
          <h1
            className={`text-xl md:text-3xl text-red-900 ${koulen.className}`}
          >
            អំពីវិទ្យាស្ថាន
          </h1>
          <div className="mt-4 space-y-3">
            <>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/location.png"
                  width={24}
                  height={24}
                  alt="Location"
                />
                <a
                  href={data.link_location_first}
                  className="text-blue-500 hover:underline"
                >
                  {data.location_first}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/telephone.png"
                  width={24}
                  height={24}
                  alt="Phone"
                />
                <p>{data.phone_number}</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/gmail.png"
                  width={24}
                  height={24}
                  alt="Phone"
                />
                <p>{data.email}</p>
              </div>
            </>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex justify-center">
          <a href={data.link_location_first} target="_blank">
            <Image
              src={`${IMAGE_CONTACT_URL}${data.image_first}`}
              alt="Map"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
