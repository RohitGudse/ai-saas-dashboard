
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Sidebar Navigation Configuration
const navigationGroups = [
  {
    heading: "MAIN MENU",
    items: [
      {
        id: 1,
        title: "Dashboard",
        path: "/",
        icon: "🏠",
        description: "View workspace overview",
      },
      {
        id: 2,
        title: "Analytics",
        path: "/analytics",
        icon: "📊",
        description: "Check performance reports",
      },
      {
        id: 3,
        title: "Chat",
        path: "/chat",
        icon: "💬",
        description: "Manage conversations",
        badge: "5",
      },
      {
        id: 4,
        title: "Projects",
        path: "/projects",
        icon: "📁",
        description: "Manage your projects",
      },
    ],
  },
  {
    heading: "MANAGEMENT",
    items: [
      {
        id: 5,
        title: "Team Members",
        path: "/team",
        icon: "👥",
        description: "Manage workspace users",
      },
      {
        id: 6,
        title: "Tasks",
        path: "/tasks",
        icon: "✅",
        description: "Track assigned tasks",
      },
      {
        id: 7,
        title: "Calendar",
        path: "/calendar",
        icon: "📅",
        description: "View upcoming events",
      },
      {
        id: 8,
        title: "Billing",
        path: "/billing",
        icon: "💳",
        description: "Manage payments",
      },
    ],
  },
  {
    heading: "PREFERENCES",
    items: [
      {
        id: 9,
        title: "Settings",
        path: "/settings",
        icon: "⚙️",
        description: "Customize your workspace",
      },
      {
        id: 10,
        title: "Help Center",
        path: "/help",
        icon: "❓",
        description: "Get support and help",
      },
    ],
  },
];

// Reusable Sidebar Header
const SidebarHeader = () => {
  return (
    <div className="sidebar-header">
      <div className="workspace-logo">W</div>

      <div className="workspace-info">
        <h2>My Workspace</h2>
        <span>Professional Workspace</span>
      </div>
    </div>
  );
};

// Reusable Navigation Link
const SidebarMenuItem = ({ item, onNavigate }) => {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      onClick={onNavigate}
      title={item.description}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? "active" : ""}`
      }
    >
      <span className="menu-icon">{item.icon}</span>

      <span className="menu-title">{item.title}</span>

      {item.badge && (
        <span className="menu-badge">
          {item.badge}
        </span>
      )}

      <span className="menu-arrow">›</span>
    </NavLink>
  );
};

// Reusable Navigation Group
const SidebarNavigationGroup = ({
  group,
  onNavigate,
}) => {
  return (
    <div className="sidebar-group">
      <h4 className="sidebar-group-heading">
        {group.heading}
      </h4>

      <div className="sidebar-group-items">
        {group.items.map((item) => (
          <SidebarMenuItem
            key={item.id}
            item={item}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
};

// Workspace User Profile
const SidebarProfile = () => {
  return (
    <div className="sidebar-profile">
      <div className="profile-avatar">
        RG
      </div>

      <div className="profile-details">
        <h4>Rohit Gudse</h4>
        <p>Administrator</p>
      </div>

      <button
        type="button"
        className="profile-menu-button"
        aria-label="Profile options"
      >
        ⋮
      </button>
    </div>
  );
};

// Sidebar Footer
const SidebarFooter = () => {
  return (
    <footer className="sidebar-footer">
      <p>© 2026 My Workspace</p>
      <span>Version 2.0.0</span>
    </footer>
  );
};

// Main Sidebar Component
const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigation = () => {
    setIsMobileOpen(false);
  };

  const toggleSidebar = () => {
    setIsMobileOpen((previousState) => !previousState);
  };

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        aria-expanded={isMobileOpen}
      >
        ☰
      </button>

      {isMobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={handleNavigation}
          aria-hidden="true"
        />
      )}

      <aside
        className={`sidebar ${
          isMobileOpen ? "sidebar-open" : ""
        }`}
      >
        <SidebarHeader />

        <nav
          className="sidebar-menu"
          aria-label="Main navigation"
        >
          {navigationGroups.map((group) => (
            <SidebarNavigationGroup
              key={group.heading}
              group={group}
              onNavigate={handleNavigation}
            />
          ))}
        </nav>

        <div className="sidebar-bottom">
          <SidebarProfile />
          <SidebarFooter />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
