import MySlider from "@/components/my-slide";
import MyNew from "@/components/my-new";
import Page from "./client/libraries/page";

export default function Home() {
  return (
    <>
      {/* Slide */}
      <MySlider />
      {/*End Slide */}
      {/* Hero */}

      {/*End Hero */}
      <MyNew />
      {/* Start */}
      <Page />
      {/* End */}
    </>
  );
}
