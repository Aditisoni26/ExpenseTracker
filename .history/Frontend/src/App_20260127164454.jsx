import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <>
      <Header />
      <Main className="main-content">Home</Main>
      <Footer />
    </>
  );
}

export default App;
