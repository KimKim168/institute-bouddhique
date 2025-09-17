"use client";
import { Koulen } from "next/font/google";
import Image from "next/image";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

// Static placeholder data
const data = {
  location_first: "Phnom Penh, Cambodia",
  link_location_first: "https://goo.gl/maps/abcd1234",
  phone_number: "+855 12 345 678",
  email: "info@example.com",
};

export default function Page() {
  return (
    <section className="px-4 py-12 md:px-10 md:py-20">
      <div className="grid items-start grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className={`text-2xl md:text-4xl font-bold text-red-900 ${koulen.className}`}>
            អំពីវិទ្យាស្ថាន
          </h1>
          <p className="text-gray-700">
            វិទ្យាស្ថានរបស់យើងផ្តល់នូវព័ត៌មានទាន់សម័យ និងផ្តល់ការជូនដំណឹងទៅកាន់សាធារណជនអំពីសកម្មភាព និងសេវាកម្មផ្សេងៗ។
          </p>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-4 transition bg-white rounded-lg shadow hover:shadow-lg">
              <Image src="/assets/images/location.png" width={32} height={32} alt="Location" />
              <a
                href={data.link_location_first}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {data.location_first}
              </a>
            </div>
            <div className="flex items-center gap-3 p-4 transition bg-white rounded-lg shadow hover:shadow-lg">
              <Image src="/assets/images/telephone.png" width={32} height={32} alt="Phone" />
              <p>{data.phone_number}</p>
            </div>
            <div className="flex items-center gap-3 p-4 transition bg-white rounded-lg shadow hover:shadow-lg">
              <Image src="/assets/images/gmail.png" width={32} height={32} alt="Email" />
              <p>{data.email}</p>
            </div>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9466428788887!2d104.933200075298!3d11.555682888644503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513257a11c79%3A0x33aecf5eed3669db!2sBuddhist%20Institute!5e0!3m2!1sen!2skh!4v1758077561453!5m2!1sen!2skh"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
