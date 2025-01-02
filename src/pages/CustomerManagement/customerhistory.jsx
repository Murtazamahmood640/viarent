import React, { useState } from "react"; // Import useNavigate
import "./customer.css";
import "../PaymentManagement/users.css"
import { FaSearch, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CustomerHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [membershipFilter, setMembershipFilter] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]); // Start and end date in one state
  const [calendarOpen, setCalendarOpen] = useState(false); // Manage calendar open state


  const [customers, setCustomers] = useState([
    {
      rentalid: "RENT274",
      make: "Honda City",
      rentaldate: "1 June 2024",
      returndate: "5 June 2024",
      amountpaid: "PKR 5050",
      status: "Completed",
    },
    {
      rentalid: "RENT270",
      make: "Suzuki Alto",
      rentaldate: "21 Mar 2024",
      returndate: "24 Mar 2024",
      amountpaid: "PKR 5000",
      status: "Completed",
    },
    {
      rentalid: "RENT261",
      make: "Honda City",
      rentaldate: "1 Apr 2024",
      returndate: "1 Apr 2024",
      amountpaid: "PKR 800",
      status: "Pending Request",
    },
    {
      rentalid: "RENT214",
      make: "Honda City",
      rentaldate: "4 May 2024",
      returndate: "6 May 2024",
      amountpaid: "PKR 4400",
      status: "Pending Return",
    },
    {
      rentalid: "RENT344",
      make: "Honda City",
      rentaldate: "3 July 2024",
      returndate: "5 July 2024",
      amountpaid: "PKR 5050",
      status: "Completed",
    },
    {
      rentalid: "RENT234",
      make: "Honda City",
      rentaldate: "14 Nov 2024",
      returndate: "17 Nov 2024",
      amountpaid: "PKR 9000",
      status: "Completed",
    },
    {
      rentalid: "RENT124",
      make: "Honda City",
      rentaldate: "5 Sept 2024",
      returndate: "9 Sept 2024",
      amountpaid: "PKR 10000",
      status: "Completed",
    },
    {
      rentalid: "RENT277",
      make: "Honda City",
      rentaldate: "1 Aug 2024",
      returndate: "5 Aug 2024",
      amountpaid: "PKR 8500",
      status: "Completed",
    },
    {
      rentalid: "RENT204",
      make: "Toyota Corolla",
      rentaldate: "11 Jan 2024",
      returndate: "13 Jan 2024",
      amountpaid: "PKR 3550",
      status: "Completed",
    },
    {
      rentalid: "RENT314",
      make: "Toyota Yaris",
      rentaldate: "10 July 2024",
      returndate: "15 July 2024",
      amountpaid: "PKR 7000",
      status: "Pending Request",
    },
  ]);

  const entriesPerPage = 7;
  const totalPages = Math.ceil(customers.length / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };
  const resetFilters = () => {
    setSearchTerm("");
    setMembershipFilter("");
    setSelectedDateRange([null, null]);
    setCurrentPage(1);
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.make
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMembership = membershipFilter
      ? customer.status === membershipFilter
      : true;

    // Date filtering logic for inclusive range
    const customerdate = new Date(customer.rentaldate);
    const [rentaldate, returndate] = selectedDateRange;

    // Normalize both start and end dates to midnight to ensure correct comparison
    const normalizeDate = (date) => {
      if (!date) return null;
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0); // Set to midnight
      return normalizedDate;
    };

    const normalizedStartDate = normalizeDate(rentaldate);
    const normalizedEndDate = normalizeDate(returndate);

    const matchesDateRange =
      (normalizedStartDate ? customerdate >= normalizedStartDate : true) &&
      (normalizedEndDate ? customerdate <= normalizedEndDate : true);

    return matchesSearch && matchesMembership && matchesDateRange;
  });

  const displayedCustomers = filteredCustomers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const totalEntries = filteredCustomers.length;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="user-management">
      <h2 className="CH-page-title">Customer Details <span className="CH-title">/ History</span></h2>
      <div className="filters">
        <div className="left">
          <div className="dispatcher-input-container">
            <input
              type="text"
              className="left-input"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="input-icon" />
          </div>

          <div className="dispatcher-select-container">
            <select
              className="left-select"
              value={membershipFilter}
              onChange={(e) => setMembershipFilter(e.target.value)}
            >
              <option value="">Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending Request">Pending Request</option>
              <option value="Pending Return">Pending Return</option>
            </select>
            <FaChevronDown className="select-icon" />
          </div>
          <div className="dispatcher-date-container">
            <DatePicker
              className="left-date"
              selected={selectedDateRange[0]}
              onChange={(dates) => setSelectedDateRange(dates)} // Select both start and end date
              rentaldate={selectedDateRange[0]}
              returndate={selectedDateRange[1]}
              selectsRange
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date Range"
              open={calendarOpen} // Bind open state to DatePicker
              onClickOutside={() => setCalendarOpen(false)} // Close calendar on outside click
            />
            <FaCalendarAlt className="date-icon" onClick={toggleCalendar} />{" "}
            {/* Icon triggers calendar */}
          </div>
        </div>

        <div className="right">
          <button className="CM-reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>

      <div className="table-cont">
        <table className="table-inventory">
          <thead>
            <tr>
              <th>Rental id</th>
              <th>Car Make</th>
              <th>Rental Date</th>
              <th>Return Date</th>
              <th>Amount Paid</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedCustomers.map((customer, index) => (
              <tr key={customer.rentalid}>
                <td>{customer.rentalid}</td>
                <td>{customer.make}</td>
                <td>{customer.rentaldate}</td>
                <td>{customer.returndate}</td>
                <td>{customer.amountpaid}</td>
                <td>{customer.status}</td>
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

export default CustomerHistory;
