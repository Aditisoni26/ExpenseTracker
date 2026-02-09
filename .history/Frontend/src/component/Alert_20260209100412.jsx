import React from "react";

export default function Alert({ type, message, onClose }) {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button className="alert-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
