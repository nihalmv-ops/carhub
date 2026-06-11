import { Link } from "react-router-dom";
import cars from "../data";
import "./Cars.css";

export default function Cars() {
  return (
    <div className="cars-container">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          <h2>{car.name}</h2>
          <h3>{car.price}</h3>

          <Link to={`/car-details/${car.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}