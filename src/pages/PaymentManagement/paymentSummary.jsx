import React, { useState } from "react";
import "./paymentsummary.css";
import { FaCalendarAlt } from "react-icons/fa";

function PaymentSummary() {
  const [monthRange, setMonthRange] = useState("This Month"); // Default: This Month
  const [selectedDate, setSelectedDate] = useState(""); // For the "By Date" filter

  const resetFilters = () => {
    setMonthRange("This Month");
    setSelectedDate("");
  };

  return (
    <div className="user-management">
      <h2 className="page-title">Payment Summary</h2>

      {/* Filter Buttons Section */}
      <div className="filters">
        <div className="sumleft">

          {/* Month Wise Selector */}
          <div className="dispatcher-input-container">
            <select
              className="left-select"
              value={monthRange}
              onChange={(e) => setMonthRange(e.target.value)}
            >
              <option value="This Month">This Month</option>
              <option value="2 Months">2 Months</option>
              <option value="4 Months">4 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

          {/* By Date Selector with Calendar Icon */}
          <div className="dispatcher-date-container">
            <input
              type="date"
              className="sum-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <FaCalendarAlt className="date-icon" />
          </div>
        </div>

        
      </div>

      {/* Dynamic heading based on monthRange */}
      <h3 className="selected-period-heading">{monthRange}:</h3>
      <div className="table-summary">
        <table className="table-inventory">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td>Total Rents</td>
                <td>20 Trips</td>
              </tr>
              <tr >
                <td>Total Revenue</td>
                <td>PKR 30,700</td>
              </tr>
              <tr >
                <td>Total Pending Payments</td>
                <td>PKR 3700</td>
              </tr>
              <tr >
                <td>Completed Transactions</td>
                <td>18</td>
              </tr>
              <tr >
                <td>Average Rent Per Trips</td>
                <td>PKR 1400</td>
              </tr>
              <tr >
                <td>Most Rented Vehicle</td>
                <td>Toyota Corolla</td>
              </tr>
              <tr >
                <td>High-Spending Customer</td>
                <td>Muhammad Ali</td>
              </tr>
            
          </tbody>
        </table>

       
      </div>
    
    </div>
  );
}

export default PaymentSummary;
