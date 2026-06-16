import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cars from "../components/Cars";
import FeaturedCars from "../components/FeaturedCars";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cars />
      <FeaturedCars />
    </>
  );
}