import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBoxes, FaUserFriends, FaTruck, FaMoneyBillAlt, FaCar, FaUserCircle, FaCogs } from "react-icons/fa"; // Icons for relevant pages
import { MdAttachMoney, MdPayment } from "react-icons/md"; // Payment icons
import { AiOutlineDashboard, AiOutlineCar } from "react-icons/ai"; // Dashboard and Car icons
import { RiProfileLine } from "react-icons/ri"; // Profile icon
import "./layout.css";
import logo from "../../src/Assets/Logo/Via-Logo-004.png";
import toggleIcon from "../Assets/SidebarIcons/toogle.png";
import dropdownIcon from "../Assets/SidebarIcons/dropdownicon.png";

const Sidebar = ({
  isCollapsed,
  toggleSidebar,
  activeMenu,
  handleMenuClick,
}) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <button className="toggle-btn" onClick={toggleSidebar}>
          <img
            src={toggleIcon}
            alt="Toggle Icon"
            className={`toggle-icon ${isCollapsed ? "rotate" : ""}`}
          />
        </button>
      </div>
    <div className="sidebar-items">
      {/* Sidebar Menu */}
      <div className="sidebar-links">
        <ul>
 {/* Dashboard */}
 <li className="links">
          <Link to="/dashboard">
            <AiOutlineDashboard /> <span>{isCollapsed ? "" : "Dashboard"}</span>
          </Link>
        </li>

        {/* Inventory Management */}
        <li className="links">
          <Link to="/inventory-management">
            <FaBoxes /> <span>{isCollapsed ? "" : "Inventory Management"}</span>
          </Link>
        </li>

        {/* Customer Management */}
        <li className="links">
          <Link to="/customer-management">
            <FaUserFriends />{" "}
            <span>{isCollapsed ? "" : "Customer Management"}</span>
          </Link>
        </li>

        {/* Dispatch Management */}
        <li className="links">
          <Link to="/dispatch-management">
            <FaTruck /> <span>{isCollapsed ? "" : "Dispatch Management"}</span>
          </Link>
        </li>

        {/* Payment Management */}
        <li>
          <div
            onClick={() => handleMenuClick("payment-management")}
            className={`menu-heading ${
              activeMenu === "payment-management" ? "active" : ""
            }`}
          >
            <div className="left-content">
              <MdAttachMoney />{" "}
              <span>{isCollapsed ? "" : "Payment Management"}</span>
            </div>
            <div className="right-content">
              <img
                src={dropdownIcon}
                alt="Dropdown"
                className={`dropdown-icon ${
                  activeMenu === "payment-management" ? "rotate" : ""
                }`}
              />
            </div>
          </div>
          {activeMenu === "payment-management" && !isCollapsed && (
            <ul className="dropdown">
              <li>
                <Link to="/payment-management/all">
                  <FaMoneyBillAlt />
                  <span>All Payments</span>
                </Link>
              </li>
              <li>
                <Link to="/payment-management/summary">
                  <MdPayment />
                  <span>Payment Summary</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Rental Management */}
        <li className="links">
          <Link to="/rental-management">
            <AiOutlineCar /> <span>{isCollapsed ? "" : "Rental Management"}</span>
          </Link>
        </li>
        </ul>
      </div>
      <ul>
       

          {/* Footer */}
          <div className="sidebar-footer">
          <Link to="/profile">
            <RiProfileLine /> <span>{isCollapsed ? "" : "Profile"}</span>
          </Link>
          <Link to="/settings">
            <FaCogs /> <span>{isCollapsed ? "" : "Settings"}</span>
          </Link>
        </div>
      </ul>
    </div>
      

      
    </div>
  );
};

export default Sidebar;
