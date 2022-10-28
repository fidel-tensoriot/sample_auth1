import './App.css';
import Protected from './Auth'
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import ProtectedPage from './pages/ProtectedPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/protected" element={<Protected> <ProtectedPage/> </Protected>} />
      </Routes>
    </div>
  );
}


export default App;
