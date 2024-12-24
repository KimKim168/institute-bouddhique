import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Koulen } from "next/font/google";
import { EllipsisVertical } from "lucide-react";
import { BASE_API_URL, IMAGE_NEWS_URL } from "@/env";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

export default async function Page() {
  try {
    const response = await fetch(`${BASE_API_URL}/news`);
    if (!response.ok) throw new Error("Failed to fetch data");

    const { data: news } = await response.json();

    return (
      <div className="max-w-screen-2xl mx-auto px-2 xl:px-16 mt-5 md:mt-12">
        {/* Content Section */}
        <div>
          {/* Heading */}
          <div className="flex text-lg lg:text-2xl items-center text-red-900 md:mb-2">
            <h1 className={`flex-1 ${koulen.className}`}>ព័ត៌មានថ្មីៗ</h1>
            <Link
              href="/client/news"
              className="flex items-center justify-center text-sm md:text-base hover:cursor-pointer hover:underline underline-offset-4"
            >
              View more
              <EllipsisVertical size={20} />
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {news.slice(0, 8).map((item) => (
              <Link
                href={`/client/news/${item.id}`}
                key={item.id}
                className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="w-full aspect-video relative">
                  <Image
                    src={`${IMAGE_NEWS_URL}${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
                  <Button as="a" href={`/client/news/${item.id}`}>
                    Read More
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading data</div>;
  }
}
