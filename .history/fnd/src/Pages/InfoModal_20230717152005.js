import { useState } from "react"
import React  from 'react'

const InfoModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) {
        return null;
      }
    
      return (
        <div className="fixed inset-0 flex items-center justify-center z-50 top-0 backdrop-sepia-0 bg-white/10 backdrop-blur-sm left-0 right-0 bottom-0 ">
          <div className="bg-gray-300 rounded-lg p-6 px-20 py-5 ">
            <div className="mb-4 font-bold tect">{message}</div>
            <button
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      );
}

export default InfoModal