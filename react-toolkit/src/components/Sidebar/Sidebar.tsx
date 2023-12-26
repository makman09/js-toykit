import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  open?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ open = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(open);

  useEffect(() => {
    // Sync state with parent component if provided
    if (open !== sidebarOpen) {
      setSidebarOpen(open);
    }
  }, [open]);

  return (
    <div
      className={styles.Sidebar}
      data-testid="Sidebar"
      style={open ? { flex: "0 0 250px", width: "250px", } : { flex: "0", width: "0px" }}
    >
      <h2>React Toolkit</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/example">Example</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
