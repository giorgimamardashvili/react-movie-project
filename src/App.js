import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Page404 from "./pages/Page404";
import About from "./pages/About";

function App() {
  return (
    <div className="App" style={{ background: "#242731", minHeight: "100vh" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
