import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose(); 
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span onClick={onClose}>&times;</span>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-link" onClick={() => handleNavigation('/products')}>Baby <FontAwesomeIcon icon={faChevronRight} /></div>
        <div className="sidebar-link" onClick={() => handleNavigation('/products')}>Toddler <FontAwesomeIcon icon={faChevronRight} /></div>
        <div className="sidebar-link" onClick={() => handleNavigation('/products')}>Kid <FontAwesomeIcon icon={faChevronRight} /></div>
        <div className="sidebar-link" onClick={() => handleNavigation('/products')}>New & Popular <FontAwesomeIcon icon={faChevronRight} /></div>
        <div className="sidebar-link" onClick={() => handleNavigation('/products')}>Sale <FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </div>
  );
};

export default Sidebar;
