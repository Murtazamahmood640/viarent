import React, { useState } from 'react'
import {
  FaSearch,
  FaChevronDown,
  FaCalendarAlt,
} from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' // import styles for the date picker
import '../DispatchManagement/dispatch-manage.css'

const DispatchManagement = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]) // Start and end date in one state
  const [calendarOpen, setCalendarOpen] = useState(false) // Manage calendar open state

  const [rentRequest, setRentRequest] = useState([
    {
      rentid: 'RT100',
      customerName: 'Najaf Tirmizi',
      pickupDate: '2024-12-20',
      returnDate: '2024-12-25',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Jinnah International Airport',
      returnLocation: 'Gulshan-e-Maymar',
      age: '25+',
      vehicleClass: 'Economy',
      status: 'Pending'
    },
    {
      rentid: 'RT101',
      customerName: 'Shaeroniya Khan',
      pickupDate: '2024-12-02',
      returnDate: '2024-12-15',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Plot 12 Korangi',
      returnLocation: 'Gulshan-e-Iqbal',
      age: '25+',
      vehicleClass: 'Midsize',
      status: 'New Request'
    },
    {
      rentid: 'RT102',
      customerName: 'Ali Ahmed',
      pickupDate: '2024-12-10',
      returnDate: '2024-12-14',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'DHA Phase 8 ',
      returnLocation: 'Clifton Block 4',
      age: '25+',
      vehicleClass: 'Fullsize SUV',
      status: 'Assigned',
      assignedVehicle:'Suzuki Alto',
      keyId:'1023'
    },
    {
      rentid: 'RT103',
      customerName: 'Sara Ahmed',
      pickupDate: '2024-12-14',
      returnDate: '2024-12-19',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Bahadurabad',
      returnLocation: 'Gulshan-e-Iqbal',
      age: '25+',
      vehicleClass: 'Standard',
      status: 'Declined'
    },
    {
      rentid: 'RT104',
      customerName: 'Ahmed Raza',
      pickupDate: '2024-12-02',
      returnDate: '2024-12-04',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Korangi Industrial Area',
      returnLocation: 'Korangi Industrial Area',
      age: '25+',
      vehicleClass: 'Fullsize SUV',
      status: 'Assigned',
      assignedVehicle:'Fortuner',
      keyId:'1022'
    },
    {
      rentid: 'RT105',
      customerName: 'Maha Ali',
      pickupDate: '2024-12-01',
      returnDate: '2024-12-05',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Gulshan-e-Iqbal',
      returnLocation: 'DHA Phase 5',
      age: '25+',
      vehicleClass: 'Economy',
      status: 'Pending'
    },
    {
      rentid: 'RT106',
      customerName: 'Fatima Noor',
      pickupDate: '2024-12-10',
      returnDate: '2024-12-15',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Plot 234 Clifton',
      returnLocation: 'North Nazimabad Block 2',
      age: '25+',
      vehicleClass: 'Midsize',
      status: 'New Request'
    },
    {
      rentid: 'RT107',
      customerName: 'Ali Raza',
      pickupDate: '2024-12-12',
      returnDate: '2024-12-18',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Bahadurabad Block 3',
      returnLocation: 'Gulshan-e-Iqbal Block 5',
      age: '30+',
      vehicleClass: 'Fullsize SUV',
      status: 'Declined'
    },
    {
      rentid: 'RT108',
      customerName: 'Hassan Jamil',
      pickupDate: '2024-12-20',
      returnDate: '2024-12-27',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'DHA Phase 6',
      returnLocation: 'Clifton Block 7',
      age: '25+',
      vehicleClass: 'Economy',
      status: 'Pending'
    },
    {
      rentid: 'RT109',
      customerName: 'Sarah Khan',
      pickupDate: '2024-12-15',
      returnDate: '2024-12-22',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'North Karachi Sector 11B',
      returnLocation: 'PECHS Block 2',
      age: '28+',
      vehicleClass: 'Midsize',
      status: 'New Request'
    },
    {
      rentid: 'RT110',
      customerName: 'Mahira Qureshi',
      pickupDate: '2024-12-05',
      returnDate: '2024-12-10',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Malir Cantt Gate 3',
      returnLocation: 'Korangi Industrial Area',
      age: '35+',
      vehicleClass: 'Economy',
      status: 'Assigned',
      assignedVehicle:'Mira',
      keyId:'1024'
    },
    {
      rentid: 'RT111',
      customerName: 'Ahmed Tirmizi',
      pickupDate: '2024-12-08',
      returnDate: '2024-12-12',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Nazimabad Block 3',
      returnLocation: 'Gulshan-e-Maymar Sector Z',
      age: '30+',
      vehicleClass: 'Standard',
      status: 'Declined'
    },
    {
      rentid: 'RT112',
      customerName: 'Nadia Abbas',
      pickupDate: '2024-12-18',
      returnDate: '2024-12-23',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Federal B Area Block 15',
      returnLocation: 'DHA Phase 2 Extension',
      age: '27+',
      vehicleClass: 'Midsize',
      status: 'New Request'
    },
    {
      rentid: 'RT113',
      customerName: 'Hamza Zafar',
      pickupDate: '2024-12-22',
      returnDate: '2024-12-28',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Shahrah-e-Faisal, Nursery',
      returnLocation: 'Garden East',
      age: '26+',
      vehicleClass: 'Standard',
      status: 'Assigned',
      assignedVehicle:'Toyota Civic',
      keyId:'1027'
    },
    {
      rentid: 'RT114',
      customerName: 'Zainab Ansari',
      pickupDate: '2024-12-10',
      returnDate: '2024-12-14',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Saddar Empress Market',
      returnLocation: 'Defence View Phase 1',
      age: '25+',
      vehicleClass: 'Economy',
      status: 'Pending'
    },
    {
      rentid: 'RT115',
      customerName: 'Tariq Khan',
      pickupDate: '2024-12-15',
      returnDate: '2024-12-20',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Gulistan-e-Jauhar Block 16',
      returnLocation: 'Lyari Town',
      age: '35+',
      vehicleClass: 'Standard',
      status: 'New Request'
    },
    {
      rentid: 'RT116',
      customerName: 'Ayesha Siddiqui',
      pickupDate: '2024-12-03',
      returnDate: '2024-12-07',
      pickupTime: '10:30 PM',
      returnTime: '1:00 PM',
      pickupLocation: 'Korangi Crossing',
      returnLocation: 'Shah Faisal Colony',
      age: '28+',
      vehicleClass: 'Fullsize SUV',
      status: 'Declined'
    }
  ])

  // Dummy data for vehicle classes
  const vehicleClasses = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Standard', label: 'Standard' },
    { value: 'Midsize', label: 'Midsize' },
    { value: 'Fullsize SUV', label: 'Fullsize SUV' }
  ]

  // Dummy data for vehicles
  const vehicles = [
    {
      id: 'VEH001',
      class: 'Economy',
      make: 'Mira',
      keyId: 'KEY001',
      numberPlate: 'ABC123'
    },
    {
      id: 'VEH002',
      class: 'Standard',
      make: 'Honda Civic',
      keyId: 'KEY002',
      numberPlate: 'XYZ456'
    },
    {
      id: 'VEH003',
      class: 'Midsize',
      make: 'Toyota Corolla',
      keyId: 'KEY003',
      numberPlate: 'LMN789'
    },
    {
      id: 'VEH004',
      class: 'Fullsize SUV',
      make: 'Fortuner',
      keyId: 'KEY004',
      numberPlate: 'PQR123'
    },
    {
      id: 'VEH005',
      class: 'Economy',
      make: 'Suzuki Alto',
      keyId: 'KEY005',
      numberPlate: 'STU456'
    }
  ]

  const [selectedClass, setSelectedClass] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  const handleClassChange = event => {
    const selectedClass = event.target.value
    setSelectedClass(selectedClass)
    setSelectedVehicle(null) // Reset vehicle selection when class changes
  }

  const handleVehicleChange = event => {
    const selectedVehicleId = event.target.value
    const vehicle = vehicles.find(v => v.id === selectedVehicleId)
    setSelectedVehicle(vehicle)
  }

  // Filter vehicles based on selected class
  const filteredVehicles = vehicles.filter(
    vehicle => vehicle.class === selectedClass
  )

  const [selectedRequest, setSelectedRequest] = useState(null) // To store the selected request
  const [selectedRentRequest, setSelectedRentRequest] = useState(null) // To store the selected request
  const [showNewReqModal, setShowNewReqModal] = useState(false) // Modal visibility
  const [showAssignVehicleModal, setShowAssignVehicleModal] = useState(false) // Modal visibility
  const [showReasonModal, setShowReasonModal] = useState(false) // Modal visibility
  const [reason, setReason] = useState('')
  const [showViewRentDetailsModal, setShowViewRentDetails] = useState(false) // Modal visibility

  const [updatedRequests, setUpdatedRequests] = useState(rentRequest) // To manage status changes

  const handleViewRequest = rentRequest => {
    setSelectedRequest(rentRequest)
    setShowNewReqModal(true) // Open the New Request modal
  }

  const handleViewRentRequestDetails = rentRequest => {
    setSelectedRentRequest(rentRequest)
    setShowViewRentDetails(true) // Open the New Request modal
  }

  const handleAssignVehicle = rentRequest => {
    setSelectedRequest(rentRequest)
    setShowAssignVehicleModal(true) // Open the Assign Vehicle modal
  }

  const handleReasonModal = () => {
    setShowReasonModal(true) // Open the Assign Vehicle modal
  }

  const handleSubmitReason = reason => {
    console.log('Reason submitted:', reason)
    setShowReasonModal(false) // Close modal after submission
    setReason('') // Clear input field
  }

  const handleCloseModal = () => {
    setShowNewReqModal(false)
    setSelectedClass('');  // Reset the class selection
    setSelectedVehicle(null); // Reset the vehicle selection
    setShowAssignVehicleModal(false)
    setSelectedRequest(null)
    setSelectedRentRequest(null)
    setShowReasonModal(false)
  }

  const entriesPerPage = 7
  const totalPages = Math.ceil(rentRequest.length / entriesPerPage)

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen)
  }
  const resetFilters = () => {
    setSearchTerm('')
    setStatusFilter('')
    setSelectedDateRange([null, null])
    setCurrentPage(1)
  }

  const filteredRentRequest = rentRequest.filter(rentRequest => {
    const matchesSearch = rentRequest.customerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter
      ? rentRequest.status === statusFilter
      : true;
  
    // Date filtering logic for inclusive range
    const [selectedStartDate, selectedEndDate] = selectedDateRange;
  
    // Normalize both selected and rentRequest dates
    const normalizeDate = date => {
      if (!date) return null;
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0); // Set to midnight
      return normalizedDate;
    };
  
    const normalizedSelectedStartDate = normalizeDate(selectedStartDate);
    const normalizedSelectedEndDate = normalizeDate(selectedEndDate);
    const normalizedPickupDate = normalizeDate(rentRequest.pickupDate);
    const normalizedReturnDate = normalizeDate(rentRequest.returnDate);
  
    // Check if the customer's booking overlaps with the selected date range
    const matchesDateRange =
      (!normalizedSelectedStartDate || normalizedReturnDate >= normalizedSelectedStartDate) &&
      (!normalizedSelectedEndDate || normalizedPickupDate <= normalizedSelectedEndDate);
  
    return matchesSearch && matchesStatus && matchesDateRange;
  });
  

  const displayedRentRequest = filteredRentRequest.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  )

  const totalEntries = filteredRentRequest.length
  const startEntry = (currentPage - 1) * entriesPerPage + 1
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries)

  return (
    <div className='user-management'>
      <h2 className='page-title'>Dispatch Management</h2>

      <div className='filters'>
        <div className='left'>
          <div className='passenger-input-container'>
            <input
              type='text'
              className='left-input'
              placeholder='Search'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <FaSearch className='input-icon' />
          </div>

          <div className='passenger-select-container'>
            <select
              className='left-select'
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              <option value=''>Status</option>
              <option value='Pending'>Pending</option>
              <option value='New Request'>New Request</option>
              <option value='Assigned'>Assigned</option>
              <option value='Declined'>Declined</option>
            </select>
            <FaChevronDown className='select-icon' />
          </div>
          <div className='passenger-date-container'>
            <DatePicker
              className='left-date'
              selected={selectedDateRange[0]}
              onChange={dates => setSelectedDateRange(dates)} // Select both start and end date
              startDate={selectedDateRange[0]}
              endDate={selectedDateRange[1]}
              selectsRange
              dateFormat='yyyy-MM-dd'
              placeholderText='Select Date Range'
              open={calendarOpen} // Bind open state to DatePicker
              onClickOutside={() => setCalendarOpen(false)} // Close calendar on outside click
            />
            <FaCalendarAlt className='date-icon' onClick={toggleCalendar} />{' '}
            {/* Icon triggers calendar */}
          </div>
        </div>

        <div className='right'>
          <button className='reset-btn' onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>

      <div className='table-cont'>
        <table className='user-table'>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Customer Name</th>
              <th>Date and Time</th>
              <th>Location</th>
              <th>Age</th>
              <th>Vehicle Class</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedRentRequest.map((rentRequest, index) => (
              <tr key={rentRequest.rentid}>
                <td>{rentRequest.rentid}</td>
                <td>{rentRequest.customerName}</td>
                <td>
                  {rentRequest.pickupDate}, {rentRequest.pickupTime} <br />
                  {rentRequest.returnDate}, {rentRequest.returnTime}
                </td>
                <td>
                  {rentRequest.pickupLocation} <br />
                  {rentRequest.returnLocation}
                </td>
                <td>{rentRequest.age}</td>
                <td>{rentRequest.vehicleClass}</td>
                <td>
                  <span
                    className={`dis-status-badge ${rentRequest.status
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    <span
                      className={`dis-status-box ${rentRequest.status
                        .toLowerCase()
                        .replace(' ', '-')}`}
                    ></span>
                    {rentRequest.status}
                  </span>
                </td>
                <td style={{  verticalAlign: 'middle' }}>
                  <button
                    className='dis-action-button'
                    onClick={() => {
                      switch (rentRequest.status) {
                        case 'New Request':
                          handleViewRequest(rentRequest) // Open "View Request" modal
                          break
                        case 'Pending':
                          handleAssignVehicle(rentRequest) // Open "Assign Vehicle" modal
                          break
                        case 'Declined':
                          handleReasonModal(rentRequest) // Open "Reason" modal
                          break
                        case 'Assigned':
                          handleViewRentRequestDetails(rentRequest) // Open "View Rent Request Details" modal
                          break
                        default:
                          console.error('Invalid rent request status')
                      }
                    }}
                  >
                    {rentRequest.status === 'Pending'
                      ? 'Assign Vehicle'
                      : rentRequest.status === 'New Request'
                      ? 'View Request'
                      : rentRequest.status === 'Assigned'
                      ? 'View Details'
                      : rentRequest.status === 'Declined'
                      ? 'Reason'
                      : 'Action'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='pagination'>
          <div className='entries-info'>
            Showing {startEntry} to {endEntry} of {totalEntries} entries
          </div>
          <div className='entry-buttons'>
            <span
              className='pagination-text'
              onClick={() => handlePageChange(currentPage - 1)}
              style={{ cursor: currentPage > 1 ? 'pointer' : 'not-allowed' }}
            >
              Previous
            </span>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`pagination-link ${
                  currentPage === index + 1 ? 'active' : ''
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <span
              className='pagination-text'
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                cursor: currentPage < totalPages ? 'pointer' : 'not-allowed'
              }}
            >
              Next
            </span>
          </div>
        </div>

        {/* New Request Modal */}
        {showNewReqModal && selectedRequest && (
          <div className='dis-modal-overlay'>
            <div className='dis-modal-content'>
              <div className='dis-modal-header'>
                <h4 className='dis-modal-title'>New Rent Request</h4>
                <button
                  className='dis-close-modal-btn'
                  onClick={() => handleCloseModal(false)} // Hide modal on close
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
                        {selectedRequest.rentid}
                      </p>
                    </div>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Customer Name:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRequest.customerName}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-item'>
                    <p className='dis-modal-details-title'>
                      Pickup and Return Location:
                    </p>
                    <p className='dis-modal-details-text'>
                      {selectedRequest.pickupLocation} <br />
                      {selectedRequest.returnLocation}
                    </p>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>
                        Pickup and Return Time:
                      </p>
                      <p className='dis-modal-details-text'>
                        {selectedRequest.pickupTime} <br />
                        {selectedRequest.returnTime}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>
                        Pickup and Return Date:
                      </p>
                      <p className='dis-modal-details-text'>
                        {selectedRequest.pickupDate}
                        <br />
                        {selectedRequest.returnDate}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Age:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRequest.age}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Vehicle Class:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRequest.vehicleClass}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='dis-modal-buttons'>
                  <button
                    className='dis-decline-button'
                    onClick={handleCloseModal}
                  >
                    Decline
                  </button>
                  <button className='dis-accept-button'>Accept</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Assign Vehicle Modal */}
        {showAssignVehicleModal && selectedRequest && (
          <div className='dis-modal-overlay'>
            <div className='dis-modal-content'>
              <div className='dis-modal-header'>
                <h4 className='dis-modal-title'>Assign Vehicle</h4>
                <button
                  className='dis-close-modal-btn'
                  onClick={() => handleCloseModal(false)} // Hide modal on close
                >
                  &times;
                </button>
              </div>

              <div className='dis-modal-details'>
                <div className='dis-modal-details-info'>
                  <div className='dis-vehicle-class'>
                    <p className='dis-vc-heading'>Choose Vehicle Class</p>
                    <select
                      className='dis-vc-dropdown'
                      value={selectedClass}
                      onChange={handleClassChange}
                    >
                      <option value=''>Select</option>
                      {vehicleClasses.map(vc => (
                        <option key={vc.value} value={vc.value}>
                          {vc.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedClass && (
                    <div className='dis-available-vehicle'>
                      <p className='dis-ac-heading'>Choose a Vehicle</p>
                      <select
                        className='dis-ac-dropdown'
                        onChange={handleVehicleChange}
                        value={selectedVehicle?.id || ''}
                      >
                        <option value=''>Select</option>
                        {filteredVehicles.map(vehicle => (
                          <option key={vehicle.id} value={vehicle.id}>
                            {vehicle.id} - {vehicle.make} ({vehicle.numberPlate}
                            )
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {selectedVehicle && (
                    <div className='dis-vehicle-details'>
                      <div className='dis-vehicle-details-row'>
                        <div className='dis-vehicle-details-item'>
                          <p className='dis-vehicle-details-title'>
                            Vehicle ID:
                          </p>
                          <p className='dis-vehicle-details-text'>
                            {selectedVehicle.id}
                          </p>
                        </div>
                        <div className='dis-vehicle-details-item'>
                          <p className='dis-vehicle-details-title'>
                            Vehicle Class:
                          </p>
                          <p className='dis-vehicle-details-text'>
                            {selectedVehicle.class}
                          </p>
                        </div>
                      </div>

                      <div className='dis-vehicle-details-item'>
                        <p className='dis-vehicle-details-title'>Make:</p>
                        <p className='dis-vehicle-details-text'>
                          {selectedVehicle.make}
                        </p>
                      </div>

                      <div className='dis-vehicle-details-row'>
                        <div className='dis-vehicle-details-item'>
                          <p className='dis-vehicle-details-title'>
                            Number Plate:
                          </p>
                          <p className='dis-vehicle-details-text'>
                            {selectedVehicle.numberPlate}
                          </p>
                        </div>

                        <div className='dis-vehicle-details-item'>
                          <p className='dis-vehicle-details-title'>Key ID:</p>
                          <p className='dis-vehicle-details-text'>
                            {selectedVehicle.keyId}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className='dis-vehicle-modal-buttons'>
                  <button
                    className='dis-vehicle-cancel-button'
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button className='dis-vehicle-assign-button'>Assign</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reason Modal */}
        {showReasonModal && (
          <div className='dis-modal-overlay'>
            <div className='dis-modal-content'>
              <div className='dis-modal-header'>
                <h4 className='dis-modal-title'>Request Declined</h4>
                <button
                  className='dis-close-modal-btn'
                  onClick={() => handleCloseModal(false)}
                >
                  &times;
                </button>
              </div>

              <div className='dis-modal-details'>
                <div className='dis-modal-details-info'>
                  <div className='dis-reason-modal'>
                    <p className='dis-reason-heading'>Add Reason</p>
                    <textarea
                      id='reason'
                      className='reason-input'
                      placeholder='Type your reason here...'
                      value={reason}
                      onChange={e => setReason(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='dis-reason-modal-buttons'>
                  <button
                    className='dis-reason-button'
                    onClick={() => handleSubmitReason(reason)} // Submit reason
                    disabled={!reason.trim()} // Disable button if no input
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Rent Details Modal */}
        {showViewRentDetailsModal && selectedRentRequest && (
          <div className='dis-modal-overlay'>
            <div className='dis-modal-content'>
              <div className='dis-modal-header'>
                <h4 className='dis-modal-title'>View Rent Details</h4>
                <button
                  className='dis-close-modal-btn'
                  onClick={() => handleCloseModal(false)} // Hide modal on close
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
                        {selectedRentRequest.rentid}
                      </p>
                    </div>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Customer Name:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.customerName}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-item'>
                    <p className='dis-modal-details-title'>
                      Pickup and Return Location:
                    </p>
                    <p className='dis-modal-details-text'>
                      {selectedRentRequest.pickupLocation} <br />
                      {selectedRentRequest.returnLocation}
                    </p>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>
                        Pickup and Return Time:
                      </p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.pickupTime} <br />
                        {selectedRentRequest.returnTime}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>
                        Pickup and Return Date:
                      </p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.pickupDate}
                        <br />
                        {selectedRentRequest.returnDate}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Age:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.age}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Vehicle Class:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.vehicleClass}
                      </p>
                    </div>
                  </div>

                  <div className='dis-modal-details-row'>
                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Assigned Vehicle:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.assignedVehicle}
                      </p>
                    </div>

                    <div className='dis-modal-details-item'>
                      <p className='dis-modal-details-title'>Key ID:</p>
                      <p className='dis-modal-details-text'>
                        {selectedRentRequest.keyId}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DispatchManagement
