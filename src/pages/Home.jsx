import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cars from "../components/Cars";
import FeaturedCars from "../components/FeaturedCars";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cars />
      <FeaturedCars />
      <Stats />
      <CTA />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}