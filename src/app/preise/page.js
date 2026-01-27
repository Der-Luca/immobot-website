import Advantages from "../components/preise/Advantages";
import Functions from "../components/preise/Functions";
import Hero from "../components/preise/Hero";
import Plan from "../components/preise/Plan";
import StartSearch from "../components/preise/StartSearch";
import Testimonials from "../components/preise/Testimonials";
import FAQ from "../components/preise/FAQ";


export default function PricePage() {
  return (
    <section className="">
        <Hero/>
        <Plan/>
        <Functions/>
        <Advantages/>
        <StartSearch/>
        <Testimonials/>
        <FAQ/>
    </section>
  );
}