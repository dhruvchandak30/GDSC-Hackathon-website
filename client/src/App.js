import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./fonts/Array-Regular.woff";
import "./fonts/pricedown_bl.ttf";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
