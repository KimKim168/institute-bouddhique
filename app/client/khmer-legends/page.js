import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyPageSearch from "@/components/my-page-search";
import { Koulen } from "next/font/google";
import { CircleArrowLeft, CircleArrowRightIcon } from "lucide-react";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

// Sample static data
const data = [
  {
    id: 1,
    name: "រឿងព្រេងខ្មែរ ១",
    short_description: "រឿងព្រេងសម្រាប់ក្មេងៗ និងអ្នកចូលចិត្តសិក្សាអំពីប្រវត្តិសាស្ត្រ។",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGJvb2slMjBjb3ZlcnxlbnwwfHx8fDE2OTUxMzI4MDQ&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 2,
    name: "រឿងព្រេងខ្មែរ ២",
    short_description: "រឿងព្រេងអំពីក្លាហាន និងតំណាលព្រេងនៃសង្គមខ្មែរ។",
    image: "https://picsum.photos/400/600?random=2",
  },
  {
    id: 3,
    name: "រឿងព្រេងខ្មែរ ៣",
    short_description: "រឿងព្រេងបែបកំប្លែង និងបង្រៀនចំណេះដឹងថ្មីៗ។",
    image: "https://picsum.photos/400/600?random=3",
  },
  {
    id: 4,
    name: "រឿងព្រេងខ្មែរ ៤",
    short_description: "រឿងព្រេងស្រស់ស្អាតដែលពាក់ព័ន្ធនឹងធម្មជាតិ និងសង្គម។",
    image: "https://picsum.photos/400/600?random=4",
  },
];

export default function Page() {
  // Static pagination
  const current_page = 1;
  const last_page = 5;
  const search = ""; // No search for static version

  return (
    <div className="max-w-screen-xl mx-auto min-h-[90vh] mt-10">
      {/* Content Section */}
      <div className="max-w-screen-xl px-4 mx-auto lg:px-2">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <h1
            className={`text-lg lg:text-2xl text-red-900 text-center ${koulen.className}`}
          >
            ប្រជុំរឿងព្រេងខ្មែរ
          </h1>
          <MyPageSearch />
        </div>

        {/* Item Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Link
              href={`/client/khmer-legends/${item.id}`}
              key={item.id}
              className="flex flex-col items-start overflow-hidden transition bg-white rounded-lg shadow hover:shadow-lg"
            >
              <div className="w-full aspect-[6/9] relative">
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
                  <p className="mb-2 text-sm text-gray-600 line-clamp-2">
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
  