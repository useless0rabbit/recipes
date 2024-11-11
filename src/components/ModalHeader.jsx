import React from 'react';
import './ModalHeader.css';

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <button className="back-button" onClick={onClose}>&larr;</button>
      <h2 className="modal-title">{title}</h2>
    </div>
  );
};

export default ModalHeader;
