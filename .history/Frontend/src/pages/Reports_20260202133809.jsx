/* =========================
   REPORTS PAGE
========================= */
.reports-header {
  margin-bottom: 40px;
}

.reports-title {
  font-size: 32px;
  font-weight: 700;
}

.reports-subtitle {
  margin-top: 8px;
  font-size: 15px;
  color: var(--text-muted);
}

/* Grid */
.reports-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

/* Card */
.report-card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.report-card h3 {
  font-size: 18px;
  font-weight: 600;
}

.report-desc {
  font-size: 14px;
  color: var(--text-muted);
}

/* Empty state */
.report-empty {
  margin-top: 28px;
  padding: 40px 0;
  text-align: center;
  border-top: 1px dashed var(--border-light);
}

.report-empty span {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
}
