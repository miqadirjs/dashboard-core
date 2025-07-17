// components/AddUserModal.tsx
import React, { useState } from "react";

type Tab = "userInfo" | "speakup" | "case" | "dashboard" | "file" | "exit";

interface Props {
  show: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<Props> = ({ show, onClose }) => {
  const [activeTab, setActiveTab] = useState<Tab>("userInfo");
  const [enableAccess, setEnableAccess] = useState(true);

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block addUserModal"
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content" style={{ minHeight: "600px" }}>
          {/* Header */}
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Add New User</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body addUserModal_body d-flex p-0">
            {/* Sidebar */}
            <div
              className="border-end p-3"
              style={{ width: "350px", backgroundColor: "#f8f9fa" }}
            >
              <ul className="nav flex-column nav-pills gap-2">
                <li>
                  <button
                    className={`nav-link ${
                      activeTab === "userInfo" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("userInfo")}
                  >
                    <img src="/images/account_circle.png" alt="" /> User
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${
                      activeTab === "speakup" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("speakup")}
                  >
                    <img src="/images/inbox_customize.png" alt="" /> SpeakUp+ Settings
                    
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${
                      activeTab === "case" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("case")}
                  >
                    <img src="/images/business_center.png" alt="" /> Case+ Settings
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${
                      activeTab === "dashboard" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <img src="/images/bar_chart_4_bars.png" alt="" /> Dashboard+Settings
                  </button>
                </li>
                <li>
                  <button
                    className={`nav-link ${
                      activeTab === "file" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("file")}
                  >
                    <img src="/images/article.png" alt="" /> File+ Settings
                  </button>
                </li>
                <li>
                  <button className={`nav-link ${
                      activeTab === "exit" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("exit")}
                    >
                    <img src="/images/logout_new.png" alt="" /> Exit+Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Content */}
            <div className="p-4 flex-grow-1 w-100">

              {activeTab === "userInfo" && (
                <form className="Add_User_form">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold">User Settings</h5>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={enableAccess}
                        onChange={() => setEnableAccess(!enableAccess)}
                        id="enableAccessSwitch"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="enableAccessSwitch"
                    >
                        Enable Access
                    </label>
                    </div>
                </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      {/* <label htmlFor="fullName" className="form-label">Full Name <span className="text-danger">*</span></label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      {/* <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label> */}
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      {/* <label htmlFor="username" className="form-label">User Name</label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="col-md-6">
                      {/* <label htmlFor="phone" className="form-label">Phone Number</label> */}
                      <div className="input-group">
                        <span className="input-group-text">🇦🇺 +61</span>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Phone no"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    {/* <label htmlFor="jobTitle" className="form-label">User Job Title <span className="text-danger">*</span></label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitle"
                      placeholder="e.g., Product Manager"
                      required
                    />
                  </div>
                </form>
              )}
              {activeTab === "speakup" && (
                <form className="SpeakUp_form">

<div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold">Speakup+ Settings</h5>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={enableAccess}
                        onChange={() => setEnableAccess(!enableAccess)}
                        id="enableAccessSwitch"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="enableAccessSwitch"
                    >
                        Enable Access
                    </label>
                    </div>
                </div>







                  {/* <h5 className="fw-bold mb-3">SpeakUp+ Settings</h5> */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="fw-semibold mb-0">
                      Settings and Restrictions
                    </h6>
                    
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="speak_bg speak_bg_incident">
                        <label className="form-label">
                        Incident Tags(s) <span className="text-danger">*</span>
                      </label>
                      <div className="form-control d-flex align-items-center justify-content-between">
                        <span>
                          Name{" "}
                          <button
                            type="button"
                            className="btn-close btn-sm ms-2"
                          ></button>
                        </span>
                        <span className="dropdown-toggle text-muted small">
                          ▼
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                      <div className="speak_bg">
                        <label className="form-label mb-0">
                        Can Access Restricted Report
                      </label>
                      <div className="form-check form-switch ms-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="accessRestricted"
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                Can Share a report
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="canShare"
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <h6 className="fw-semibold mb-3">
                    Notifications and Settings
                  </h6>

                  <div className="row mb-3">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is received
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportReceived"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is assigned
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportAssigned"
                                defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is shared
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportShared"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is updated
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportUpdated"
                                />
                            </div>
                        </div>
                    </div>
                  </div>
                </form>
              )}
              {activeTab === "case" && (
                <form className="SpeakUp_form">
<div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold">Case+ Settings</h5>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={enableAccess}
                        onChange={() => setEnableAccess(!enableAccess)}
                        id="enableAccessSwitch"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="enableAccessSwitch"
                    >
                        Enable Access
                    </label>
                    </div>
                </div>


                  {/* <h5 className="fw-bold mb-3">Case+ Settings</h5> */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="fw-semibold mb-0">
                      Settings and Restrictions
                    </h6>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="speak_bg speak_bg_incident">
                        <label className="form-label">
                        Incident Tags(s) <span className="text-danger">*</span>
                      </label>
                      <div className="form-control d-flex align-items-center justify-content-between">
                        <span>
                          Name{" "}
                          <button
                            type="button"
                            className="btn-close btn-sm ms-2"
                          ></button>
                        </span>
                        <span className="dropdown-toggle text-muted small">
                          ▼
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                      <div className="speak_bg">
                        <label className="form-label mb-0">
                        Can Access Restricted Report
                      </label>
                      <div className="form-check form-switch ms-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="accessRestricted"
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                Can Share a report
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="canShare"
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <h6 className="fw-semibold mb-3">
                    Notifications and Settings
                  </h6>

                  <div className="row mb-3">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is received
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportReceived"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is assigned
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportAssigned"
                                defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is shared
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportShared"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is updated
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportUpdated"
                                />
                            </div>
                        </div>
                    </div>
                  </div>
                </form>
              )}
              {activeTab === "dashboard" && (
                <form className="SpeakUp_form">
<div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold">Dashboard+ Settings</h5>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={enableAccess}
                        onChange={() => setEnableAccess(!enableAccess)}
                        id="enableAccessSwitch"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="enableAccessSwitch"
                    >
                        Enable Access
                    </label>
                    </div>
                </div>



                  {/* <h5 className="fw-bold mb-3">Dashboard+ Settings</h5> */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="fw-semibold mb-0">
                      Settings and Restrictions
                    </h6>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="speak_bg speak_bg_incident">
                        <label className="form-label">
                        Incident Tags(s) <span className="text-danger">*</span>
                      </label>
                      <div className="form-control d-flex align-items-center justify-content-between">
                        <span>
                          Name{" "}
                          <button
                            type="button"
                            className="btn-close btn-sm ms-2"
                          ></button>
                        </span>
                        <span className="dropdown-toggle text-muted small">
                          ▼
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                      <div className="speak_bg">
                        <label className="form-label mb-0">
                        Can Access Restricted Report
                      </label>
                      <div className="form-check form-switch ms-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="accessRestricted"
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                Can Share a report
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="canShare"
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <h6 className="fw-semibold mb-3">
                    Notifications and Settings
                  </h6>

                  <div className="row mb-3">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is received
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportReceived"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is assigned
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportAssigned"
                                defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is shared
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportShared"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is updated
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportUpdated"
                                />
                            </div>
                        </div>
                    </div>
                  </div>
                </form>
              )}
              {activeTab === "file" && (
                <form className="SpeakUp_form">
<div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold">File+ Settings</h5>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={enableAccess}
                        onChange={() => setEnableAccess(!enableAccess)}
                        id="enableAccessSwitch"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="enableAccessSwitch"
                    >
                        Enable Access
                    </label>
                    </div>
                </div>


                  {/* <h5 className="fw-bold mb-3">File+ Settings</h5> */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="fw-semibold mb-0">
                      Settings and Restrictions
                    </h6>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="speak_bg speak_bg_incident">
                        <label className="form-label">
                        Incident Tags(s) <span className="text-danger">*</span>
                      </label>
                      <div className="form-control d-flex align-items-center justify-content-between">
                        <span>
                          Name{" "}
                          <button
                            type="button"
                            className="btn-close btn-sm ms-2"
                          ></button>
                        </span>
                        <span className="dropdown-toggle text-muted small">
                          ▼
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                      <div className="speak_bg">
                        <label className="form-label mb-0">
                        Can Access Restricted Report
                      </label>
                      <div className="form-check form-switch ms-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="accessRestricted"
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                Can Share a report
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="canShare"
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <h6 className="fw-semibold mb-3">
                    Notifications and Settings
                  </h6>

                  <div className="row mb-3">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is received
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportReceived"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is assigned
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportAssigned"
                                defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is shared
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportShared"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is updated
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportUpdated"
                                />
                            </div>
                        </div>
                    </div>
                  </div>
                </form>
              )}
              {activeTab === "exit" && (
                <form className="SpeakUp_form">
<div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold">Exit+ Settings</h5>
                    <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={enableAccess}
                        onChange={() => setEnableAccess(!enableAccess)}
                        id="enableAccessSwitch"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="enableAccessSwitch"
                    >
                        Enable Access
                    </label>
                    </div>
                </div>


                  {/* <h5 className="fw-bold mb-3">Exit+ Settings</h5> */}

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6 className="fw-semibold mb-0">
                      Settings and Restrictions
                    </h6>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="speak_bg speak_bg_incident">
                        <label className="form-label">
                        Incident Tags(s) <span className="text-danger">*</span>
                      </label>
                      <div className="form-control d-flex align-items-center justify-content-between">
                        <span>
                          Name{" "}
                          <button
                            type="button"
                            className="btn-close btn-sm ms-2"
                          ></button>
                        </span>
                        <span className="dropdown-toggle text-muted small">
                          ▼
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                      <div className="speak_bg">
                        <label className="form-label mb-0">
                        Can Access Restricted Report
                      </label>
                      <div className="form-check form-switch ms-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="accessRestricted"
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                Can Share a report
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="canShare"
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <h6 className="fw-semibold mb-3">
                    Notifications and Settings
                  </h6>

                  <div className="row mb-3">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is received
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportReceived"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is assigned
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportAssigned"
                                defaultChecked
                                />
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-between">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is shared
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportShared"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between mt-3 mt-md-0">
                        <div className="speak_bg">
                            <label className="form-label mb-0">
                                When Report is updated
                            </label>
                            <div className="form-check form-switch ms-3">
                                <input
                                className="form-check-input"
                                type="checkbox"
                                id="reportUpdated"
                                />
                            </div>
                        </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
