import { GridColDef } from '@mui/x-data-grid';

export const overviewColumns: GridColDef[] = [
  { field: 'organization', headerName: 'Client Organization', width: 150 },
  { field: 'reportid', headerName: 'Report ID', width: 200 },
  { field: 'reportsource', headerName: 'Report Source', width: 200 },
  { field: 'datesubmitted', headerName: 'Date Submitted ', width: 200 },
  {
    field: 'reportstage',
    headerName: 'Report Stage',
    width: 200,
    renderCell: (params) => {
      const isAssessment = params.value === 'Under Asseement'; // Typo matches your input
      const isReview = params.value === 'Under Review';

      const dotColor = isAssessment ? '#037847' : isReview ? '#FACC17' : '#ccc';

      return (
        <div className="flex items-center gap-2">
          <span style={{
            width: '10px',
            height: '10px',
            marginRight: '3px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            display: 'inline-block'
          }} />
          <span style={{ color: dotColor }}>{params.value}</span>
        </div>
      );
    }
  },
  { field: 'movedclient', headerName: 'Moved to Client', width: 200 },
  { field: 'clientreportowner', headerName: 'Client ReportOwner ', width: 200 },
  { field: 'TierRating', headerName: 'Tier Rating', width: 100 },
];