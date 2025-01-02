import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch, FaNotesMedical, FaChevronDown } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import "./ManageInventory.css";
import "../PaymentManagement/users.css"
const initialData = [
  { id: 1023, vehicleID: "Veh001", class: "Economy", make: "Toyota Yaris", condition: "Good", plate: "AHJ 1274", status: "Available" },
  { id: 1298, vehicleID: "Veh002", class: "Standard", make: "Honda City", condition: "Excellent", plate: "GTE 9800", status: "Booked" },
  { id: 725, vehicleID: "Veh003", class: "Midsize", make: "Toyota Yaris", condition: "Need Repair", plate: "QUT 9712", status: "Maintenance" },
  { id: 2712, vehicleID: "Veh004", class: "Fullsize SUV", make: "Toyota Corolla", condition: "Excellent", plate: "KEY 8848", status: "Available" },
  { id: 1897, vehicleID: "Veh005", class: "Standard", make: "Suzuki Alto", condition: "Good", plate: "VTR 1256", status: "Booked" },
  { id: 1574, vehicleID: "Veh006", class: "Economy", make: "Honda City", condition: "Need Repair", plate: "SGM 213", status: "Maintenance" },
  { id: 1835, vehicleID: "Veh007", class: "Midsize", make: "Toyota Corolla", condition: "Good", plate: "UT 827", status: "Available" },
];

const ManageInventory = () => {
  const [vehicles, setVehicles] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showHealthCheckModal, setShowHealthCheckModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false); // To toggle delete modal
  const [vehicleToDelete, setVehicleToDelete] = useState(null); // To track which vehicle is being deleted
  const [, setSelectedVehicle] = useState(null);

  const [currentVehicle, setCurrentVehicle] = useState({
    id: null,
    vehicleID: "",
    class: "",
    make: "",
    condition: "",
    plate: "",
    status: "",
  });

  // Filter Functions
  const handleFilter = () => {
    let data = vehicles;
    if (statusFilter) data = data.filter((v) => v.status === statusFilter);
    if (searchTerm) data = data.filter((v) => v.make.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(data);
  };

  const resetFilter = () => {
    setSearchTerm("");
    setStatusFilter("");
    setFilteredData(vehicles);
  };

  // Modal Handlers
  const openAddModal = () => {
    setCurrentVehicle({ id: null, vehicleID: "", class: "", make: "", condition: "", plate: "", status: "" });
    setShowAddModal(true);
  };

  const openEditModal = (vehicle) => {
    setCurrentVehicle(vehicle);
    setShowEditModal(true);
  };

  const openHealthCheckModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowHealthCheckModal(true);
  };

  const openDeleteModal = (vehicle) => {
    setVehicleToDelete(vehicle);
    setDeleteModal(true);
  };
  
  const closeDeleteModal = () => {
    setDeleteModal(false);
    setVehicleToDelete(null);
  };
  const closeAddModal = () => setShowAddModal(false);
  const closeEditModal = () => setShowEditModal(false);
  const closeHealthCheckModal = () => setShowHealthCheckModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentVehicle({ ...currentVehicle, [name]: value });
  };

  const handleAddVehicle = () => {
    const newVehicle = { ...currentVehicle, id: Date.now() };
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    setFilteredData(updatedVehicles);
    closeAddModal();
  };

  const handleEditVehicle = () => {
    const updatedVehicles = vehicles.map((v) =>
      v.id === currentVehicle.id ? currentVehicle : v
    );
    setVehicles(updatedVehicles);
    setFilteredData(updatedVehicles);
    closeEditModal();
  };

  const handleDeleteVehicle = () => {
    const updatedVehicles = vehicles.filter((v) => v.id !== vehicleToDelete.id);
    setVehicles(updatedVehicles);
    setFilteredData(updatedVehicles);
    closeDeleteModal();
  };
  const entriesPerPage = 7;
  const totalPages = Math.ceil(50 / entriesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const totalEntries = 50;
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="user-management">
      <h2 className="page-title">Manage Inventory</h2>

      {/* Filters */}
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
                    onChange={(e) => setStatusFilter(e.target.value) }
                    onClick={handleFilter}
                  >
                    <option value="">Status</option>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
            <option value="Maintenance">Maintenance</option>
                  </select>
                  <FaChevronDown className="select-icon" />
                </div>
              </div>
      
              <div className="invright">
                <button className="reset-btn" onClick={resetFilter}>
                  Reset Filter
                </button>
                <button className="reset-btn" onClick={() => openAddModal()}>
            <FaPlus /> Add Vehicle
          </button>
              </div>
            </div>
     

      {/* Table */}
      <div className="table-cont">
      <table className="table-inventory">
        <thead>
          <tr>
            <th>Key ID</th>
            <th>Vehicle ID</th>
            <th>Vehicle Class</th>
            <th>Make</th>
            <th>Condition</th>
            <th>Num Plate</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.vehicleID}</td>
              <td>{vehicle.class}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.condition}</td>
              <td>{vehicle.plate}</td>
              <td>
                <div className="inventory-status-indicator">
                  <span className={`inventory-status-square ${vehicle.status.toLowerCase()}`}></span>
                  <span className="inventory-status-text">{vehicle.status}</span>
                </div>
              </td>
              <td>
                <button className="tick-btn" onClick={() => openEditModal(vehicle)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => openDeleteModal(vehicle)}>
                  <FaTrash />
                </button>
                <button className="report-btn" onClick={() => openHealthCheckModal(vehicle)}>
                  <FaNotesMedical />
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
    
      {/* Modal */}
      
       {/* Add Vehicle Modal */}
       {showAddModal && (
          <div className="inventory-modal-overlay">
          <div className="inventory-modal-content">
            <h3>Add New Vehicle</h3>
            <span className="inventory-close-btn" onClick={closeAddModal}>
              &times;
            </span>
            <hr/>
            <div className="inventory-modal-form">
              <div className="inventory-form-row">
                <div className="inventory-form-group">
                  <label>Key ID:</label>
                  <input name="id" placeholder="Enter Key ID" onChange={handleInputChange} />
                </div>
                <div className="inventory-form-group">
                  <label>Vehicle ID:</label>
                  <input name="vehicleID" placeholder="Enter Vehicle ID" onChange={handleInputChange} />
                </div>
              </div>
      
              <div className="inventory-form-row">
                <div className="inventory-form-group">
                  <label>Vehicle Class:</label>
                  <select name="class" onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Economy">Economy</option>
                    <option value="Standard">Standard</option>
                    <option value="Midsize">Midsize</option>
                    <option value="Fullsize SUV">Fullsize SUV</option>
                  </select>
                </div>
                <div className="inventory-form-group">
                  <label>Make:</label>
                  <input name="make" placeholder="Enter Make" onChange={handleInputChange} />
                </div>
              </div>
      
              <div className="inventory-form-row">
                <div className="inventory-form-group">
                  <label>Condition:</label>
                  <select name="condition" onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Need Repair">Need Repair</option>
                  </select>
                </div>
                <div className="inventory-form-group">
                  <label>Number Plate:</label>
                  <input name="plate" placeholder="Enter Number Plate" onChange={handleInputChange} />
                </div>
              </div>
      
              <div className="inventory-form-single">
                <label>Status:</label>
                <select name="status" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
      
              <button className="inventory-save-btn" onClick={handleAddVehicle}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Vehicle Modal */}
      {showEditModal && (
        <div className="inventory-modal-overlay">
          <div className="inventory-modal-content">
            <h3>Edit Vehicle</h3>
            <span className="inventory-close-btn" onClick={closeEditModal}>
              &times;
            </span>
            <hr/>
            <div className="inventory-modal-form">
              <div className="inventory-form-row">
                <div className="inventory-form-group">
                  <label>Key Id:</label>
                  <input
                  name="id"
                  placeholder="Key ID"
                  value={currentVehicle.id}
                  onChange={handleInputChange}
                  />
                </div>
                <div className="inventory-form-group">
                  <label>Vehicle Id:</label>
                  <input name="vehicleID" placeholder="Vehicle ID" value={currentVehicle.vehicleID} onChange={handleInputChange}/>
                </div>
              </div>
              
              <div className="inventory-form-row">
                <div className="inventory-form-group">
                  <label>Vehicle Class:</label>
                  <select name="class" value={currentVehicle.class} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Economy">Economy</option>
                    <option value="Standard">Standard</option>
                    <option value="Midsize">MidSize</option>
                    <option value="Fullsize">FullSize SUV</option>
                  </select>
                </div>
                <div className="inventory-form-group">
                  <label>Make:</label>
                  <input name="make" placeholder="Make" value={currentVehicle.make} onChange={handleInputChange}/>
                </div>
              </div>

              <div className="inventory-form-row">
                <div className="inventory-form-group">
                  <label>Condition:</label>
                  <select name="condition" value={currentVehicle.condition} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Need Repair">Need Repair</option>
                  </select>
                </div>
                <div className="inventory-form-group">
                  <label>Number Plate:</label>
                  <input name="plate" placeholder="Plate" value={currentVehicle.plate} onChange={handleInputChange} />
                </div>
              </div>

              <div className="inventory-form-single">
                <label>Status:</label>
                <select name="status" value={currentVehicle.status} onChange={handleInputChange}>
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
              <button className="inventory-savechanges-btn" onClick={handleEditVehicle}>
              Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      
      
      {/*Delete Modal*/}
      {deleteModal && (
        <div className="inventory-delete-modal-overlay">
          <div className="inventory-delete-modal-content">
            <span className="inventory-delete-close-btn" onClick={closeDeleteModal}>
              &times;
            </span>
            <div className="inventory-delete-modal">
            <div className="delete-icon">
                <BsTrash3 />
              </div>
              <h3>Delete Vehicle</h3>
              <p>Are you sure you want to permanently delete this vehicle?</p>
              <div className="inventory-delete-modal-actions">
                <button className="inventory-delete-cancel-btn" onClick={closeDeleteModal}>
                  No, Keep
                </button>
                <button className="inventory-delete-confirm-btn" onClick={handleDeleteVehicle}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/*HealthCheck*/}
      {showHealthCheckModal && (
        <div className="inventory-modal-overlay">
          <div className="inventory-modal-content">
            <h3>Vehicle Health Check</h3>
            <span className="inventory-health-close-btn" onClick={closeHealthCheckModal}>
              &times;
            </span>
            <hr className="inventory-health-check"/>
            <div className="inventory-health-check-form">
              <h3>Vehicle health status</h3>
              <div className="inventory-form-row">
                <label>Engine Status:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="engine-status" value="good"/>Good
                  </label>
                  <label>
                    <input type="checkbox" name="engine-status" value="issue"/>Issue
                  </label>
                </div>
              </div>

              <div className="inventory-form-row">
                <label>Tire Condition:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="tire-condition" value="good"/>Good
                  </label>
                  <label>
                    <input type="checkbox" name="tire-condition" value="low"/>Low
                  </label>
                </div>
              </div>
               
              <div className="inventory-form-row">
                <label>Break Status:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="break-status" value="good"/>Good
                  </label>
                  <label>
                    <input type="checkbox" name="break-status" value="issue"/>Issue
                  </label>
                </div>
              </div>

              <div className="inventory-form-row">
                <label>Light Status:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="light-status" value="working"/>Working
                  </label>
                  <label>
                    <input type="checkbox" name="light-status" value="faulty"/>Faulty
                  </label>
                </div>
              </div>

              <div className="inventory-form-row">
                <label>Battery Status:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="Battery-status" value="good"/>Good
                  </label>
                  <label>
                    <input type="checkbox" name="Battery-status" value="issue"/>Issue
                  </label>
                </div>
              </div>

              <div className="inventory-form-row">
                <label>Oil Status:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="oil-status" value="good"/>Good
                  </label>
                  <label>
                    <input type="checkbox" name="oil-status" value="change"/>Change
                  </label>
                </div>
              </div>

              <div className="inventory-form-row">
                <label>AC Condition:</label>
                <div class="inventory-checkbox-group">
                  <label>
                    <input type="checkbox" name="ac-conditon" value="good"/>Good
                  </label>
                  <label>
                    <input type="checkbox" name="ac-condition" value="issue"/>Issue
                  </label>
                </div>
              </div>

              <div className="inventory-form-row">
                <label style={{fontSize:"18px",}}>Fuel Level:</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="50"
                  className="slider"
                />
              </div>

              <div className="inventory-form-column">
              <label>Mileage:</label>
                <input name="mileage" placeholder="Enter Milegae in km" onChange={handleInputChange} />
              </div>
              <div className="inventory-modal-actions">
                <button className="maintenance-btn">Needs Maintenance</button>
                <button className="proceed-btn">Proceed to Rent</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageInventory;