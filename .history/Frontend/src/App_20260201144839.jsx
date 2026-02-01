import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <>
     <Header />
    <Routes>
     
      <Main className="main-content">Home</Main>
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
