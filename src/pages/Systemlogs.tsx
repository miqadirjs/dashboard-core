import DataTable from "components/tables/DataTable";
import { logsColumns } from "components/tables/logsColumns";
import CustomSelect from "components/ui/CustomSelect";
import DatePickerValue from "components/ui/DateRange";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const rows = [
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
  {
    Created: "Apr 1, 2025 12:17",
    User: "Kenneth Sagarino",
    Module: "System",
    Description: "Logged in to the App",
    ClientAccount: "N/A",
  },
];

const Systemlog: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const roleOptions = [{ value: "", label: "All" }];
  const moduleOptions = [{ value: "", label: "All Modules" }];
  const clientAccountOptions = [{ value: "", label: "client Account Name" }];

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
    console.log("Selected role:", e.target.value);
  };
  return (
    <div className="mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          System Logs
        </h3>
      </div>
      <div className="search_and_date_filters">
        <div className="search_field">
          <IoSearch />
          <input type="text" placeholder="search" />
        </div>
        <div className="system_logs">
          <CustomSelect
            id="user-role"
            // label="Role"
            options={roleOptions}
            value={selectedRole}
            onChange={handleRoleChange}
          />
        </div>
        <div className="system_logs">
          <CustomSelect
            id="AllModules"
            // label="Role"
            options={moduleOptions}
            value={selectedRole}
            onChange={handleRoleChange}
          />
        </div>
        <div className="system_logs">
          <CustomSelect
            id="ClientAccountName"
            // label="Role"
            options={clientAccountOptions}
            value={selectedRole}
            onChange={handleRoleChange}
          />
        </div>
        <div className="calenders">
          <DatePickerValue />
        </div>
      </div>
      <div className="inner_page_scroll">
        <div className="bg_white">
          <DataTable
            rows={rows}
            columns={logsColumns}
            getRowId={(row) => row.User}
          />
        </div>
      </div>
    </div>
  );
};

export default Systemlog;
