import Image from "next/image";
import { Koulen } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MySearch from "./components/search";
import { CircleArrowLeft, CircleArrowRightIcon } from "lucide-react";
import { BASE_API_URL, IMAGE_NEWS_URL } from "@/env";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export default async function Page(props) {
  const searchParams = props.searchParams || {};
  const search = searchParams.search || "";
  const currentPage = parseInt(searchParams.page, 10) || 1;
 
  // Fetch filtered news data from the server
  const response = await fetch(
    `${BASE_API_URL}/news?search=${encodeURIComponent(
      search
    )}&page=${currentPage}`
  );
  const result = await response.json();
  const news = result.data; // Paginated data
  const current_page = result.current_page; // Current page
  const last_page = result.last_page; // Total pages

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 xl:px-2 mt-10">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <h1
            className={`text-lg lg:text-2xl text-red-900 text-center ${koulen.className}`}
          >
            ព័ត៌មានថ្មីៗ
          </h1>
          <MySearch />
        </div>
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {news.map((item) => (
            <Link
              href={`/client/news/${item.id}`}
              key={item.id}
              className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={`${IMAGE_NEWS_URL}${item.image}`}
                  alt="image"
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
                <Button href={`/client/news/${item.id}`}>Read More</Button>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center gap-4">
          {current_page > 1 && (
            <Link
              href={`?search=${encodeURIComponent(search)}&page=${
                current_page - 1
              }`}
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-white hover:text-black duration-700"
            >
              <CircleArrowLeft />
            </Link>
          )}
          <span className="px-4 py-2 bg-red-200 text-black rounded">
            Page {current_page} of {last_page}
          </span>
          {current_page < last_page && (
            <Link
              href={`?search=${encodeURIComponent(search)}&page=${
                current_page + 1
              }`}
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-white hover:text-black duration-700"
            >
              <CircleArrowRightIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
