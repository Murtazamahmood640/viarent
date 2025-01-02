import React from "react";
import {
  People,
  DirectionsCar,
  LocalTaxi,
} from "@mui/icons-material"; // Importing relevant MUI icons

import { GiReceiveMoney } from "react-icons/gi";
import { Bar } from "react-chartjs-2"; // Importing Bar component
import { MdInventory2 } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Importing React Leaflet components
import "leaflet/dist/leaflet.css"; // Importing Leaflet CSS
import "./dashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Bar chart data
  const barChartData = {
    labels: ["Total Customers", " Total Inventory", "Total Requests", "Pending Requests"], // X-axis categories
    datasets: [
      {
        label: "Current Month", // Dataset label
        data: [200, 50, 180, 80], // Data for the current month
        backgroundColor: "#3f51b5", // Bar color
      },
      {
        label: "Previous Month", // Dataset label
        data: [180, 40, 60, 190], // Data for the previous month
        backgroundColor: "#f50057", // Bar color
      },
    ],
  };

  // Bar chart options
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Comparison of Metrics",
      },
    },
  };

  // Table data
  const tableData = [
    { id: "Via001", name: "Maaz Ali", vehicle: "Toyota Corolla", bookingType: "Ride", status: "Occupied" },
    { id: "Via002", name: "Ali Khan", vehicle: "Audi A3", bookingType: "Rent", status: "At Location" },
    { id: "Via003", name: "Najaf T", vehicle: "Honda Civic", bookingType: "Ride", status: "Available" },
    { id: "Via004", name: "Munawar T", vehicle: "Fortuner", bookingType: "Ride", status: "Pickup" },
    { id: "Via005", name: "Ahmed K", vehicle: "Toyota Yaris", bookingType: "Rent", status: "Available" },
    { id: "Via006", name: "Mustafa A", vehicle: "Suzuki Alto", bookingType: "Ride", status: "At Location" },
  ];

  // Function to return the background color for the status
  const getStatusColor = (status) => {
    switch (status) {
      case "Occupied":
        return "#ff5722"; // Orange
      case "At Location":
        return "#4caf50"; // Green
      case "Available":
        return "#2196f3"; // Blue
      case "Pickup":
        return "#9c27b0"; // Purple
      default:
        return "#000"; // Black for unknown status
    }
  };

  return (
    <div className="dashboard">
      <div className="cards">
        {/* Total Users Card */}
        <div className="card">
          <People className="card-icon" />
          <div className="card-content">
            <h4>Total Customers</h4>
            <p>200</p>
          </div>
        </div>

        {/* Active Drivers Card */}
        <div className="card">
          <MdInventory2 className="card-icon" />
          <div className="card-content">
            <h4>Total Inventory</h4>
            <p>50</p>
          </div>
        </div>

        {/* Total Bookings Card */}
        <div className="card">
          <FaUsers className="card-icon" />
          <div className="card-content">
            <h4>Total Requests</h4>
            <p>180</p>
          </div>
        </div>

        {/* Active Rides Card */}
        <div className="card">
          <MdOutlinePendingActions className="card-icon" />
          <div className="card-content">
            <h4>Pending Requests</h4>
            <p>80</p>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="card">
          <GiReceiveMoney className="card-icon" />
          <div className="card-content">
            <h4>Revenue</h4>
            <p>5,32,000</p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="analytics-section">
        {/* Bar Chart */}
        <div className="analytics">
          <h3>Analytics</h3>
          <Bar data={barChartData} options={barChartOptions} />
        </div>

        {/* Live Map */}
        <div className="live-map">
          <h3>Live Map</h3>
          <MapContainer
            center={[24.8607, 67.0011]} // Karachi Coordinates as default center
            zoom={12}
            style={{ height: "255px", width: "100%", borderRadius: "8px" }}
          >
            {/* Adding a Tile Layer for the map */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Example marker */}
            <Marker position={[24.8607, 67.0011]}>
              <Popup>
                Karachi <br /> Central Location.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

      
      </div>
      <div className="table-section">
    

      {/* Top Drivers Table
      <div className="top-drivers">
        <h3>Top Drivers</h3>
        <table className="drivers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Booking Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((driver, index) => (
              <tr key={index}>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.vehicle}</td>
                <td>{driver.bookingType}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: getStatusColor(driver.status),
                      width: "150px",
                      color: "#fff", // Ensures text is visible on colored background
                      padding: "10px 0px", // Adds inner space inside the box
                      borderRadius: "15px", // Rounded corners
                      display: "inline-block", // Prevents the background from stretching across the cell
                    }}
                  >
                    {driver.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      </div>
    </div>
  );
};

export default Dashboard;
