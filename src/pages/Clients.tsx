import React, { useState } from "react";
import CardChart from "components/charts/CardChart";
import ClientsCard from "components/ui/ClientsCard";
import { FaList, FaThLarge } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import DataTable from "components/tables/DataTable";
import { clientsColumns } from "components/tables/clientsColumn";

const Clients: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTab, setSelectedTab] = useState<string>("active");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const cards = [
    {
      title: "Total Active Clients",
      value: 57,
      percentage: "+11.01%",
      color: "#3BA99C",
      data: [10, 20, 15, 30, 25, 40, 30],
    },
    {
      title: "Total Active Users",
      value: 1219,
      percentage: "-0.03%",
      color: "#2D8EFF",
      data: [5, 15, 10, 25, 20, 35, 20],
    },
    {
      title: "Total User Logged-in this month",
      value: 100,
      percentage: "+15.03%",
      color: "#FBA901",
      data: [8, 12, 10, 18, 22, 28, 35],
    },
  ];

  const rows = [
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
    {
      Organisation: "Abergeldie Complex Ins",
      activeUser: "10",
      Licenses: "5/10",
      report: "200",
      incidenttags: "35",
      Contact: "Ivan Smith",
      Status: "Active",
    },
  ];

  const clientcardData = [
    {
      imageSrc: "/images/client_img1.png",
      usedUsers: 5,
      totalUsers: 20,
      description: "Number of Users",
      reportTotal: 200,
      reportDescription: "Reports",
    },
    {
      imageSrc: "/images/client_img.png",
      usedUsers: 15,
      totalUsers: 30,
      description: "Team Members",
      reportTotal: 200,
      reportDescription: "Reports",
    },
    {
      imageSrc: "/images/client_img2.png",
      usedUsers: 8,
      totalUsers: 10,
      description: "Active Licenses",
      reportTotal: 200,
      reportDescription: "Reports",
    },
    {
      imageSrc: "/images/client_img3.png",
      usedUsers: 16,
      totalUsers: 40,
      description: "Active Licenses",
      reportTotal: 200,
      reportDescription: "Reports",
    },
  ];

  return (
    <div className="myClients_wrapper mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">My Clients</h3>

        {/* Tab Buttons */}
        <div className="active_inactiveTab nav nav-tabs" role="tablist">
          <button
            className={`nav-link ${selectedTab === "active" ? "active" : ""}`}
            onClick={() => setSelectedTab("active")}
          >
            Active
          </button>
          <button
            className={`nav-link ${
              selectedTab === "in-progress" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("in-progress")}
          >
            In-Progress
          </button>
          <button
            className={`nav-link ${selectedTab === "inactive" ? "active" : ""}`}
            onClick={() => setSelectedTab("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* Active Tab Content */}
        <div
          className={`tab-pane fade ${
            selectedTab === "active" ? "show active" : ""
          }`}
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="row g-3">
            {cards.map((card, index) => (
              <div className="col-md-3" key={index}>
                <CardChart {...card} />
              </div>
            ))}
            <div className="col-md-3">
              <div className="card custom-add-card text-center">
                <div className="card-body">
                  <div className="plus-icon">
                    <img src="/images/add_circle.png" alt="circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter and View Toggle Section */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-2">
            {/* Filter Button */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {/* Search Input */}
              <input
                type="search"
                placeholder="Search..."
                className="form-control"
                style={{
                  width: "200px",
                  padding: "8px 12px",
                  marginRight: "5px",
                }}
              />

              {/* Filter Button */}
              <button
                className="btn d-flex align-items-center filter__input"
                onClick={toggleMenu}
                style={{
                  backgroundColor: "#07caac",
                  color: "white",
                  padding: "6px 12px",
                }}
              >
                <GiSettingsKnobs />
                {menuOpen && (
                  <div
                    className="card_menu position-absolute bg-white shadow-sm p-2"
                    style={{ right: 0, top: "100%", zIndex: 10 }}
                  >
                    <ul className="list-unstyled mb-0">
                      <li
                        className="menu_item py-1 px-2"
                        onClick={() => alert("View Details")}
                      >
                        View Details
                      </li>
                      <li
                        className="menu_item py-1 px-2"
                        onClick={() => alert("Edit")}
                      >
                        Edit
                      </li>
                      <li
                        className="menu_item py-1 px-2"
                        onClick={() => alert("Delete")}
                      >
                        Delete
                      </li>
                    </ul>
                  </div>
                )}
              </button>

              {/* Alphabet Bar */}
              <div className="alphabet_bar d-flex flex-wrap gap-2">
                {Array.from({ length: 26 }, (_, i) =>
                  String.fromCharCode(65 + i)
                ).map((letter) => (
                  <span
                    key={letter}
                    className="px-2 py-1 border rounded"
                    style={{ cursor: "pointer" }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            {/* View Toggle */}
            <div className="d-flex align-items-center gap-2">
              {viewMode === "list" ? (
                <button className="btn" onClick={() => setViewMode("grid")}>
                  <FaThLarge />
                </button>
              ) : (
                <button className="btn" onClick={() => setViewMode("list")}>
                  <FaList />
                </button>
              )}
            </div>
          </div>

          {/* Clients View for Active Tab */}
          <div className="mt-5">
            {viewMode === "grid" ? (
              <div className="row">
                {clientcardData.map((data, index) => (
                  <div key={index} className="col-12 col-md-6 mb-3">
                    <ClientsCard
                      {...data}
                      onSwitch={() =>
                        console.log("Switching account:", data.description)
                      }
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="list-view">
                <div className="bg_white">
          <DataTable
            rows={rows}
            columns={clientsColumns}
            getRowId={(row) => row.Organisation}
          />
        </div>
              </div>
            )}
          </div>
        </div>

        {/* In-Progress and Inactive Tab Content */}
        <div
          className={`tab-pane fade ${
            selectedTab === "in-progress" ? "show active" : ""
          }`}
          role="tabpanel"
          aria-labelledby="nav-in-progress-tab"
        >
          <div className="row">
            {clientcardData.map((data, index) => (
              <div key={index} className="col-12 col-md-6 mb-3">
                <ClientsCard
                  {...data}
                  onSwitch={() =>
                    console.log("Switching account:", data.description)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            selectedTab === "inactive" ? "show active" : ""
          }`}
          role="tabpanel"
          aria-labelledby="nav-inactive-tab"
        >
          <div className="row">
            {clientcardData.map((data, index) => (
              <div key={index} className="col-12 col-md-6 mb-3">
                <ClientsCard
                  {...data}
                  onSwitch={() =>
                    console.log("Switching account:", data.description)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
