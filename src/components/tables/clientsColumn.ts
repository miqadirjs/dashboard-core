import { GridColDef } from '@mui/x-data-grid';

export const clientsColumns: GridColDef[] = [
  { field: 'Organisation', headerName: 'Organisation Name', width: 150 },
  { field: 'activeUser', headerName: 'Total Active User', width: 150 },
  { field: 'Licenses', headerName: 'Licenses', width: 200 },
  { field: 'report', headerName: 'Total Reports', width: 200 },
  { field: 'incidenttags', headerName: 'No. of Incident Tags', width: 200 },
  { field: 'Contact', headerName: 'Main Contact', width: 200 },
  { field: 'Status', headerName: 'Status', width: 200 },
];