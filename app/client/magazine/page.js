import Image from "next/image";
import { Koulen } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyPageSearch from "@/components/my-page-search";
import { CircleArrowLeft, CircleArrowRightIcon } from "lucide-react";

// Load the Khmer fonts
const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

export default async function Page(props) {
  const searchParams = props.searchParams || {};
  const search = searchParams.search || "";
  const currentPage = parseInt(searchParams.page, 10) || 1;

  // Fetch data from the API
  const response = await fetch(
    `http://127.0.0.1:8000/api/pages?&position=magazine&search=${search}&page=${currentPage}`
  );
  if (!response.ok) {
    console.error("Failed to fetch data");
    return <div>Error loading data</div>;
  }
  const result = await response.json();
  const data = result.data;
  const current_page = result.current_page; // Current page
  const last_page = result.last_page; // Total pages

  return (
    <div className="max-w-screen-xl mx-auto min-h-[90vh] mt-10">
      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-2">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <h1
            className={`text-lg lg:text-2xl text-red-900 text-center ${koulen.className}`}
          >
            ទស្សនាវដ្ដីកម្ពុជសុរិយា
          </h1>
          <MyPageSearch />
        </div>

        {/* Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <Link
              href={`/client/magazine/${item.id}`}
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
                  <h3 className={`text-xl font-semibold mb-3 line-clamp-2`}>
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.short_description}
                  </p>
                </div>
                <Button href={`/client/magazine/${item.id}`}>Read More</Button>
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
