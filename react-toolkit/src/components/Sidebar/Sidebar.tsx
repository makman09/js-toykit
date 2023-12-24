import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  open?: boolean;
  onToggle?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open = false, onToggle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(open);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (onToggle) {
      onToggle();
    }
  };

  useEffect(() => {
    // Sync state with parent component if provided
    if (open !== sidebarOpen) {
      setSidebarOpen(open);
    }
  }, [open]);

  return (
  <div className={styles.Sidebar} data-testid="Sidebar">
    <h2>React Toolkit</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/example">Example</Link>
      </li>
      {/* Add more links as needed */}
    </ul>
  </div>
  )
};

export default Sidebar;
