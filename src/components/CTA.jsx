import { Link } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-overlay">

        <h1>
          Ready To Drive Your Dream Car?
        </h1>

        <p>
          Explore luxury performance and
          book your exclusive test drive today.
        </p>

        <Link to="/book-test-drive">
          <button>
            Book Test Drive
          </button>
        </Link>

      </div>

    </section>
  );
}