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
      <Route path="/"  element={<Main/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
