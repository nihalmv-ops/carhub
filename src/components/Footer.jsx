import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>CarHub</h2>
          <p>
            Luxury cars for luxury lifestyles.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Cars</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>📞 +91 9876543210</p>
          <p>📧 info@carhub.com</p>
          <p>📍 Bangalore, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 CarHub. All Rights Reserved.
      </p>

    </footer>
  );
}