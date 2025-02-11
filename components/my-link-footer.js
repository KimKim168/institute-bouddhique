"use client";
import React from "react";
import { Koulen } from "next/font/google";
import { usePathname } from "next/navigation";

const koulen = Koulen({ subsets: ["khmer"], weight: ["400"] });

function FooterLink({ href, label }) {
  const pathname = usePathname();
  return (
    <li>
      <a
        href={href}
        className={`py-2 rounded ${
          pathname === href ? "underline text-white" : "text-white hover:underline"
        }`}
      >
        {label}
      </a>
    </li>
  );
}

function MyFooterMenuClient() {
  return (
    <nav>
      <ul className={`flex flex-wrap justify-center gap-4 mt-4 lg:space-x-5 text-start ${koulen.className}`}>
        <FooterLink href="/" label="ទំព័រដើម" />
        <FooterLink href="/client/news" label="ព័ត៌មានថ្មីៗ" />
        <FooterLink href="/client/khmer-legends" label="ប្រជុំរឿងព្រេងខ្មែរ" />
        <FooterLink href="/client/libraries" label="បណ្ណាល័យ" />
        <FooterLink href="/client/magazine" label="ទស្សនាវដ្ដីកម្ពុជសុរិយា" />
        <FooterLink href="/client/buddhist" label="នាទីព្រះពុទ្ធសាសនា" />
        <FooterLink href="/client/about" label="អំពីវិទ្យាស្ថាន" />
      </ul>
    </nav>
  );
}

export default MyFooterMenuClient;
