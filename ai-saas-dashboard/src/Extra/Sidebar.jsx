
import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: "🏠",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: "💬",
  },
  {
    title: "Billing",
    path: "/billing",
    icon: "💳",
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>My Workspace</h2>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 My Workspace</p>
      </div>
    </aside>
  );
};

export default Sidebar;
