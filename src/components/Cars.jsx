import "./Cars.css";
import cars from "../data";

export default function Cars() {
  return (
    <div className="cars-container">

      {cars.map((car) => (
        <div className="car-card" key={car.id}>

          <h2>{car.name}</h2>

          <h3>{car.price}</h3>

          <button>View Details</button>

        </div>
      ))}

    </div>
  );
}