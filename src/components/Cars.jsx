import "./Cars.css";

export default function Cars() {
  return (
    <div className="car-card">

      <img
        src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600"
        alt="BMW M4"
      />

      <h2>BMW M4 Competition</h2>

      <p className="type">
        Luxury Sports Coupe
      </p>

      <h3>₹1.53 Crore</h3>

      <button>View Details</button>

    </div>
    

    
  )
}