import Filters from "../components/funktionen/Filters";
import Hero from "../components/funktionen/Hero";
import Platform from "../components/funktionen/Platfrom";
import Updates from "../components/funktionen/Updates";
import Transparent from "../components/funktionen/Transparent";
import Testimonials from "../components/funktionen/Testimonials";
import FAQ from "../components/funktionen/FAQ";

export default function AboutPage() {
  return (
    <section className="">
     <Hero/>
     <Platform/>
     <Filters/>
     <Updates/>
     <Transparent/>
     <Testimonials/>
     <FAQ/>
    </section>
  );
}