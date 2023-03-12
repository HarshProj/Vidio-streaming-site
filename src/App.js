import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Vidio from './Components/Vidio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Vidio/>
    </div>
  );
}

export default App;
