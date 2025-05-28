import React, { useEffect, useRef, useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import DataTable from "components/tables/DataTable";
import { IoSearch } from "react-icons/io5";
import CustomCheckbox from "components/ui/CustomCheckbox";
import CustomSelect from "components/ui/CustomSelect";
import { overviewColumns } from "components/tables/overviewColumns";

const rows = [
  {
    id: 1,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 2,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Review",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 3,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 4,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Review",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 5,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 6,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 7,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 8,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 9,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 10,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 11,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
  {
    id: 12,
    organization: "Transport for NSW",
    reportid: "60148275",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
    TierRating: "Tier2"
  },
];

const selectConfigs = [
  {
    id: "client-org",
    label: "Client Organization",
    options: [
      { value: "", label: "Select Organization" },
      { value: "1", label: "Org One" },
      { value: "2", label: "Org Two" },
    ],
  },
  {
    id: "report-source",
    label: "Report Source",
    options: [
      { value: "", label: "Select Source" },
      { value: "1", label: "Email" },
      { value: "2", label: "Hotline" },
    ],
  },
  {
    id: "status",
    label: "Report Status",
    options: [
      { value: "", label: "Select Status" },
      { value: "open", label: "Open" },
      { value: "closed", label: "Closed" },
    ],
  },
];

const Overview: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});

  const handleSelectChange = (id: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [id]: value }));
  };

  const checkboxList = [
    { id: "Check1", label: "Client Organisation" },
    { id: "Check2", label: "Report Id" },
    { id: "Check3", label: "Report Source" },
    { id: "Check4", label: "Date Submitted" },
    { id: "Check5", label: "Tier Rating" },
    { id: "Check6", label: "Incident Tags" },
    { id: "Check7", label: "Restricted Report" },
    { id: "Check8", label: "Protected Disclosure Assessment" },
    { id: "Check9", label: "Reporter Last Login Date" },
    { id: "Check10", label: "Date Last Updated" },
    { id: "Check11", label: "Date Closed" },
    { id: "Check12", label: "Client Report Owner" },
    { id: "Check13", label: "Report Stage" },
    { id: "Check14", label: "Reporting Channel" },
    { id: "Check15", label: "Moved to Client" },
    { id: "Check16", label: "Reporter Anonymity" },
  ];

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    () =>
      checkboxList.reduce((acc, item) => {
        acc[item.id] = false;
        return acc;
      }, {} as { [key: string]: boolean })
  );

  const isAllChecked = Object.values(checkedItems).every(Boolean);

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const updated = Object.keys(checkedItems).reduce((acc, key) => {
      acc[key] = checked;
      return acc;
    }, {} as { [key: string]: boolean });
    setCheckedItems(updated);
  };

  const handleCheckItem =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems((prev) => ({
        ...prev,
        [id]: e.target.checked,
      }));
    };

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

  return (
    <div className="mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview</h3>
        <div className="cta_btn_sect">
          <button className="cta cta_bg_green">
            Add New Report <TbReportSearch />
          </button>

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
      </div>
      <div className="inner_page_scroll">
        <div className="bg_white mb-3 pb-0">
          <div className="title_section">
            <h3 className="mb-0">New Report This Period</h3>
          </div>
        </div>
        <div className="bg_white mb-3">
          <div className="custom_check_section">
            <CustomCheckbox
              id="Checkall"
              label="Select All"
              checked={isAllChecked}
              onChange={handleCheckAll}
            />
          </div>
          <div className="custom_check_section">
            {checkboxList.map((item) => (
              <CustomCheckbox
                key={item.id}
                id={item.id}
                label={item.label}
                checked={checkedItems[item.id]}
                onChange={handleCheckItem(item.id)}
              />
            ))}
          </div>
        </div>
        <div className="bg_white mb-3 pb-0">
          <div className="title_section">
            <h3 className="mb-0">Refine Search</h3>
          </div>
        </div>
        <div className="bg_white mb-3">
          <div className="row">
            {selectConfigs.map((config, index) => (
              <div key={config.id} className="col-12 col-md-3 mb-3">
                <CustomSelect
                  id={config.id}
                  label={config.label}
                  options={config.options}
                  value={selectedValues[config.id] || ""}
                  onChange={(e) =>
                    handleSelectChange(config.id, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg_white">
          <div className="search_field">
            <IoSearch />
            <input type="text" placeholder="search" />
          </div>
          <DataTable rows={rows} columns={overviewColumns} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
