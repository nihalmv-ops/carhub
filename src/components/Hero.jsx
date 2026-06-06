import "./Hero.css";
import carImage from "../assets/image/car.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${carImage})`,
      }}
    >
      <h1>Find Your Dream Car</h1>
      <p>Luxury • Performance • Style</p>
      <button>Explore Cars</button>
    </section>
  );
}