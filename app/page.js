import MySlider from "@/components/my-slide";
import MyHomePageButtom from "@/components/my-home-page-buttom";
import MyNew from "@/components/my-new";

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
      <MyHomePageButtom />
      {/* End */}
    </>
  );
}
