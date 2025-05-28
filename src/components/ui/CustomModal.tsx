import React, { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  bodyImageUrl?: string; // Optional image URL for the modal
  children: React.ReactNode;
};

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  bodyImageUrl,
  children,
}) => {
  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`custom-modal ${isOpen ? "show" : ""}`}
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
    >
      <div className="custom-modal-content">
        <div className="custom-modal-header">
          <h5>{title}</h5>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
        <div className="custom-modal-body">
          {bodyImageUrl && (
            <img
              src={bodyImageUrl}
              alt="modal-body-image"
              className="modal-body-image"
              style={{ maxWidth: "100%", marginBottom: "15px" }}
            />
          )}
          {children}
        </div>
        {/* <div className="custom-modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
        </div> */}
      </div>
    </div>
  );
};

export default CustomModal;
