import { Link } from "react-router-dom";
import { useState } from "react";
import cars from "../data";
import "./Cars.css";

export default function Cars() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredCars = cars
    .filter((car) => {
      const matchesSearch = car.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesBrand =
        brand === "All" ||
        car.name.includes(brand);

      return matchesSearch && matchesBrand;
    })
    .sort((a, b) => {
      if (sortOrder === "low") {
        return a.price - b.price;
      }

      if (sortOrder === "high") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <>
      {/* Sort */}
      <div className="sort-container">
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value)
          }
        >
          <option value="default">
            Sort By
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>
        </select>
      </div>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Luxury Cars..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-input"
        />
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setBrand("All")}>
          All
        </button>

        <button onClick={() => setBrand("BMW")}>
          BMW
        </button>

        <button onClick={() => setBrand("Audi")}>
          Audi
        </button>

        <button onClick={() => setBrand("Porsche")}>
          Porsche
        </button>
      </div>

      {/* Car Cards */}
      <div className="cars-container">
        {filteredCars.map((car) => (
          <div
            className="car-card"
            key={car.id}
          >
            <h2>{car.name}</h2>

            <h3>{car.price}</h3>

            <Link
              to={`/car-details/${car.id}`}
            >
              <button>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}