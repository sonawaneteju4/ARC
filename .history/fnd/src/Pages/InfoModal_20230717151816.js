import { useState } from "react"
import React  from 'react'

const InfoModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg p-6">
            <div className="mb-4">{message}</div>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      );
}

export default InfoModal