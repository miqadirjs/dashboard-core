import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SubMenuItem {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path?: string;
  icon?: string;
  submenu?: SubMenuItem[];
  type?: "label";
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/", icon: "bi bi-house" },
    { name: "Dashboard", path: "/maindashboard", icon: "bi bi-speedometer2" },
    {
      name: "SpeakUp+",
      icon: "bi bi-megaphone",
      submenu: [
        { name: "Overview", path: "/speakup/overview" },
        { name: "My Reports", path: "/speakup/my-reports" },
        { name: "Closed", path: "/speakup/closed" },
      ],
    },
    { type: "label", name: "Admin" },
    { name: "My Clients", path: "/clients", icon: "bi bi-people" },
    { name: "My Users", path: "/users", icon: "bi bi-person-lines-fill" },
    { name: "System Logs", path: "/logs", icon: "bi bi-clipboard-data" },
    { name: "User Guide", path: "/guide", icon: "bi bi-book" },
    { name: "Help", path: "/help", icon: "bi bi-question-circle" },
  ];

  return (
    <div className="sidebar" role="navigation">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <img src="/images/new-logo.png" alt="SpeakUp Logo" />
      </Link>

      <ul className="nav nav-pills flex-column mb-auto mt-3" style={{ paddingBottom: "150px" }}>
        {menuItems.map((item) => (
          <React.Fragment key={`${item.name}-${item.path ?? "label"}`}>
            {item.type === "label" ? (
              <li className="px-3 py-2 adminLabel text-uppercase text-muted small fw-bold">
                {item.name}
              </li>
            ) : (
              <li className="nav-item">
                {item.submenu ? (
                  <>
                    <button
                      className={`nav-link d-flex align-items-center ${
                        activeMenu === item.name || item.submenu.some((sub) => location.pathname === sub.path)
                          ? "active"
                          : ""
                      }`}
                      onClick={() => toggleMenu(item.name)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      aria-expanded={activeMenu === item.name}
                    >
                      <i className={`${item.icon} me-2`}></i>
                      {item.name}
                      <i
                        className={`bi bi-chevron-${activeMenu === item.name ? "down" : "right"} ms-auto`}
                      ></i>
                    </button>
                    <div className={`collapse ${activeMenu === item.name ? "show" : ""}`}>
                      <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        {item.submenu.map((subItem) => (
                          <li key={`${item.name}-${subItem.name}`}>
                            <Link
                              to={subItem.path}
                              className={`nav-link d-flex align-items-center ${
                                location.pathname === subItem.path ? "active" : ""
                              }`}
                              style={{ paddingLeft: "2.5rem" }}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  item.path && (
                    <Link
                      to={item.path}
                      className={`nav-link d-flex align-items-center ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                    >
                      <i className={`${item.icon} me-2`}></i>
                      {item.name}
                    </Link>
                  )
                )}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>

      <span className="fixedBottomLogo">
        <img src="/images/core-logo.png" alt="Core Logo" />
      </span>
    </div>
  );
};

export default Sidebar;