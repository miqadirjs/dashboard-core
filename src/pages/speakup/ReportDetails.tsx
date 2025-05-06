import React from "react";
import { Box } from "@mui/material";
import {
  MdOutlineDownloadForOffline,
} from "react-icons/md";
import ReportTabs from "./ReportTabs";

const UploadPage = () => {

  const table1Data = [
    {
      id: 1,
      stage: "New (Unallocated)",
      dateUpdated: "Mar 6, 2025 12:59",
      reporterLogin: "N/A",
    },
  ];

  const table2Data = [
    {
      id: 2,
      dateSubmitted: "Mar 6, 2025 11:16 AM",
      reportingChannel: "Phone (Transcribed by MSP)",
      clientReportOwner: "John Doe",
    },
  ];

  const table3Data = [
    {
      id: 3,
      requiresAssessment: "Yes",
      restrictedReport: "No",
      tierRating: "High",
    },
  ];

  return (
    <div className="mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Report Details
        </h3>
        <div className="cta_btn_sect">
          <button className="cta cta_bg_blue">
            Action <MdOutlineDownloadForOffline />
          </button>
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
                </tr>
              </thead>
              <tbody>
                {table1Data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.stage}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.dateUpdated}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.reporterLogin}
                    </td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Date Submitted
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Reporting Channel
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Client Report Owner
                  </th>
                </tr>
              </thead>
              <tbody>
                {table2Data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.dateSubmitted}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.reportingChannel}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.clientReportOwner}
                    </td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Requires Assessment
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Restricted Report
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Tier Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {table3Data.map((row) => (
                  <tr key={row.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.requiresAssessment}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.restrictedReport}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {row.tierRating}
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
