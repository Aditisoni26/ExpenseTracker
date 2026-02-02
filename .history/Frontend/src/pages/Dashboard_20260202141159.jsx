/* =========================
   DASHBOARD BASE
========================= */
.dashboard {
  max-width: 1120px;
  margin: 0 auto;
  padding: 56px 28px 72px;
}

/* =========================
   HEADER
========================= */
.dashboard-top {
  margin-bottom: 44px;
}

.dashboard-top h1 {
  font-size: 34px;
  font-weight: 700;
}

.dashboard-top p {
  margin-top: 8px;
  font-size: 15px;
  color: #64748b;
  max-width: 520px;
}

/* =========================
   CARDS GRID
========================= */
.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-bottom: 56px;
}

/* =========================
   CARD BASE
========================= */
.card {
  background: #ffffff;
  padding: 26px 24px;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.07);
}

.card span {
  font-size: 12px;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.5px;
}

.card h3 {
  margin-top: 12px;
  font-size: 22px;
  font-weight: 600;
}

/* =========================
   PRIMARY CARD
========================= */
.card.primary {
  grid-column: span 2;
  padding: 30px 28px;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: #ffffff;
}

.card.primary span {
  color: rgba(255, 255, 255, 0.85);
}

.card.primary h2 {
  margin-top: 14px;
  font-size: 42px;
  font-weight: 700;
}

/* =========================
   ACTIVITY
========================= */
.activity {
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.07);
}

.activity h3 {
  padding: 22px 26px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #e5e7eb;
}

.activity-empty {
  padding: 52px 28px;
  text-align: center;
}

.activity-empty p {
  font-size: 16px;
  font-weight: 500;
}

.activity-empty span {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #64748b;
}
