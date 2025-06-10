import React from 'react';
import { FaDownload } from 'react-icons/fa';

const reportStages = [
  { label: 'New Referred by MSP', color: 'dark' },
  { label: 'New Transcribed', color: 'dark' },
  { label: 'Under review', color: 'purple' },
  { label: 'Closed Client', color: 'dark' },
  { label: 'Under Assessment', color: 'dark' },
  { label: 'Closed MSP', color: 'purple' },
  { label: 'On Hold', color: 'purple' },
  { label: 'Suspended', color: 'dark' },
  { label: 'New Unallocated', color: 'dark' },
];

const ReportStage = () => {
  return (
    <div className="report-stage-container">
      <div className="report-stage-header">
        <h5>Report Stage</h5>
        <FaDownload className="download-icon" />
      </div>
      <div className="grid-container">
        {reportStages.map((stage, index) => (
          <div
            key={index}
            className={`grid-item ${stage.color}`}
            style={{ gridArea: getGridArea(index) }}
          >
            {stage.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const getGridArea = (index: number) => {
  const areas = [
    'a', 'b', 'c', 'd',
    'e', 'f', 'g',
    'h', 'i'
  ];
  return areas[index];
};

export default ReportStage;