/* =========================
   DASHBOARD BASE
========================= */
.dashboard {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}

/* =========================
   HEADER
========================= */
.dashboard-top {
  margin-bottom: 40px;
}

.dashboard-top h1 {
  font-size: 34px;
  font-weight: 700;
}

.dashboard-top p {
  margin-top: 6px;
  font-size: 15px;
  color: #64748b;
}

/* =========================
   CARDS GRID
========================= */
.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

/* =========================
   CARD
========================= */
.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
}

.card span {
  font-size: 12px;
  text-transform: uppercase;
  color: #64748b;
}

.card h3 {
  margin-top: 10px;
  font-size: 22px;
  font-weight: 600;
}

/* PRIMARY CARD */
.card.primary {
  grid-column: span 2;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: #ffffff;
}

.card.primary span {
  color: rgba(255, 255, 255, 0.85);
}

.card.primary h2 {
  margin-top: 12px;
  font-size: 40px;
  font-weight: 700;
}

/* =========================
   ACTIVITY
========================= */
.activity {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
}

.activity h3 {
  padding: 20px 24px;
  font-size: 18px;
  border-bottom: 1px solid #e5e7eb;
}

.activity-empty {
  padding: 48px 24px;
  text-align: center;
}

.activity-empty p {
  font-size: 16px;
  font-weight: 500;
}

.activity-empty span {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  color: #64748b;
}
