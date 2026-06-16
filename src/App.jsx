import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import BookTestDrive from "../public/BookTestDrive";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        import BookTestDrive from "./pages/BookTestDrive";

  <Route
  path="/book-test-drive"
  element={<BookTestDrive />}
/>
        <Route path="/" element={<Home />} />

        <Route
          path="/car-details/:id"
          element={<CarDetails />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;