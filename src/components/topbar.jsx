import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaCommentDots, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from React Icons
import './topbar.css';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3); // Set the number of notifications (default is 3)
  const [messages, setMessages] = useState(5); // Set the number of messages (default is 5)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query submitted:", searchQuery);
    // Add your search functionality here
  };

  return (
    <div className="top-bar">
      <Link to="/" className="logo">Welcome Back Admin</Link>

      {/* Search Bar with Icon inside */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </form>

      {/* Top Menu with Icons */}
      <div className="top-menu">
        <Link to="/notifications" className="top-link">
          <div className="icon-container">
            <FaBell />
            {notifications > 0 && <span className="badge">{notifications}</span>}
          </div>
        </Link>
        <Link to="/chat" className="top-link">
          <div className="icon-container">
            <FaCommentDots />
            {messages > 0 && <span className="badge">{messages}</span>}
          </div>
        </Link>
        <Link to="/logout" className="top-link">
          <FaSignOutAlt />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
