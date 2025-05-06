import React, { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import DataTable from "components/tables/DataTable";
import { overviewColumns } from "../../components/tables/overviewColumns";
import { IoSearch } from "react-icons/io5";
import CustomCheckbox from "components/ui/CustomCheckbox";
import CustomSelect from "components/ui/CustomSelect";

const rows = [
  {
    id: 1,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 2,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 3,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 4,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 5,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 6,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 7,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 8,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 9,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 10,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 11,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
  },
  {
    id: 12,
    organization: "John Doe",
    reportid: "876876",
    reportsource: "Transport Speak Upp Hotline",
    datesubmitted: "Mar 5, 2025 11:440 Am",
    reportstage: "Under Asseement",
    movedclient: "No",
    clientreportowner: "-",
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
  

  return (
    <div className="mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview</h3>
        <div className="cta_btn_sect">
          <button className="cta cta_bg_green">
            Add New Report <TbReportSearch />
          </button>
          <button className="cta cta_bg_blue">
            Action <MdOutlineDownloadForOffline />
          </button>
        </div>
      </div>
      <div className="inner_page_scroll">
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
