import React, { useState } from "react";
import "./DeliveryDashboard.css";

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: "54321",
      receiver: "John Doe",
      address: "123 MG Road, Delhi",
      eta: "April 14, 2025",
      status: "Assigned",
    },
    {
      id: "54322",
      receiver: "Riya Sharma",
      address: "45 Park Street, Mumbai",
      eta: "April 15, 2025",
      status: "Out for Delivery",
    },
    {
      id: "54323",
      receiver: "Amit Singh",
      address: "12 Residency Area, Indore",
      eta: "April 13, 2025",
      status: "Delivered",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setDeliveries((prev) =>
      prev.map((parcel) =>
        parcel.id === id ? { ...parcel, status: newStatus } : parcel
      )
    );
  };

  return (
    <div className="delivery-dashboard">
      <h1>Welcome, Delivery Agent!</h1>

      <section className="summary">
        <div className="card assigned">📦 Assigned: {deliveries.filter(p => p.status === "Assigned").length}</div>
        <div className="card out-for-delivery">🚚 Out for Delivery: {deliveries.filter(p => p.status === "Out for Delivery").length}</div>
        <div className="card delivered">✅ Delivered: {deliveries.filter(p => p.status === "Delivered").length}</div>
      </section>

      <section className="parcel-table">
        <h2>Your Deliveries</h2>
        <table>
          <thead>
            <tr>
              <th>Parcel ID</th>
              <th>Receiver</th>
              <th>Address</th>
              <th>ETA</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr key={delivery.id}>
                <td>{delivery.id}</td>
                <td>{delivery.receiver}</td>
                <td>{delivery.address}</td>
                <td>{delivery.eta}</td>
                <td className={delivery.status.toLowerCase().replace(/\s+/g, '-')}>{delivery.status}</td>
                <td>
                  <select
                    value={delivery.status}
                    onChange={(e) => updateStatus(delivery.id, e.target.value)}
                  >
                    <option>Assigned</option>
                    <option>Out for Delivery</option>
                    <option>Delivered</option>
                    <option>Failed Attempt</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="issue-form">
        <h2>Report an Issue</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Issue submitted!"); }}>
          <input type="text" placeholder="Parcel ID" required />
          <textarea placeholder="Describe the issue..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default DeliveryDashboard;
