import React from "react";
import MyMenuBanner from "./components/my-menu-banner";

const Page = async ({ params }) => {
  const { id } = params; // No need to `await` for params
  const response = await fetch(`http://127.0.0.1:8000/api/news/${id}`);
  let data = null;

  if (response.status === 200) {
    data = await response.json();
  }

  // Ensure data and description exist before rendering
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="sm:flex gap-10 px-2">
        {data && data.description ? (
          <div
            className="prose max-w-none sm:flex-1 my-10"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        ) : (
          <p className="flex-1 mt-10">Loading or no content available...</p>
        )}
        <div className="sm:flex-1 mb-5 sm:mb-0 sm:max-w-52">
          <MyMenuBanner />
        </div>
      </div>
    </div>
  );
};

export default Page;
