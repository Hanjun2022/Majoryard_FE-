import React, { useState, useEffect } from "react";
import MemberCard from "../element/MemberCard";
import members from "../api/member.json";
import "./MemberCardList.css";

const MemberCardList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearchClick = () => {
    const filtered = members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.id.toString().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  };

  return (
    <div>
      <div className="search-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="이름 혹은 ID 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearchClick}>
            검색
          </button>
        </div>
      </div>
      {filteredMembers.map((member) => (
        <MemberCard key={member.id} userData={member} />
      ))}
    </div>
  );
};

export default MemberCardList;