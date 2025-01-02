import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./customer.css";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Customer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("");

  const navigate = useNavigate(); // For navigation to the detail screen

  const [customers, setCustomers] = useState([
    {
      custid: "Cust001",
      name: "Najaf Tirmizi",
      contact: "+923857610298",
      email: "najaftirmizi@gmail.com",
      membership: "Yes",
    },
    {
      custid: "Cust002",
      name: "Shaeroniya Khan",
      contact: "+923145823901",
      email: "shaeroniyakhan@gmail.com",
      membership: "Yes",
    },
    {
      custid: "Cust003",
      name: "Ali Ahmed",
      contact: "+923456789012",
      email: "ali.ahmed@gmail.com",
      membership: "No",
    },
    {
      custid: "Cust004",
      name: "Sara Khan",
      contact: "+923567890123",
      email: "sara.khan@gmail.com",
      membership: "No",
    },
    {
      custid: "Cust005",
      name: "Ahmed Raza",
      contact: "+923123456789",
      email: "ahmed.raza@gmail.com",
      membership: "Yes",
    },
    {
      custid: "Cust006",
      name: "Maha Ali",
      contact: "+923789456123",
      email: "maha.ali@gmail.com",
      membership: "No",
    },
    {
      custid: "Cust007",
      name: "Hassan Akhtar",
      contact: "+923658742901",
      email: "hassan.akhtar@gmail.com",
      membership: "Yes",
    },
    {
      custid: "Cust008",
      name: "Fatima Noor",
      contact: "+923112233445",
      email: "fatima.noor@gmail.com",
      membership: "Yes",
    },
    {
      custid: "Cust009",
      name: "Usman Tariq",
      contact: "+923222345678",
      email: "usman.tariq@gmail.com",
      membership: "No",
    },
    {
      custid: "Cust010",
      name: "Zainab Bano",
      contact: "+923445667788",
      email: "zainab.bano@gmail.com",
      membership: "No",
    },
  ]);

  const entriesPerPage = 7;
  const totalPages = Math.ceil(customers.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setMembershipFilter("");
    setCurrentPage(1);
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMembership = membershipFilter
      ? customer.membership === membershipFilter
      : true;

    return matchesSearch && matchesMembership;
  });

  const displayedCustomers = filteredCustomers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalEntries = filteredCustomers.length;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  const goToDetails = (customer) => {
    navigate(`/CustomerManagement/customerdetails/`, { state: customer });
  };

  return (
    <div className="user-management">
      <h2 className="CM-page-title">Customer Management</h2>

      <div className="CM-filters">
        <div className="CM-left">
          <div className="CM-passenger-input-container">
            <input
              type="text"
              className="CM-left-input"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="CM-input-icon" />
          </div>

          <div className="CM-passenger-select-container">
            <select
              className="CM-left-select"
              value={membershipFilter}
              onChange={(e) => setMembershipFilter(e.target.value)}
            >
              <option value="">Membership</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <FaChevronDown className="CM-select-icon" />
          </div>
        </div>

        <div className="CM-right">
          <button className="CM-reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>

      <div className="table-cont">
        <table className="table-inventory">
          <thead>
            <tr>
              <th>Customer id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Membership</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedCustomers.map((customer, index) => (
              <tr key={customer.custid}>
                <td>{customer.custid}</td>
                <td>{customer.name}</td>
                <td>{customer.contact}</td>
                <td>{customer.email}</td>
                <td>{customer.membership}</td>
                <td>
                  <button className="CM-details" onClick={() => goToDetails(customer)}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="CM-pagination">
          <div className="CM-entries-info">
            Showing {startEntry} to {endEntry} of {totalEntries} entries
          </div>
          <div className="CM-entry-buttons">
            <span
              className="CM-pagination-text"
              onClick={() => handlePageChange(currentPage - 1)}
              style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
            >
              Previous
            </span>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`CM-pagination-link ${currentPage === index + 1 ? "active" : ""
                  }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <span
              className="CM-pagination-text"
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

export default Customer;
