import React from "react";
import "../App.css";

export default function Reports() {
  return (
    <div className="page reports-page">
      {/* Page Header */}
      <div className="reports-header">
        <h1 className="reports-title">Reports</h1>
        <p className="reports-subtitle">
          Insights into your spending behavior
        </p>
      </div>

      {/* Main Grid */}
      <div className="reports-grid">
        {/* Monthly Report */}
        <div className="report-card highlight">
          <div className="report-header">
            <h3>Monthly Report</h3>
            <span className="report-tag">Primary</span>
          </div>

          <p className="report-desc">
            Track how much you spend each month and compare trends.
          </p>

          <div className="report-placeholder">
            <div className="placeholder-icon">📊</div>
            <p>Monthly analytics coming soon</p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="report-card">
          <div className="report-header">
            <h3>Category Breakdown</h3>
          </div>

          <p className="report-desc">
            Understand where your money goes across categories.
          </p>

          <div className="report-placeholder">
            <div className="placeholder-icon">🧾</div>
            <p>Category insights coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
