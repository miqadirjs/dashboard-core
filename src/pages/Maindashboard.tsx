import React, { useEffect, useRef, useState } from "react";
import CardChart from "components/charts/CardChart";
import DonutChart from "components/charts/DonutChart";
import ReporterIdentityChart from "components/charts/ReporterIdentityChart";
import TopIncidentTagsChart from "components/charts/TopIncidentTagsChart";
import BarChart from "components/charts/BarChart";
import ReportCaseLoadChart from "components/charts/ReportCaseLoadChart";
import TopOrganizationChart from "components/charts/TopOrganizationChart";
import ReportStage from "components/charts/ReportStage";
import ProtectedDisclosureChart from "components/charts/ProtectedDisclosureChart";
import ReportingChannelChart from "components/charts/ReportingChannelChart";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const Maindashboard: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    // Close menu on outside click
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setShowMenu(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  const cards = [
    {
      title: "New Reports",
      value: 57,
      percentage: "+11.01%",
      color: "#3BA99C",
      data: [10, 20, 15, 30, 25, 40, 30],
    },
    {
      title: "No Of Reports Closed This Period",
      value: 1219,
      percentage: "-0.03%",
      color: "#2D8EFF",
      data: [5, 15, 10, 25, 20, 35, 20],
    },
    {
      title: "Total Reports",
      value: 100,
      percentage: "+15.03%",
      color: "#FBA901",
      data: [8, 12, 10, 18, 22, 28, 35],
    },
    {
      title: "Average Time to Close Reports",
      value: 100,
      percentage: "+15.03%",
      color: "#FBA901",
      data: [8, 12, 10, 18, 22, 28, 35],
    },
  ];

  return (
    <div className="dashboard_main_content mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Dashboard</h3>
        <div className="action_btn_dropdown">
          <button
            className="cta cta_bg_blue d-flex align-items-center gap-2"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            Action <MdOutlineDownloadForOffline />
          </button>
          {showMenu && (
            <div
              className="card_menu position-absolute bg-white shadow-sm p-2"
              style={{ right: 0, top: "100%", zIndex: 10 }}
            >
              <ul className="list-unstyled mb-0">
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Print")}
                >
                  Add New User
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
      <div className="tab-content">
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
              <div className="row g-3">
                {cards.map((card, index) => {
                  const bgClasses = [
                    'bg-card-1', // #7D05E333
                    'bg-card-2', // #07CAAC33
                    'bg-card-3', // #0A82D633
                    'bg-card-4'  // #17501933
                  ];
                  return (
                    <div className="col-12 col-md-6" key={index}>
                      <CardChart {...card} className={`cardChart ${bgClasses[index]}`} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <div className="bg_card">
                <BarChart />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <div className="bg_card">
                <TopOrganizationChart />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <div className="bg_card">
                <ReportStage />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <div className="bg_card">
                <ReporterIdentityChart />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <div className="bg_card">                
                <TopIncidentTagsChart />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <div className="bg_card">
                <ProtectedDisclosureChart />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <div className="bg_card">
                  <ReportingChannelChart />
                </div>
            </div>
            <div className="col-12 mb-5">
                <div className="bg_card">
                  <ReportCaseLoadChart />
                </div>
            </div>
          </div>
      </div>
      </div >
      );
};

export default Maindashboard;