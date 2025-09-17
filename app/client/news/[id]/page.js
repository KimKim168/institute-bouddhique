import React from "react";
import MyMenuBanner from "./components/my-menu-banner";

const Page = ({ params }) => {
  // Example static data
  const data = {
    description: `
      <h2>Welcome!</h2>
      <p>This is a static page description rendered with Tailwind + Prose.</p>
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
