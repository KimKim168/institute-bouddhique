import Image from "next/image";
import { Koulen } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyPageSearch from "@/components/my-page-search";
import { CircleArrowLeft, CircleArrowRightIcon } from "lucide-react";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

// Sample static magazine data
const data = [
  {
    id: 1,
    name: "កម្ពុជាសុរិយា - ថ្ងៃទី១",
    short_description: "ទស្សនាវដ្ដីកម្ពុជាសុរិយា សម្រាប់ព័ត៌មានថ្មីៗ និងអត្ថបទទស្សនាវដ្ដី។",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    name: "កម្ពុជាសុរិយា - ថ្ងៃទី២",
    short_description: "ទស្សនាវដ្ដីដែលបង្ហាញពីវប្បធម៌ និងសង្គមកម្ពុជា។",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    name: "កម្ពុជាសុរិយា - ថ្ងៃទី៣",
    short_description: "អត្ថបទស្តីពីសិល្បៈ និងការច្នៃប្រឌិតនៅកម្ពុជា។",
    image: "https://images.unsplash.com/photo-1523475496153-3d6cc3cf4f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    name: "កម្ពុជាសុរិយា - ថ្ងៃទី៤",
    short_description: "ទស្សនាវដ្ដីកម្ពុជាសុរិយា សម្រាប់ព័ត៌មានសង្គម និងសុខភាព។",
    image: "https://images.unsplash.com/photo-1588776814546-df2b0eeb2ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export default function Page() {
  const current_page = 1; // static current page
  const last_page = 5; // static last page
  const search = ""; // static search

  return (
    <div className="max-w-screen-xl mx-auto min-h-[90vh] mt-10">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-2">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <h1 className={`text-lg lg:text-2xl text-red-900 text-center ${koulen.className}`}>
            ទស្សនាវដ្ដីកម្ពុជសុរិយា
          </h1>
          <MyPageSearch />
        </div>

        {/* Item Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Link
              href={`/client/magazine/${item.id}`}
              key={item.id}
              className="flex flex-col items-start overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg"
            >
              <div className="w-full aspect-[6/9] relative">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col items-start justify-between flex-1 p-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold line-clamp-2">{item.name}</h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">{item.short_description}</p>
                </div>
                <Button href={`/client/magazine/${item.id}`}>Read More</Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {current_page > 1 && (
            <Link
              href={`?search=${encodeURIComponent(search)}&page=${current_page - 1}`}
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
              href={`?search=${encodeURIComponent(search)}&page=${current_page + 1}`}
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
