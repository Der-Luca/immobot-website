import Image from "next/image";
import Hero from "./components/home/Hero";
import Steps from "./components/home/Steps";
import CoreFeatures from "./components/home/CoreFeatures";
import Plan from "./components/preise/Plan";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Steps/>
      <CoreFeatures/>
      <Plan/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}
