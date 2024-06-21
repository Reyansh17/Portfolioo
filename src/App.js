import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeFreelancer from './pages/dark/home-freelancer';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeFreelancer />} />
      <Route path='/cv' element='/cv.pdf'/>
      
        
        
      </Routes>
    </Router>
  );
}

export default App;
