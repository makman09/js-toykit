import React, { FC } from 'react';
import './Sidebar.scss';

interface SidebarProps {
  isOpen?: boolean
}

const Sidebar: FC<SidebarProps> = ({ isOpen = false }) => {
  const sidebarStyle = {
    width: isOpen ? '250px' : '0' // Toggle width based on isOpen
  };

  return (
    <div className="sidebar" style={sidebarStyle} data-testid="Sidebar">
      {/* Sidebar content goes here */}
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
