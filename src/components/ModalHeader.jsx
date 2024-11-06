import React from 'react';
import './ModalHeader.css'; 

const ModalHeader = ({ onClose }) => {
  return (
    <div className="modal-header">
      <button className="back-button" onClick={onClose}>
        ←
      </button>
      <h2 className="modal-title">Информация о блюде</h2>
    </div>
  );
};

export default ModalHeader;
