
// src/components/DropdownMenu/DropdownMenu.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../../styles/DropdownMenu.css';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);
  
    return (
      <div className="dropdown" ref={menuRef}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          All Tasks ..
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <Link to={'/'}  className="dropdown-item">All tasks</Link>
            <Link to={'/uncompleted'}  className="dropdown-item">Uncompleted tasks</Link>
            <Link to={'/completed'}  className="dropdown-item">Completed tasks</Link>
          </div>
        )} 
      </div>
    );
  };
  
  export default DropdownMenu;