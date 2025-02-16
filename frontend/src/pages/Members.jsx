import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "/src/styles/Members.css";

const Members = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch members from the backend
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/members`);
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  // Filter members based on search input
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm)
  );

  return (
    <div className="members-container">
      <Sidebar activePage="members" />

      <main className="members-content">
        <header className="header">
          <h2>Members Management Section</h2>
          <div className="buttons-container">
            <button className="add-member">➕ Add New Member</button>
            <button className="membership">📜 Membership</button>
          </div>
        </header>

        <button className="back-button" onClick={() => navigate("/dashboard")}>
          ⬅ Back to Dashboard
        </button>

        <input
          type="text"
          placeholder="🔍 Search by Name or Mobile No"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="members-grid">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div key={member._id} className={`member-card ${member.status}`}>
                <div className="member-info">
                  <img src={member.img || "https://via.placeholder.com/100"} alt={member.name} className="member-img" />
                  <div className="member-details">
                    <h3>{member.name}</h3>
                    <p>📞 {member.phone}</p>
                    <p>📅 Next Bill Date: {member.nextBill}</p>
                  </div>
                </div>
                <span className={`status-dot ${member.status}`} />
              </div>
            ))
          ) : (
            <p className="no-members">No members found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Members;
