import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/add-expense" element={<ADD />} />
          <Route path="/reports" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
