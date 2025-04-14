import React from 'react';
import './SenderDashboard.css';

const SenderDashboard = () => {
  return (
    <div className="sender-dashboard">
      <h2>Welcome, Sender!</h2>

      <div className="stats-cards">
        <div className="card">📦 Total Sent: <strong>12</strong></div>
        <div className="card">🚚 In Transit: <strong>3</strong></div>
        <div className="card">✅ Delivered: <strong>9</strong></div>
      </div>

      <section className="recent-parcels">
        <h3>Recent Parcels</h3>
        <table>
          <thead>
            <tr>
              <th>Parcel ID</th>
              <th>Receiver</th>
              <th>Date Sent</th>
              <th>Status</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#P12345</td>
              <td>John Doe</td>
              <td>2025-04-14</td>
              <td>In Transit</td>
              <td><button>Track</button></td>
            </tr>
            {/* More rows dynamically */}
          </tbody>
        </table>
      </section>

      <section className="send-parcel">
        <h3>Send a New Parcel</h3>
        <form>
          <input type="text" placeholder="Receiver Name" required />
          <input type="text" placeholder="Receiver Address" required />
          <input type="text" placeholder="Phone" required />
          <input type="text" placeholder="Pickup Address" required />
          <input type="number" placeholder="Weight (kg)" required />
          <select>
            <option>Standard</option>
            <option>Express</option>
          </select>
          <button type="submit">Send Parcel</button>
        </form>
      </section>
    </div>
  );
};

export default SenderDashboard;
