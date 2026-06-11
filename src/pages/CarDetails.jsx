import { useParams } from "react-router-dom";
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
    <div className="details-container">
      <div className="details-card">

        <img
          src={car.image}
          alt={car.name}
          className="details-image"
        />

        <div className="details-info">

          <h1>{car.name}</h1>

          <h2 className="price">
            {car.price}
          </h2>

          <p className="type">
            {car.type}
          </p>

          <button className="book-btn">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}