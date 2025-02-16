import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPeopleFill, BsGraphUp, BsAlarmFill, BsExclamationCircleFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar"; // Import Sidebar component
import "/src/styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Reusable Sidebar */}
      <Sidebar activePage="dashboard" />

      {/* Main Content */}
      <main className="dashboard-content">
        <nav className="dashboard-navbar">
          <button className="menu-toggle"><IoMdMenu /></button>
          <div className="profile-icon">
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
        </nav>

        <div className="cards-container">
          <div className="dashboard-card gradient1">
            <BsPeopleFill className="card-icon" />
            <p>Joined Members</p>
          </div>
          <div className="dashboard-card gradient2">
            <BsGraphUp className="card-icon" />
            <p>Monthly Joined</p>
          </div>
          <div className="dashboard-card gradient3">
            <BsAlarmFill className="card-icon" />
            <p>Expiring within 3 days</p>
          </div>
          <div className="dashboard-card gradient4">
            <BsAlarmFill className="card-icon" />
            <p>Expiring within 4-7 days</p>
          </div>
          <div className="dashboard-card gradient5">
            <BsExclamationCircleFill className="card-icon" />
            <p>Expired</p>
          </div>
          <div className="dashboard-card gradient6">
            <BsExclamationCircleFill className="card-icon" />
            <p>Inactive Members</p>
          </div>
        </div>

        <footer className="dashboard-footer">
          Contact Developer for any Technical Error at +917295086518
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
