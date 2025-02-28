import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyPageSearch from "@/components/my-page-search";

import { Koulen } from "next/font/google";
import { BASE_API_URL, IMAGE_PAGE_URL } from "@/env";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

export default async function Page(props) {
  const searchParams = await props.searchParams || {};
  const search = searchParams.search || "";
  const currentPage = parseInt(searchParams.page, 10) || 1;

  const response = await fetch(
    `${BASE_API_URL}/pages?&position=buddhist&search=${search}&page=${currentPage}`
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
      <div className="max-w-screen-xl mx-auto px-4 lg:px-2 ">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <h1
            className={`text-lg lg:text-2xl text-red-900 text-center  ${koulen.className}`}
          >
            នាទីព្រះពុទ្ធសាសនា
          </h1>
          <MyPageSearch />
        </div>

        {/* item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <Link
              href={`/client/buddhist/${item.id}`}
              key={item.id}
              className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full aspect-[6/9] object-cover relative">
                <Image
                  src={`${IMAGE_PAGE_URL}${item.image}`}
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
