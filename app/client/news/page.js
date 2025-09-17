import Image from "next/image";
import { Koulen } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MySearch from "./components/search";
import { CircleArrowLeft, CircleArrowRightIcon } from "lucide-react";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

// Sample static data
const news = [
  {
    id: 1,
    name: "ព័ត៌មានប្រចាំថ្ងៃ",
    short_description: "អត្ថបទពាក់ព័ន្ធនឹងព្រឹត្តិការណ៍ថ្មីៗនៅក្នុងប្រទេស។",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    name: "កីឡា និងសម័យថ្មី",
    short_description: "សេចក្តីពត៌មានអំពីកីឡាក្នុងស្រុក និងអន្តរជាតិ។",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    name: "បច្ចេកវិទ្យា",
    short_description: "អត្ថបទពាក់ព័ន្ធនឹងបច្ចេកវិទ្យាថ្មី និងការច្នៃប្រឌិត។",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    name: "សុខភាព និងជីវភាព",
    short_description: "ព័ត៌មានអំពីសុខភាព និងការរស់នៅប្រចាំថ្ងៃ។",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default async function Page({ searchParams }) {
  // Get query params
  const search = searchParams?.search || "";
  const current_page = parseInt(searchParams?.page, 10) || 1;
  const last_page = 5; // static for now

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Content Section */}
      <div className="max-w-screen-xl px-4 mx-auto mt-10 xl:px-2">
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {news.map((item) => (
            <Link
              href={`/client/news/${item.id}`}
              key={item.id}
              className="flex flex-col items-start overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between flex-1 p-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {item.short_description}
                  </p>
                </div>
                <Button asChild>
                  <Link href={`/client/news/${item.id}`}>Read More</Link>
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {current_page > 1 && (
            <Link
              href={`?search=${encodeURIComponent(search)}&page=${
                current_page - 1
              }`}
              className="px-4 py-2 text-white duration-700 bg-gray-900 rounded hover:bg-white hover:text-black"
            >
              <CircleArrowLeft />
            </Link>
          )}
          <span className="px-4 py-2 text-black bg-red-200 rounded">
            Page {current_page} of {last_page}
          </span>
          {current_page < last_page && (
            <Link
              href={`?search=${encodeURIComponent(search)}&page=${
                current_page + 1
              }`}
              className="px-4 py-2 text-white duration-700 bg-gray-900 rounded hover:bg-white hover:text-black"
            >
              <CircleArrowRightIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
