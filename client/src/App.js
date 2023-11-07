import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
 <div className='bg-richblack-900 h-screen'>
      <Navbar />
      <Home />
    </div>
    </div>
  );
}

export default App;
