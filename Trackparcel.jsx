// TrackParcel.jsx
import React, { useState } from 'react';
import './TrackParcel.css';

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = () => {
    // Example logic (replace with real API call)
    if (trackingId === '123456') {
      setStatus({
        currentStatus: 'In Transit',
        location: 'Delhi Distribution Center',
        estimatedDelivery: 'April 17, 2025',
        history: [
          { date: 'April 13', event: 'Picked up from Sender' },
          { date: 'April 14', event: 'Arrived at Delhi DC' }
        ]
      });
      setError('');
    } else {
      setStatus(null);
      setError('Tracking ID not found. Please check and try again.');
    }
  };

  return (
    <div className="track-container">
      <h2>Track Your Parcel</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <button onClick={handleTrack}>Track</button>
      </div>
      {error && <p className="error">{error}</p>}
      {status && (
        <div className="status-box">
          <h3>Status: {status.currentStatus}</h3>
          <p>Current Location: {status.location}</p>
          <p>Estimated Delivery: {status.estimatedDelivery}</p>
          <div className="history">
            <h4>Tracking History:</h4>
            <ul>
              {status.history.map((item, index) => (
                <li key={index}>{item.date}: {item.event}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackParcel;
