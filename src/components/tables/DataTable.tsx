import React, { useState } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface DataTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  getRowId?: (row: any) => string | number;
}

const DataTable: React.FC<DataTableProps> = ({ rows, columns, getRowId }) => {
  const [pageSize, setPageSize] = useState(5);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          border: "none",
          "& .MuiDataGrid-cell": {
            border: "none",
            backgroundColor: "#fff",
          },
          "& .MuiDataGrid-row": {
            border: "none",
            backgroundColor: "#fff",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiCheckbox-root": {
            color: "#1976d2",
          },
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }}
      />
    </Box>
  );
};

export default DataTable;
