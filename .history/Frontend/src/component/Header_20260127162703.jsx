import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      {/* Left side - App Name */}
      <div style={styles.left}>
        <h2 style={styles.logo}>Expense Tracker</h2>
      </div>

      {/* Right side - Navigation */}
      <div style={styles.right}>
        <button style={styles.link}>Home</button>
        <button style={styles.link}>Add Expense</button>
        <button style={styles.login}>Login</button>
        <button style={styles.signup}>Signup</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    height: "60px",
    backgroundColor: "#1f2933",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  logo: {
    margin: 0,
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    gap: "10px",
  },
  link: {
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  login: {
    backgroundColor: "#2563eb",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  signup: {
    backgroundColor: "#16a34a",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
