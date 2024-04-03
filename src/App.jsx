
import'./App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Register from './pages/Register'
import Movies from './pages/Movies';
import Info from './pages/Info';
import Showcase from './pages/Showcase';

function App() {
  
  return (
    <Router>
    <Routes>
  
    <Route path="/" element={<Register/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/info" element={<Info/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/showcase" element={<Showcase/>}/>
    <Route path="*" element={<h1>404 Route not found</h1>}/>

    
  </Routes>
  </Router>

  );
}

export default App
