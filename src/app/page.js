import Image from "next/image";
import Hero from "./components/home/Hero";
import Steps from "./components/home/Steps";
import CoreFeatures from "./components/home/CoreFeatures";
import Pricing from "./components/home/Pricing";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Steps/>
      <CoreFeatures/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}
