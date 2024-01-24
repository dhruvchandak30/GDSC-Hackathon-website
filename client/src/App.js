import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
