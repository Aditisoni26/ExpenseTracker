import React from "react";
import "../App.css";

export default function Reports() {
  return (
    <div className="page reports-page">
      {/* Header */}
      <div className="reports-header">
        <h1 className="reports-title">Reports</h1>
        <p className="reports-subtitle">
          Analyze your spending patterns
        </p>
      </div>

      {/* Reports Grid */}
      <div className="reports-grid">
        <div className="report-card">
          <h3>Monthly Report</h3>
          <p className="report-desc">
            View expenses month by month
          </p>

          <div className="report-empty">
            <span>Coming soon</span>
          </div>
        </div>

        <div className="report-card">
          <h3>Category Breakdown</h3>
          <p className="report-desc">
            See where your money goes
          </p>

          <div className="report-empty">
            <span>Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}
