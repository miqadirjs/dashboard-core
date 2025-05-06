import React, { useState, useRef } from "react";
import { FiUpload, FiTrash2 } from "react-icons/fi";

interface FileUploaderProps {
  onFilesAccepted: (files: File[]) => void;
}

const CustomFileUploader: React.FC<FileUploaderProps> = ({
  onFilesAccepted,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const acceptedFiles = Array.from(files);
      const updatedFiles = [...uploadedFiles, ...acceptedFiles];
      setUploadedFiles(updatedFiles);
      onFilesAccepted(updatedFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    const acceptedFiles = Array.from(files);
    const updatedFiles = [...uploadedFiles, ...acceptedFiles];
    setUploadedFiles(updatedFiles);
    onFilesAccepted(updatedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    onFilesAccepted(newFiles);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="bg_gray">
      <div
        className="upload_border_sect"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          style={{ display: "none" }}
        />

        {/* Upload Icon */}
        <div className="upload_section" onClick={openFileDialog}>
          <img
            src="/images/Upload-icon.png"
            alt="upload-icon"
            className="upload_img"
          />
          {/* <FiUpload size={40} /> */}
          <span className="text-sm">Click or Drag files to upload</span>
        </div>
      {/* Uploaded File List */}
      <label className="mt-3"><b>Uploaded</b></label>
      <div className="all_doc_list">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="doc_list">
            <span className="fileName">{file.name}</span>
            <button
              onClick={() => handleRemoveFile(index)}
              className="delete"
              title="Remove"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>
      <div className="button_section">
        <button className="cta">Upload Files</button>
      </div>
      </div>
    </div>
  );
};

export default CustomFileUploader;
