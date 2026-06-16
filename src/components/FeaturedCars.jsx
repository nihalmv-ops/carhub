import cars from "../data";
import "./FeaturedCars.css";

export default function FeaturedCars() {
  return (
    <section className="featured">

      <h1>Luxury Collection</h1>

      <div className="featured-container">

        {cars.slice(0, 3).map((car) => (
          <div
            className="featured-card"
            key={car.id}
            style={{
              backgroundImage: `url(${car.image})`,
            }}
          >

            <div className="featured-overlay">

              <h2>{car.name}</h2>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}