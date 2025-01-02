import React, { useState } from "react";
import "./users.css";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const AllPayments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const incidents = [
    {
      paymentID: "PAY001",
      customerName: "John Ray",
      rentID: "RENT001",
      ammount: "PKR 2300",
      overTimePerDay: "PKR 1500",
      totalAmmount: "PKR 3800",
      status: "🟨 Pending",
    },
    {
      paymentID: "PAY002",
      customerName: "David Brown",
      rentID: "RENT002",
      ammount: "PKR 5390",
      overTimePerDay: "-",
      totalAmmount: "PKR 5390",
      status: "🟩 Paid",
    },
    {
      paymentID: "PAY003",
      customerName: "Mark Kim",
      rentID: "RENT003",
      ammount: "PKR 7280",
      overTimePerDay: "-",
      totalAmmount: "PKR 7280",
      status: "🟨 Pending",
    },
    {
      paymentID: "PAY004",
      customerName: "Joshua",
      rentID: "RENT004",
      ammount: "PKR 4362",
      overTimePerDay: "PKR 2000",
      totalAmmount: "PKR 6362",
      status: "🟨 Pending",
    },
    {
      paymentID: "PAY005",
      customerName: "Anderson",
      rentID: "RENT005",
      ammount: "PKR 5230",
      overTimePerDay: "-",
      totalAmmount: "PKR 5230",
      status: "🟩 Paid",
    },
    {
      paymentID: "PAY006",
      customerName: "Andrew John",
      rentID: "RENT006",
      ammount: "PKR 8900",
      overTimePerDay: "PKR 3000",
      totalAmmount: "PKR 11900",
      status: "🟨 Pending",
    },
    {
      paymentID: "PAY007",
      customerName: "Mark Miller",
      rentID: "RENT007",
      ammount: "PKR 2500",
      overTimePerDay: "PKR 1200",
      totalAmmount: "PKR 3700",
      status: "🟩 Paid",
    },
  ];

  const entriesPerPage = 7;
  const totalPages = Math.ceil(50 / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      incident.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.rentID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.ammount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.actions.toLowerCase().includes(searchTerm.toLowerCase());

    const matchestotalAmmount = statusFilter
      ? incident.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;

    return matchesSearch && matchestotalAmmount;
  });

  const displayedIncidents = filteredIncidents.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalEntries = 50;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setCurrentPage(1);
  };

  return (
    <div className="user-management">
      <h2 className="page-title">Accounting</h2>
      <div className="filters">
        <div className="invleft">
          <div className="dispatcher-input-container">
            <input
              type="text"
              className="left-input"
              placeholder="Search.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="input-icon" />
          </div>

          <div className="dispatcher-select-container">
            <select
              className="left-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>
        </div>

        <div className="right">
          <button className="reset-btn" onClick={resetFilters}>
            Reset Filter
          </button>
        </div>
      </div>

      <div className="table-cont">
        <table className="table-inventory">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Customer Name</th>
              <th>Rent ID</th>
              <th>Ammount</th>
              <th>Over Time / Day</th>
              <th>Total Ammount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedIncidents.map((incident) => (
              <tr key={incident.paymentID}>
                <td>{incident.paymentID}</td>
                <td>{incident.customerName}</td>
                <td>{incident.rentID}</td>
                <td>{incident.ammount}</td>
                <td>{incident.overTimePerDay}</td>
                <td>{incident.totalAmmount}</td>
                <td>{incident.status}</td>
                <td>
                  <label className="lab">
                    <input type="checkbox" />
                    {" "} <p> Mark as Paid</p>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="entries-info">
            Showing {startEntry} to {endEntry} of {totalEntries} entries
          </div>
          <div className="entry-buttons">
            <span
              className="pagination-text"
              onClick={() => handlePageChange(currentPage - 1)}
              style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
            >
              Previous
            </span>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`pagination-link ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <span
              className="pagination-text"
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                cursor: currentPage < totalPages ? "pointer" : "not-allowed",
              }}
            >
              Next
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPayments;
