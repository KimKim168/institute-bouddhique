import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyPageSearch from "@/components/my-page-search";
import { Koulen } from "next/font/google";
import { CircleArrowLeft, CircleArrowRightIcon } from "lucide-react";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

// Sample static data with book images
const data = [
  {
    id: 1,
    name: "ព្រះពុទ្ធសាសនា - ថ្ងៃទី១",
    short_description: "អត្ថបទស្តីពីព្រះពុទ្ធសាសនាផ្សេងៗ និងការអនុវត្ត។",
    image: "https://m.media-amazon.com/images/I/51dA1s4J+vL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    name: "ព្រះពុទ្ធសាសនា - ថ្ងៃទី២",
    short_description: "ព័ត៌មាន និងអត្ថបទស្តីពីព្រះពុទ្ធសាសនានៅកម្ពុជា។",
    image: "https://m.media-amazon.com/images/I/41+M7i3VfPL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    name: "ព្រះពុទ្ធសាសនា - ថ្ងៃទី៣",
    short_description: "អត្ថបទស្តីពីវប្បធម៌ព្រះពុទ្ធសាសនា និងការបង្រៀន។",
    image: "https://m.media-amazon.com/images/I/51t1BfjkGiL._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    name: "ព្រះពុទ្ធសាសនា - ថ្ងៃទី៤",
    short_description: "អត្ថបទ និងព័ត៌មានអំពីសង្គមព្រះពុទ្ធសាសនា។",
    image: "https://m.media-amazon.com/images/I/41Zb6CqQ9zL._SX331_BO1,204,203,200_.jpg",
  },
];

export default function Page() {
  const current_page = 1;
  const last_page = 5;
  const search = "";

  return (
    <div className="max-w-screen-xl mx-auto min-h-[90vh] mt-10">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-2">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <h1 className={`text-lg lg:text-2xl text-red-900 text-center ${koulen.className}`}>
            នាទីព្រះពុទ្ធសាសនា
          </h1>
          <MyPageSearch />
        </div>

        {/* Item Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Link
              href={`/client/buddhist/${item.id}`}
              key={item.id}
              className="flex flex-col items-start overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg"
            >
              <div className="w-full aspect-[6/9] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start justify-between flex-1 p-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold line-clamp-2">{item.name}</h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">{item.short_description}</p>
                </div>
                <Button href={`/client/buddhist/${item.id}`}>Read More</Button>
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
