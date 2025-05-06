import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle, FaRegStar } from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosNotificationsOutline } from 'react-icons/io';

const Header: React.FC = () => {
  return (
    <div className="dashboard-header">
      <div className="header-left">
        <MdOutlineSpaceDashboard />
        <FaRegStar />
        <h1 className="dashboard-title">Dashboards / </h1>
        <span className="dashboard-default">Default</span>
      </div>
      <div className="header-right">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
        <div className="notf">
          <IoIosNotificationsOutline />
        </div>
        <div className="user-profile">
          <FaUserCircle className="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;