import React, { useState } from "react";
import "../PaymentManagement/users.css";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Rental = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedRental, setSelectedRental] = useState(null); // For storing selected rental details
  const [showPopup, setShowPopup] = useState(false); // For controlling popup visibility

  const rentals = [
    {
      rentalID: "1023",
      vehicleID: "Veh001",
      requestID: "Rent001",
      customerName: "Mashal Khalil",
      confirmationNumber: "65489",
      startDate: "25 Nov 2024",
      endDate: "28 Nov 2024",
      pickupTime: "9:00 AM",
      returnTime: "11:00 AM",
      pickupLocation: "Airport Terminal 1",
      returnLocation: "City Center",
      age: "30+",
      vehicleClass: "Luxury",
      status: "🟩 Active",
    },
    {
      rentalID: "1298",
      vehicleID: "Veh002",
      requestID: "Rent002",
      customerName: "Manal Fouad",
      confirmationNumber: "12589",
      startDate: "20 Nov 2024",
      endDate: "23 Nov 2024",
      pickupTime: "8:30 AM",
      returnTime: "6:00 PM",
      pickupLocation: "Gulberg, Lahore",
      returnLocation: "Jinnah International Airport",
      age: "25+",
      vehicleClass: "SUV",
      status: "🟩 Returned",
    },
    {
      rentalID: "0725",
      vehicleID: "Veh003",
      requestID: "Rent003",
      customerName: "Shaeroniya",
      confirmationNumber: "24753",
      startDate: "15 Nov 2024",
      endDate: "18 Nov 2024",
      pickupTime: "7:00 AM",
      returnTime: "9:00 PM",
      pickupLocation: "Blue Area, Islamabad",
      returnLocation: "Murree Hills",
      age: "25+",
      vehicleClass: "Compact",
      status: "🟩 Active",
    },
    {
      rentalID: "2712",
      vehicleID: "Veh004",
      requestID: "Rent004",
      customerName: "Fatima Amir",
      confirmationNumber: "86345",
      startDate: "22 Nov 2024",
      endDate: "29 Nov 2024",
      pickupTime: "6:00 PM",
      returnTime: "12:00 PM",
      pickupLocation: "Karachi Downtown",
      returnLocation: "North Nazimabad",
      age: "30+",
      vehicleClass: "Sedan",
      status: "🟩 Active",
    },
    {
      rentalID: "1897",
      vehicleID: "Veh005",
      requestID: "Rent005",
      customerName: "Syed Maaz",
      confirmationNumber: "98678",
      startDate: "17 Nov 2024",
      endDate: "20 Nov 2024",
      pickupTime: "5:00 PM",
      returnTime: "2:00 PM",
      pickupLocation: "Faisalabad Junction",
      returnLocation: "Sargodha City",
      age: "25+",
      vehicleClass: "Van",
      status: "🟨 Returned",
    },
    {
      rentalID: "1574",
      vehicleID: "Veh006",
      requestID: "Rent006",
      customerName: "Muhammad Ali",
      confirmationNumber: "14679",
      startDate: "13 Nov 2024",
      endDate: "17 Nov 2024",
      pickupTime: "3:00 PM",
      returnTime: "1:00 PM",
      pickupLocation: "Multan Airport",
      returnLocation: "Bahawalpur City",
      age: "30+",
      vehicleClass: "Economy",
      status: "🟨 Returned",
    },
    {
      rentalID: "1835",
      vehicleID: "Veh007",
      requestID: "Rent007",
      customerName: "Murtaza",
      confirmationNumber: "76536",
      startDate: "25 Nov 2024",
      endDate: "30 Nov 2024",
      pickupTime: "4:30 PM",
      returnTime: "8:00 AM",
      pickupLocation: "Defense Phase 6",
      returnLocation: "Hyderabad Bypass",
      age: "30+",
      vehicleClass: "Luxury",
      status: "🟩 Active",
    },
    {
      rentalID: "RT100",
      vehicleID: "Veh008",
      customerName: "Najaf Tirmizi",
      confirmationNumber: "98765",
      startDate: "20 Dec 2024",
      endDate: "25 Dec 2024",
      pickupTime: "10:30 PM",
      returnTime: "1:00 PM",
      pickupLocation: "Jinnah International Airport",
      returnLocation: "Gulshan-e-Maymar",
      age: "25+",
      vehicleClass: "Economy",
      status: "Pending",
    },
  ];
  

  const entriesPerPage = 7;
  const totalPages = Math.ceil(50 / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const filteredRentals = rentals.filter((rental) => {
    const matchesSearch =
      rental.customerName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchestotalAmmount = statusFilter
      ? rental.status.toLowerCase().includes(statusFilter.toLowerCase())
      : true;

    return matchesSearch && matchestotalAmmount;
  });

  const displayedRentals = filteredRentals.slice(
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

  const openPopup = (rental) => {
    setSelectedRental(rental);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedRental(null);
  };

  return (
    <div className="user-management">
      <h2 className="page-title">Rental Management</h2>
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
              <option value="Active">Active</option>
              <option value="Returned">Returned</option>
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
              <th>Rental ID</th>
              <th>Vehicle ID</th>
              <th>Customer Name</th>
              <th>Confirmation Number</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {displayedRentals.map((rental) => (
              <tr key={rental.rentalID}>
                <td>{rental.rentalID}</td>
                <td>{rental.vehicleID}</td>
                <td>{rental.customerName}</td>
                <td>{rental.confirmationNumber}</td>
                <td>{rental.startDate}</td>
                <td>{rental.endDate}</td>
                <td>{rental.status}</td>
                <td>
                  <button
                    className="view-details-btn"
                    onClick={() => openPopup(rental)}
                  >
                    View Details
                  </button>
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

      {/* Popup for viewing rental details */}
         {/* View Rent Details Modal */}
         {showPopup && selectedRental && (
          <div className='dis-modal-overlay'>
            <div className='dis-modal-content'>
              <div className='dis-modal-header'>
                <h4 className='dis-modal-title'>View Rent Details</h4>
                <button
                  className='dis-close-modal-btn'
                  onClick={() => closePopup(false)} // Hide modal on close
                >
                  &times;
                </button>
              </div>

              <div className='dis-modal-details'>
                <div className='dis-modal-details-info'>
                  <p className='dis-modal-details-heading'>Details</p>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Request ID:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.requestID}
                      </p>
                    </div>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Vehicle ID:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.vehicleID}
                      </p>
                    </div>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Customer Name:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.customerName}
                      </p>
                    </div>
                  </div>

                  {/* <div className='dis-modal-details-item'>
                    <p className='dis-modal-details-title'>
                      Pickup and Return Location:
                    </p>
                    <p className='dis-modal-details-text'>
                      {selectedRental.pickupLocation} <br />
                      {selectedRental.returnLocation}
                    </p>
                  </div> */}


                  <div className='dis-modal-details-row'>
                  <div className='dis-modal-details-item'>
                    <p className='dis-modal-details-title'>
                      Pickup and Return Location:
                    </p>
                    <p className='dis-modal-details-text'>
                      {selectedRental.pickupLocation} <br />
                      {selectedRental.returnLocation}
                    </p>
                  </div>
                    {/* <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>
                        Pickup and Return Time:
                      </p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.pickupTime} <br />
                        {selectedRental.returnTime}
                      </p>
                    </div> */}

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>
                        Pickup and Return Date:
                      </p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.startDate}
                        <br />
                        {selectedRental.endDate}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Confirmation No:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.confirmationNumber}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Vehicle Class:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.vehicleClass}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Status:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.status}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Key ID:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRental.rentalID}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      {/* {showPopup && selectedRental && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Rental Details</h3>
            <p>
              <strong>Rental ID:</strong> {selectedRental.rentalID}
            </p>
            <p>
              <strong>Vehicle ID:</strong> {selectedRental.vehicleID}
            </p>
            <p>
              <strong>Customer Name:</strong> {selectedRental.customerName}
            </p>
            <p>
              <strong>Confirmation Number:</strong>{" "}
              {selectedRental.confirmationNumber}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedRental.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {selectedRental.endDate}
            </p>
            <p>
              <strong>Status:</strong> {selectedRental.status}
            </p>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Rental;
