import React from "react";
// import MyFooterMenu from "./my-footer-menu";
// import { BASE_API_URL } from "@/env";
import MyFooterMenuClient from "./my-link-footer";

export default function MyFooter() {
  // const response = await fetch(`${BASE_API_URL}/footer`);
  // const result = await response.json();
  // console.log(result);
  return (
    <>
      {" "}
      <footer className="bg-color-bold  pt-5 mt-10">
        {/* <MyFooterMenu  /> */}
        <MyFooterMenuClient/>
        <div className="text-white flex justify-center text-[10px] md:text-sm py-4">
          <p className="pr-2 border-r-2">© 2025 . All Rights Reserved.

</p>
          <div className="flex pl-2 ">
            <p>Developed By :</p>
          <a
            href="https://www.corasolution.com/"
            target="_blank"
            className="hover:cursor-pointer pl-1 hover:underline"
          >
             Cora Soft
          </a>
          </div>
        </div>
      </footer>
    </>
  );
}
