import React, { useState } from "react";
import "./RecieverDashboard.css";

const ReceiverDashboard = () => {
  const [parcels, setParcels] = useState([
    {
      id: "12345",
      sender: "Alice",
      eta: "April 18, 2025",
      status: "In Transit",
    },
    {
      id: "12346",
      sender: "Bob",
      eta: "April 15, 2025",
      status: "Delivered",
    },
    {
      id: "12347",
      sender: "Charlie",
      eta: "April 20, 2025",
      status: "Delayed",
    },
  ]);

  return (
    <div className="receiver-dashboard">
      <h1>Welcome, Receiver!</h1>

      <section className="summary">
        <div className="card in-transit">📦 In Transit: {parcels.filter(p => p.status === "In Transit").length}</div>
        <div className="card delivered">✅ Delivered: {parcels.filter(p => p.status === "Delivered").length}</div>
        <div className="card delayed">⏱️ Delayed: {parcels.filter(p => p.status === "Delayed").length}</div>
      </section>

      <section className="parcel-table">
        <h2>Your Parcels</h2>
        <table>
          <thead>
            <tr>
              <th>Parcel ID</th>
              <th>Sender</th>
              <th>ETA</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id}>
                <td>{parcel.id}</td>
                <td>{parcel.sender}</td>
                <td>{parcel.eta}</td>
                <td className={parcel.status.toLowerCase().replace(" ", "-")}>{parcel.status}</td>
                <td><button onClick={() => alert(`Tracking Parcel ID: ${parcel.id}`)}>Track</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="notifications">
        <h2>Recent Updates</h2>
        <ul>
          <li>Parcel #12345 has reached Delhi Hub 🚚</li>
          <li>Parcel #12346 delivered at doorstep 🏡</li>
          <li>Parcel #12347 is delayed due to weather ⛈️</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>Raise an Issue</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Issue submitted successfully!"); }}>
          <input type="text" placeholder="Parcel ID" required />
          <textarea placeholder="Describe your issue..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ReceiverDashboard;
