import { Link, useParams } from "react-router-dom";
import cars from "../data";
import "./CarDetails.css";

export default function CarDetails() {
  const { id } = useParams();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  if (!car) {
    return <h1>Car Not Found</h1>;
  }

  return (
    <div
      className="details-container"
      style={{
        backgroundImage: `url(${car.image})`,
      }}
    >
      <div className="overlay">

        <div className="details-card">

          <img
            src={car.image}
            alt={car.name}
            className="car-image"
          />

          <div className="car-info">

            <h1>{car.name}</h1>

            <h2 className="price">
              {car.price}
            </h2>

            <p>{car.type}</p>

            <div className="specs">

              <p>Engine: {car.engine}</p>

              <p>Power: {car.power}</p>

              <p>Top Speed: {car.topSpeed}</p>

            </div>
           <Link to="/book-test-drive">
            <button className="book-btn">
              Book Test Drive
            </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}