import DataTable from "components/tables/DataTable";
import { userColumns } from "components/tables/userColumns";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDownloadForOffline } from "react-icons/md";

const rows = [
  {
    name: "Brandon Jake Sullano",
    email: "brandon@coreintegrity.com.au",
    role: "Administrator",
    restrictedreport: "N/A",
    incidenttags: "None",
    datecreated: "Mar 25, 2025 3:14 PM",
    lastlogin: "Mar 25, 2025 3:14 PM",
    movedclient: "No",
    accountstatus: "Active",
  },
  {
    name: "Jenny Wilson",
    email: "alma.lawson@example.com",
    role: "Administrator",
    restrictedreport: "N/A",
    incidenttags: "None",
    datecreated: "Mar 25, 2025 3:14 PM",
    lastlogin: "Mar 25, 2025 3:14 PM",
    movedclient: "No",
    accountstatus: "Active",
  },
  {
    name: "Darlene Robertson",
    email: "jackson.graham@example.com",
    role: "Administrator",
    restrictedreport: "N/A",
    incidenttags: "None",
    datecreated: "Mar 25, 2025 3:14 PM",
    lastlogin: "Mar 25, 2025 3:14 PM",
    movedclient: "No",
    accountstatus: "Active",
  },
  {
    name: "Jacob Jones",
    email: "deanna.curtis@example.com",
    role: "Administrator",
    restrictedreport: "N/A",
    incidenttags: "None",
    datecreated: "Mar 25, 2025 3:14 PM",
    lastlogin: "Mar 25, 2025 3:14 PM",
    movedclient: "No",
    accountstatus: "Active",
  },
  {
    name: "Annette Black",
    email: "curtis.weaver@example.com",
    role: "Administrator",
    restrictedreport: "N/A",
    incidenttags: "None",
    datecreated: "Mar 25, 2025 3:14 PM",
    lastlogin: "Mar 25, 2025 3:14 PM",
    movedclient: "No",
    accountstatus: "Active",
  },
];

const Users: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="title_section">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">My Users</h3>
          <div className="search_field">
            <IoSearch />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="cta_btn_sect">
          <button className="cta cta_bg_blue">
            Action <MdOutlineDownloadForOffline />
          </button>
        </div>
      </div>
      <div className="inner_page_scroll">
        <div className="bg_white">
          <DataTable
            rows={rows}
            columns={userColumns}
            getRowId={(row) => row.email}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
