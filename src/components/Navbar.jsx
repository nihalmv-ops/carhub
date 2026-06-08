import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CarHub
      </div>

      <ul className="menu">
        <li>Home</li>
        <li>Cars</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}