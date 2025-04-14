import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import SenderForm from "./SenderForm";
import Trackparcel from './Trackparcel'; // adjust path as needed
import VehicleHiring from "./Vehiclehiring";
import SenderDashboard from "./SenderDashboard";
import RecieverDashboard from "./RecieverDashboard";
import DeliveryDashboard from "./DeliveryDashboard";
import Contact from "./Contact";
import Loginsignup from './Loginsignup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/sender" element={<SenderForm />} />
      <Route path="/track" element={<Trackparcel />} />
    <Route path="/hire" element={<VehicleHiring/>}/>
    <Route path="/sender-dashboard" element={<SenderDashboard/>}/>
    <Route path="/reciever-dashboard" element={<RecieverDashboard/>}/>
    <Route path="/delivery-personnel" element={<DeliveryDashboard/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Loginsignup />} />



    </Routes>
  );
}

export default App;

