import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">

      <h1>What Our Customers Say</h1>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <h2>★★★★★</h2>

          <p>
            Best car buying experience.
            The service was excellent.
          </p>

          <h3>- Rahul</h3>
        </div>

        <div className="testimonial-card">
          <h2>★★★★★</h2>

          <p>
            Luxury cars and professional support.
          </p>

          <h3>- Arjun</h3>
        </div>

        <div className="testimonial-card">
          <h2>★★★★★</h2>

          <p>
            Highly recommended for premium vehicles.
          </p>

          <h3>- Vishnu</h3>
        </div>

      </div>

    </section>
  );
}