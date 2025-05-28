import { GridColDef } from '@mui/x-data-grid';

export const logsColumns: GridColDef[] = [
  { field: 'Created', headerName: 'Created', width: 250 },
  { field: 'User', headerName: 'User/Reporter', width: 250 },
  { field: 'Module', headerName: 'Module', width: 200 },
  { field: 'Description', headerName: 'Description', width: 300 },
  { field: 'ClientAccount', headerName: 'Client Account', width: 200 },
];