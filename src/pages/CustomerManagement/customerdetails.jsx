import React from "react";
import "./customerdetails.css";
import { useLocation, useNavigate, Link } from "react-router-dom"; // Import useNavigate
import UserPic from "../../Assets/icons/pic.png";
 
const CustomerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
 
 
  const updatedData = location.state?.updatedData || {
    name: "John Ray",
    custId: "CUST001",
    membershipno: "MHY9712",
    mobile: "+923124563389",
    email: "john@gmail.com",
    age: "32",
    licenseno: "73579076",
    licenseexpiry: "27/03/2028",
  };
 
  return (
    <div className="driverdetails-container">
      <div className="driverdetails-content">
        <main className="driverdetails-main">
          <div className="header-container">
            <h3>Customer Details</h3>
            <Link to="/CustomerManagement/customerhistory">
              <button className="view-more-btn">History</button>
            </Link>
          </div>
          <div className="driverdetails-card">
            <div className="user-pic-text">
              <img src={UserPic} alt="User" className="user-pic" />
              <div className="driver-info">
                <p className="driver-name">{updatedData.name}</p>
              </div>
            </div>
            <button className="online-btn">Member</button>
            <div className="driver-details-row">
              <div>
                <p>Customer ID:</p>
                <p>
                  <strong>{updatedData.custId}</strong>
                </p>
              </div>
              <div>
                <p>Membership No.:</p>
                <p>
                  <strong>{updatedData.membershipno}</strong>
                </p>
              </div>
              <div>
                <p>Mobile Number:</p>
                <p>
                  <strong>{updatedData.mobile}</strong>
                </p>
              </div>
              <div>
                <p>Email ID:</p>
                <p>
                  <strong>{updatedData.email}</strong>
                </p>
              </div>
              <div>
                <p>Age:</p>
                <p>
                  <strong>{updatedData.age}</strong>
                </p>
              </div>
              <div>
                <p>License No:</p>
                <p>
                  <strong>{updatedData.licenseno}</strong>
                </p>
              </div>
              <div>
                <p>License Expiry Date:</p>
                <p>
                  <strong>{updatedData.licenseexpiry}</strong>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
 
export default CustomerDetails;