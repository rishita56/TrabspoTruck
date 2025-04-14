import React, { useState } from "react";
import "./VehicleHiring.css";

const VehicleHiring = () => {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "Mini Truck",
    goods: "",
    weight: ""
  });

  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkAvailability = () => {
    // Dummy data
    const dummyVehicles = [
      {
        id: 1,
        driver: "Raj Kumar",
        vehicleNo: "MP09 AB1234",
        type: formData.vehicle,
        fare: "₹450"
      },
      {
        id: 2,
        driver: "Anjali Yadav",
        vehicleNo: "MP20 CD5678",
        type: formData.vehicle,
        fare: "₹500"
      }
    ];
    setAvailableVehicles(dummyVehicles);
    setBookingInfo(null);
  };

  const handleBooking = (vehicle) => {
    const bookingId = "TRUCK" + Math.floor(Math.random() * 10000);
    setBookingInfo({ ...vehicle, bookingId });
  };

  return (
    <div className="vehicle-hiring-container">
      <h2>Hire a Vehicle</h2>
      <div className="hiring-form">
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
        />
        <input
          type="text"
          name="drop"
          placeholder="Drop-off Location"
          value={formData.drop}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
          <option value="Mini Truck">Mini Truck</option>
          <option value="Pickup Van">Pickup Van</option>
          <option value="Bike">Bike</option>
          <option value="Tempo">Tempo</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="goods"
          placeholder="Goods Description (optional)"
          value={formData.goods}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Approximate Load Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
        />
        <button onClick={checkAvailability}>Check Availability</button>
      </div>

      {availableVehicles.length > 0 && (
        <div className="available-vehicles">
          <h3>Available Vehicles</h3>
          {availableVehicles.map((v) => (
            <div className="vehicle-card" key={v.id}>
              <p>🚚 {v.type}</p>
              <p>Driver: {v.driver}</p>
              <p>Vehicle No: {v.vehicleNo}</p>
              <p>Fare: {v.fare}</p>
              <button onClick={() => handleBooking(v)}>Book Now</button>
            </div>
          ))}
        </div>
      )}

      {bookingInfo && (
        <div className="booking-confirmation">
          <h3>Booking Confirmed ✅</h3>
          <p>Booking ID: {bookingInfo.bookingId}</p>
          <p>Driver: {bookingInfo.driver}</p>
          <p>Vehicle No: {bookingInfo.vehicleNo}</p>
          <p>Fare: {bookingInfo.fare}</p>
        </div>
      )}
    </div>
  );
};

export default VehicleHiring;
