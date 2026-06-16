import { useState } from "react";
import "./BookTestDrive.css";

export default function BookTestDrive() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Test Drive Booked Successfully!");
  }

  return (
    <div className="booking-page">

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >

        <h1>Book Test Drive</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <select
          name="car"
          onChange={handleChange}
        >
          <option>Select Car</option>

          <option>BMW M4</option>

          <option>Audi R8</option>

          <option>Porsche 911</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <button type="submit">
          Book Now
        </button>

      </form>

    </div>
  );
}