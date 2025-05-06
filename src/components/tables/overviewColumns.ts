import { GridColDef } from '@mui/x-data-grid';

export const overviewColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'organization', headerName: 'Client Organization', width: 150 },
  { field: 'reportid', headerName: 'Report ID', width: 200 },
  { field: 'reportsource', headerName: 'Report Source', width: 200 },
  { field: 'datesubmitted', headerName: 'Date Submitted ', width: 200 },
  { field: 'reportstage', headerName: 'Report Stage', width: 200 },
  { field: 'movedclient', headerName: 'Moved to Client', width: 200 },
  { field: 'clientreportowner', headerName: 'Client ReportOwner ', width: 200 },
];