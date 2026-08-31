import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Dashboard", path: "/dashboard" },
    { id: 2, name: "Analytics", path: "/analytics" },
    { id: 3, name: "AI Tools", path: "/ai-tools" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Settings", path: "/settings" },
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const handleNotification = () => {
    alert("You have 3 new notifications.");
  };

  const handleProfile = () => {
    alert("Profile menu clicked.");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo / Brand */}
        <div
          className="navbar-brand"
          onClick={() => handleNavigation("/dashboard")}
        >
          <div className="brand-icon">
            AI
          </div>

          <div className="brand-content">
            <h2>AI SaaS</h2>
            <span>Dashboard</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="navbar-actions">

          {/* Search */}
          <div className="navbar-search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search..."
              aria-label="Search dashboard"
            />
          </div>

          {/* Notification */}
          <button
            className="icon-button"
            onClick={handleNotification}
            aria-label="Notifications"
          >
            🔔
            <span className="notification-badge">3</span>
          </button>

          {/* Profile */}
          <button
            className="profile-button"
            onClick={handleProfile}
            aria-label="Open profile"
          >
            <div className="profile-avatar">
              RG
            </div>

            <div className="profile-info">
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
          </button>

          {/* Mobile Menu */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavigation(item.path);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;