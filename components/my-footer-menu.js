import React from "react";
import { Koulen } from "next/font/google";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

const links = [
  { href: "/", label: "ទំព័រដើម" },
  { href: "/client/news", label: "ព័ត៌មានថ្មីៗ" },
  { href: "/client/khmer-legends", label: "ប្រជុំរឿងព្រេងខ្មែរ" },
  { href: "/client/libraries", label: "បណ្ណាល័យ" },
  { href: "/client/magazine", label: "ទស្សនាវដ្ដីកម្ពុជសុរិយា" },
  { href: "/client/buddhist", label: "នាទីព្រះពុទ្ធសាសនា" },
  { href: "/client/about", label: "អំពីវិទ្យាស្ថាន" },
];

function MyFooterMenuClient() {

  return (
    <nav>
      <ul className={`flex flex-wrap justify-center gap-4 mt-4 ${koulen.className}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`py-2 text-white hover:underline`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MyFooterMenuClient;
