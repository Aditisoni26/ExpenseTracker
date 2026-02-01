import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <>
    <Routes>
      <Header />
      <Main className="main-content">Home</Main>
      <Footer />
    </>
  );
}

export default App;
