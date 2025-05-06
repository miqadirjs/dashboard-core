import { useState } from "react";
import { BiSolidReport } from "react-icons/bi";
import {
  MdOutlineAssessment,
  MdOutlineCases,
  MdOutlineEditNote,
  MdOutlineLogin,
} from "react-icons/md";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";
import { PiCirclesThreeBold } from "react-icons/pi";
import { CgAttachment } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { Box } from "@mui/material";
import CustomFileUploader from "components/ui/CustomFileUploader";

const ReportTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleFilesAccepted = (files: File[]) => {
    console.log(files);
    // Process files here (e.g., send them to an API or store them)
  };

  const table4Data = [
    {
      id: 4,
      chooseidentity: "Choose how you’d like to be Identified.",
      BeforeYouStart:
        "Does your report involve one or more of the following people?",
    },
  ];

  const table5Data = [
    {
      id: 5,
      FullyAnonymous:
        "Please provide further information as to why the individual/s you selected should not receive your report.",
      NotApplicable:
        "Are you located outside of Australia? If yes please note that any information you provide via this platform will be transferred to Australia for assessment and processing of your report.",
    },
  ];

  return (
    <div className="report_details_tab">
      <div
        className="nav nav-tabs report_detail_all_tabs"
        id="nav-tab"
        role="tablist"
      >
        <button
          className={`nav-link ${tabIndex === 0 ? "active" : ""}`}
          id="nav-originalreport-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-originalreport"
          type="button"
          role="tab"
          aria-controls="nav-originalreport"
          aria-selected={tabIndex === 0 ? "true" : "false"}
          onClick={() => setTabIndex(0)}
        >
          <BiSolidReport /> <span>Original Report</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 1 ? "active" : ""}`}
          id="nav-assessment-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-assessment"
          type="button"
          role="tab"
          aria-controls="nav-assessment"
          aria-selected={tabIndex === 1 ? "true" : "false"}
          onClick={() => setTabIndex(1)}
        >
          <MdOutlineAssessment /> <span>Assessment</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 2 ? "active" : ""}`}
          id="nav-caseofficer-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-caseofficer"
          type="button"
          role="tab"
          aria-controls="nav-caseofficer"
          aria-selected={tabIndex === 2 ? "true" : "false"}
          onClick={() => setTabIndex(2)}
        >
          <MdOutlineCases /> <span>Case Officer Communication</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 3 ? "active" : ""}`}
          id="nav-filenotes-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-filenotes"
          type="button"
          role="tab"
          aria-controls="nav-filenotes"
          aria-selected={tabIndex === 3 ? "true" : "false"}
          onClick={() => setTabIndex(3)}
        >
          <MdOutlineEditNote /> <span>File Notes</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 4 ? "active" : ""}`}
          id="nav-msp-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-msp"
          type="button"
          role="tab"
          aria-controls="nav-msp"
          aria-selected={tabIndex === 4 ? "true" : "false"}
          onClick={() => setTabIndex(4)}
        >
          <PiCirclesThreeBold /> <span>MSP in-Confidence</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 5 ? "active" : ""}`}
          id="nav-attachment-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-attachment"
          type="button"
          role="tab"
          aria-controls="nav-attachment"
          aria-selected={tabIndex === 5 ? "true" : "false"}
          onClick={() => setTabIndex(5)}
        >
          <CgAttachment /> <span>Attachments</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 6 ? "active" : ""}`}
          id="nav-caseinfo-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-caseinfo"
          type="button"
          role="tab"
          aria-controls="nav-caseinfo"
          aria-selected={tabIndex === 6 ? "true" : "false"}
          onClick={() => setTabIndex(6)}
        >
          <FaBriefcase /> <span>Case Information</span>
        </button>
        <button
          className={`nav-link ${tabIndex === 7 ? "active" : ""}`}
          id="nav-logs-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-logs"
          type="button"
          role="tab"
          aria-controls="nav-logs"
          aria-selected={tabIndex === 7 ? "true" : "false"}
          onClick={() => setTabIndex(7)}
        >
          <MdOutlineLogin /> <span>Logs</span>
        </button>
      </div>

      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${tabIndex === 0 ? "show active" : ""}`}
          id="nav-originalreport"
          role="tabpanel"
          aria-labelledby="nav-originalreport-tab"
        >
          <div className="original_report_tab_data">
            <div className="bg_white mb-3">
              <Box>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                        Choose Identity
                      </th>
                      <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                        Before You Start
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {table4Data.map((row) => (
                      <tr key={row.id}>
                        <td
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          {row.chooseidentity}
                        </td>
                        <td
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          {row.BeforeYouStart}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                        Fully Anonymous
                      </th>
                      <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                        Not Applicable
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {table5Data.map((row) => (
                      <tr key={row.id}>
                        <td
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          {row.FullyAnonymous}
                        </td>
                        <td
                          style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                          {row.NotApplicable}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 1 ? "show active" : ""}`}
          id="nav-assessment"
          role="tabpanel"
          aria-labelledby="nav-assessment-tab"
        >
          <div className="bg_white">Assessment</div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 2 ? "show active" : ""}`}
          id="nav-caseofficer"
          role="tabpanel"
          aria-labelledby="nav-caseofficer-tab"
        >
          <div className="bg_white">
            <div className="row">
              <div className="col-12 col-md-6">
                <CustomFileUploader onFilesAccepted={handleFilesAccepted} />
              </div>
              <div className="col-12 col-md-6">
                <div className="user_card bg_gray">
                  <div className="user_card_header">
                    <div className="user_card_left">
                      <span className="userProfile">
                        <img src="/images/user.png" alt="user" />
                      </span>
                      <span className="userDetail">
                        <p className="name">Ivan Smith (Administrator)</p>
                        <p className="desc">Apr 2 2025 2:15pm</p>
                      </span>
                    </div>
                    <div className="user_card_right">
                      <button className="circle_btn">
                        <RiEdit2Fill />
                      </button>
                      <button className="circle_btn">
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                  <div className="user_card_body">
                    <p className="para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 3 ? "show active" : ""}`}
          id="nav-filenotes"
          role="tabpanel"
          aria-labelledby="nav-filenotes-tab"
        >
          <div className="bg_white">{/* File Notes content */}</div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 4 ? "show active" : ""}`}
          id="nav-msp"
          role="tabpanel"
          aria-labelledby="nav-msp-tab"
        >
          <div className="bg_white">{/* MSP in-Confidence content */}</div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 5 ? "show active" : ""}`}
          id="nav-attachment"
          role="tabpanel"
          aria-labelledby="nav-attachment-tab"
        >
          <div className="bg_white">{/* Attachments content */}</div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 6 ? "show active" : ""}`}
          id="nav-caseinfo"
          role="tabpanel"
          aria-labelledby="nav-caseinfo-tab"
        >
          <div className="bg_white">{/* Case Information content */}</div>
        </div>

        <div
          className={`tab-pane fade ${tabIndex === 7 ? "show active" : ""}`}
          id="nav-logs"
          role="tabpanel"
          aria-labelledby="nav-logs-tab"
        >
          <div className="bg_white">{/* Logs content */}</div>
        </div>
      </div>
    </div>
  );
};

export default ReportTabs;
