import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import ReportTabs from "./ReportTabs";
import { IoSearch } from "react-icons/io5";
import CustomSelect from "components/ui/CustomSelect";

const UploadPage = () => {
  const table1Data = [
    {
      id: 1,
      stage: "New (Unallocated)",
      dateUpdated: "Mar 6, 2025 12:59",
      reporterLogin: "N/A",
      dateSubmitted: "Mar 6, 2025 11:16 AM",
      reportingChannel: "Phone (Transcribed by MSP)",
    },
  ];

  const table2Data = [
    {
      id: 2,
      clientReportOwner: "John Doe",
      DoesthisreportReuire: "N/A",
      RestrictedReport: "N/A",
      TierRating: "N/A",
      AddWatchList: "",
    },
  ];

  const table3Data = [
    {
      id: 3,
      Assessment: "N/A",
      Accessreport: "Cameron Williamson",
      incidenttags: "0321233",
      LinkedReports: "Select Reports",
      ReporterAnonymity: "Fully Anonymous",
    },
  ];
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

  const [selectValues, setSelectValues] = useState<Record<number, string>>({});
  const stageselectOptions = [
    { label: "New (Unallocated)", value: "New (Unallocated)" },
    { label: "In Progress", value: "In Progress" },
    { label: "Closed", value: "Closed" },
  ];

  const naselectOptions = [{ label: "N/A", value: "N/A" }];

  return (
    <div className="mb-8">
      <div className="title_section">
        <div className="d-flex align-items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Report Details
          </h3>
          <div className="search_field mb-0">
            <IoSearch />
            <input type="text" placeholder="Enter Report Name" />
          </div>
        </div>
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
                  Print
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Edit")}
                >
                  Sharing Option
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Delete")}
                >
                  Move to Client
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Delete")}
                >
                  Mark as Out of Scope
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Delete")}
                >
                  Schedule for Closure
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Delete")}
                >
                  People Involved
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="inner_page_scroll">
        <div className="bg_white mb-3">
          <h6>Report ID - 60148275 </h6>
          <p>5 Days</p>
        </div>

        <div className="bg_white mb-3">
          <Box>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Stage
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Date Last Updated
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Reporter Last Login Date
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Date Submitted
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Reporting Channel
                  </th>
                </tr>
              </thead>
              <tbody>
                {table1Data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <CustomSelect
                        id={`stage-${row.id}`}
                        options={stageselectOptions}
                        value={selectValues[row.id] || row.stage}
                        onChange={(e) =>
                          setSelectValues((prev) => ({
                            ...prev,
                            [row.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.dateUpdated}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.reporterLogin}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.reportingChannel}
                    </td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Client Report Owner
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Does this report Reuire a Protechted
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Restricted Report
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Tier Rating
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Add Watch List
                  </th>
                </tr>
              </thead>
              <tbody>
                {table2Data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <CustomSelect
                        id={`clientReportOwner-${row.id}`}
                        options={naselectOptions}
                        value={selectValues[row.id] || row.clientReportOwner}
                        onChange={(e) =>
                          setSelectValues((prev) => ({
                            ...prev,
                            [row.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <CustomSelect
                        id={`DoesthisreportReuire-${row.id}`}
                        options={naselectOptions}
                        value={selectValues[row.id] || row.DoesthisreportReuire}
                        onChange={(e) =>
                          setSelectValues((prev) => ({
                            ...prev,
                            [row.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <CustomSelect
                        id={`RestrictedReport-${row.id}`}
                        options={naselectOptions}
                        value={selectValues[row.id] || row.RestrictedReport}
                        onChange={(e) =>
                          setSelectValues((prev) => ({
                            ...prev,
                            [row.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <CustomSelect
                        id={`TierRating-${row.id}`}
                        options={naselectOptions}
                        value={selectValues[row.id] || row.TierRating}
                        onChange={(e) =>
                          setSelectValues((prev) => ({
                            ...prev,
                            [row.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.AddWatchList}
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                        <label
                          className="form-check-label"
                        >
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    (MSP) Assessment
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    User With Access to Report
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Incident Tag(s)
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Linked Reports
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Reporter Anonymity
                  </th>
                </tr>
              </thead>
              <tbody>
                {table3Data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <CustomSelect
                        id={`Assessment-${row.id}`}
                        options={naselectOptions}
                        value={selectValues[row.id] || row.Assessment}
                        onChange={(e) =>
                          setSelectValues((prev) => ({
                            ...prev,
                            [row.id]: e.target.value,
                          }))
                        }
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.Accessreport}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.incidenttags}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.LinkedReports}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.ReporterAnonymity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </div>
        <ReportTabs />
      </div>
    </div>
  );
};

export default UploadPage;
