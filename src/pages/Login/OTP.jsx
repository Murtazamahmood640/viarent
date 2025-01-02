import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OTP.css";
import logo from "../../Assets/Logo/Via-Logo-004.png";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  // Handle OTP input changes
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const otpArray = [...otp];
    otpArray[index] = element.value;
    setOtp(otpArray);

    // Move to the next input if not empty
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Handle OTP submission
  const handleVerify = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(""); // Combine OTP digits
    console.log("Entered OTP: ", enteredOtp);

    // Simulate verification logic (replace this with API logic)
    const isValidOtp = enteredOtp === "123456"; // Replace with dynamic server validation

    if (isValidOtp) {
      navigate("/dashboard"); // Navigate to the next page if OTP is valid
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-content">
        <div className="otp-card">
          <h2>Verify your email address</h2>
          <p>Please verify your email address</p>
          <p><strong>admin@gmail.com</strong></p> {/* Replace with the user's email */}
          <form onSubmit={handleVerify}>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  required
                />
              ))}
            </div>
            <p className="resend-link">
              Didn’t receive the code? <a href="#resend">Resend code</a>
            </p>
            <button type="submit" className="otp-button">
              VERIFY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
