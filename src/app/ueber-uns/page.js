import Hero from "../components/ueber-uns/Hero";
import Vision from "../components/ueber-uns/Vision";
import History from "../components/ueber-uns/History";
import TeamSection from "../components/ueber-uns/TeamSection";
import PartnersSection from "../components/ueber-uns/PartnerSection";
import Testimonials from "../components/ueber-uns/Testimonials";
import Contact from "../components/ueber-uns/Contact";
// src/app/ueber-uns/page.js
export default function AboutPage() {
  return (
    <section className="">
     <Hero/>
     <Vision/>
     <History/>
     <TeamSection/>
     <PartnersSection/>
     <Testimonials/>
     <Contact/>
    </section>
  );
}
