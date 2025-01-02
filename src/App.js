import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import TopBar from "./components/topbar";
import Profile from "./pages/Profile/AdminProfile";
import EditProfile from "./pages/Profile/AdminEdit";
import Dashboard from "./pages/Dashboard/index";
import OTP from "./pages/Login/OTP";
import LanguageSettings from "./pages/Settings/LanguageSettings";
import AppearanceSettings from "./pages/Settings/AppearanceSettings";
import SecurityScreen from "./pages/Settings/SecurityScreen";
import Login from "./pages/Login";
import "./components/layout.css";
import Customer from "./pages/CustomerManagement/customer";
import CustomerDetails from "./pages/CustomerManagement/customerdetails";
import CustomerHistory from "./pages/CustomerManagement/customerhistory";
import ManageInventory from "./pages/InventoryManagement/ManageInventory";
import DispatchManagement from "./pages/DispatchManagement/DispatchManagement";
import AllPayments from "./pages/PaymentManagement/allPayments";
import PaymentSummary from "./pages/PaymentManagement/paymentSummary";
import Rental from "./pages/RentalManagement/Rental";
const App = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // To track which menu is active

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? "" : menu); // Close if already active, open otherwise
  };

  return (
    <Router>
      <Routes>
        {/* Login Route (no Sidebar or TopBar) */}
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />

        {/* Routes with Sidebar and TopBar */}
        <Route
          path="*"
          element={
            <div className="app">
              <Sidebar
                isCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
                activeMenu={activeMenu}
                handleMenuClick={handleMenuClick}
              />
              <div
                className={`main-content ${
                  isSidebarCollapsed ? "sidebar-collapsed" : ""
                }`}
              >
                <TopBar />
                <div className="content-wrapper">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />

                 
                    {/* Customer management */}
                    <Route path="/customer-management" element={<Customer />} />
                    <Route path="/customermanagement/customerdetails" element={<CustomerDetails />} />
                    <Route path="/customermanagement/customerhistory" element={<CustomerHistory />} />

                    {/* Inventory management */}
                    <Route path="/inventory-management" element={<ManageInventory />} />

                    {/* Dispatch management */}
                    <Route path="/dispatch-management" element={<DispatchManagement />} />

                    {/* Rental management */}
                    <Route path="/rental-management" element={<Rental />} />

                    {/* Paymment management */}
                    <Route path="/payment-management/all" element={<AllPayments />} />
                    <Route path="/payment-management/summary" element={<PaymentSummary />} />
                 
                    {/* Profile */}
                    <Route path="/Profile/AdminProfile" element={<Profile />} />
                    <Route path="/Profile/AdminEdit" element={<EditProfile />} />

                    <Route path="/Settings/LanguageSettings" element={<LanguageSettings/>} />
                    <Route path="/Settings/AppearanceSettings" element={<AppearanceSettings/>} />
                    <Route path="/Settings/SecurityScreen" element={<SecurityScreen/>} />
                  </Routes>

                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
