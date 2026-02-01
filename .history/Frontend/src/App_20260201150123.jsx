import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Login from "./component/Login";

function App() {
  return (
    <div className="app">
     <Header />
     <main className="content">
    <Routes>
      <Route path="/"  element={<Main/>}/>
      <Route path="/login"  element={<Login/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
