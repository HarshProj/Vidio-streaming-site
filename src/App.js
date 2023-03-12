import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Vidio from './Components/Vidio';
import {
  Route,
  BrowserRouter as Router,
  Routes
}from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path="/vidio/:id" element={<Vidio />}/>
      </Routes>
    </Router>
  );
}

export default App;
