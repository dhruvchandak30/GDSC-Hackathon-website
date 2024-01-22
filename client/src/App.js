import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="h-screen bg-black">
      {/* <Navbar /> */}
      <Home/>
      <Heading />
    </div>
  );
}

export default App;
