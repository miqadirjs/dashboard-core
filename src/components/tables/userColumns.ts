import { GridColDef } from '@mui/x-data-grid';

export const userColumns: GridColDef[] = [
  { field: 'name', headerName: 'Full Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'role', headerName: 'Role', width: 200 },
  { field: 'restrictedreport', headerName: 'Can Access Restricted Reports', width: 200 },
  { field: 'incidenttags', headerName: 'Incident Tags', width: 200 },
  { field: 'datecreated', headerName: 'Date Created', width: 200 },
  { field: 'lastlogin', headerName: 'Last Login', width: 200 },
  { field: 'accountstatus', headerName: 'Account Status', width: 200 },
];