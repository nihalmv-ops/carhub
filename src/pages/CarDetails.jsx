import { useParams } from "react-router-dom";
import cars from "../data";

export default function CarDetails() {

  const { id } = useParams();

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  return (
    <div style={{ padding: "50px" }}>

      <h1>{car.name}</h1>

      <h2>{car.price}</h2>

      <p>{car.type}</p>

    </div>
  );
}