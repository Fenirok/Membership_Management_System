import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUserFriends, FaSignOutAlt } from "react-icons/fa";
import "/src/styles/Sidebar.css"; // Sidebar-specific CSS

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    if (menu === "dashboard") navigate("/dashboard");
    if (menu === "members") navigate("/members");
    if (menu === "logout") navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="https://via.placeholder.com/60" alt="Profile" className="profile-pic" />
        <p>Good Evening 🌙</p>
        <strong>admin</strong>
      </div>
      <div className="sidebar-menu">
        <button className={`menu-item ${activePage === "dashboard" ? "active" : ""}`} onClick={() => handleMenuClick("dashboard")}>
          <FaHome className="icon" /> Dashboard
        </button>
        <button className={`menu-item ${activePage === "members" ? "active" : ""}`} onClick={() => handleMenuClick("members")}>
          <FaUserFriends className="icon" /> Members
        </button>
        <button className="menu-item logout" onClick={() => handleMenuClick("logout")}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
