import './App.css';
import { Routes, Route, BrowserRouter as Router, BrowserRouter, Link } from 'react-router-dom';
import Register from './component/Register';

import Navigation from './component/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navigation />
        <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
