import React from "react";
import MyMenuBanner from "./components/my-menu-banner";

const Page = ({ params }) => {
  // Static data example
  const data = {
    description: `
      <h2>សូមស្វាគមន៍!</h2>
      <p>នេះគឺជាតំណាងនៃមាតិកាផ្ទុកក្នុងទំព័រប្រភេទស្ទាតិក។ អ្នកអាចដាក់អត្ថបទ HTML តាមបំណងនៅទីនេះ។</p>
      <ul>
        <li>ចំណុចទី ១</li>
        <li>ចំណុចទី ២</li>
        <li>ចំណុចទី ៣</li>
      </ul>
    `,
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="gap-10 px-2 sm:flex">
        {data?.description ? (
          <div
            className="my-10 prose max-w-none sm:flex-1"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        ) : (
          <p className="flex-1 mt-10">No content available...</p>
        )}
        <div className="mb-5 sm:flex-1 sm:mb-0 sm:max-w-52">
          <MyMenuBanner />
        </div>
      </div>
    </div>
  );
};

export default Page;
