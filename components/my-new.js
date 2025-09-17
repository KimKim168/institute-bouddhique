import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Koulen } from "next/font/google";
import { EllipsisVertical } from "lucide-react";

const koulen = Koulen({ subsets: ["khmer"], weight: "400" });

// Sample static data with one image for all items
const news = [
  {
    id: 1,
    name: "ព្រឹត្តិការណ៍ថ្មីនៅរាជធានីភ្នំពេញ",
    short_description: "ការចេញផ្សាយព័ត៍មានថ្មីៗអំពីការអភិវឌ្ឍន៍ទីក្រុង និងសំណង់ថ្មីៗ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 2,
    name: "កីឡាជាតិ និងអន្តរជាតិ",
    short_description: "ព័ត៍មានកីឡាជាច្រើនរួមមានបាល់ទាត់ និងកីឡាផ្សេងៗ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 3,
    name: "សិល្បៈ និងវប្បធម៌",
    short_description: "ពិព័រណ៍សិល្បៈថ្មី និងកម្មវិធីវប្បធម៌នៅតំបន់ផ្សេងៗ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 4,
    name: "បច្ចេកវិទ្យា និងច្នៃប្រឌិត",
    short_description: "ព័ត៌មានថ្មីៗពីក្រុមហ៊ុនបច្ចេកវិទ្យា និងឧបករណ៍ថ្មីៗ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 5,
    name: "អប់រំ និងការសិក្សា",
    short_description: "ព័ត៌មានស្ដីពីការអប់រំ និងការបើកវគ្គសិក្សាថ្មី។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 6,
    name: "សុខភាព និងជីវភាព",
    short_description: "ព័ត៌មានអំពីសុខភាព ការព្យាបាល និងអនាម័យជាសាធារណៈ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 7,
    name: "សេដ្ឋកិច្ច និងពាណិជ្ជកម្ម",
    short_description: "ព័ត៌មានស្ដីពីទីផ្សារកម្ពុជា និងអន្តរជាតិ។",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 8,
    name: "បរិស្ថាន និងធនធានធម្មជាតិ",
    short_description: "ការអភិរក្សធនធានធម្មជាតិ និងសកម្មភាពបរិស្ថាន។",
    image: "https://picsum.photos/600/400",
  },
];

export default function Page() {
  return (
    <div className="px-2 mx-auto mt-5 max-w-screen-2xl xl:px-16 md:mt-12">
      {/* Content Section */}
      <div>
        {/* Heading */}
        <div className="flex items-center text-lg text-red-900 lg:text-2xl md:mb-2">
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {news.slice(0, 8).map((item) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
      </div>
    </div>
  );
}
