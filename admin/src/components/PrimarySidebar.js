import React from 'react';

const PrimarySidebar = ({ onItemClick }) => {
  const menuItems = ['Search', 'Assets', 'Users', 'Requests'];

  return (
    <aside className="bg-light primary-sidebar">
      <nav className="navbar">
        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <button className="nav-link" onClick={() => onItemClick(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default PrimarySidebar;