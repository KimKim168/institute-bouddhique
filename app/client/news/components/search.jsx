"use client";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const MySearch = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <>
      <div className="relative items-center flex-grow">
        <input
          type="text"
          className="block w-full px-3 py-2 text-sm border border-red-900 rounded-md shadow-sm focus:outline-1 focus:ring-1 focus:ring-black "
          placeholder={placeholder || "Search"}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <SearchIcon className="absolute flex items-center inset-y-2 right-3 " />
      </div>
    </>
  );
};

export default MySearch;
