import './App.css';
import { Routes,Route, BrowserRouter as Router, BrowserRouter, Link } from 'react-router-dom';
import Home from './component/Home';
import Home1 from './component/Home1';
import NotFound from './component/NotFound';


function App() {
  return (
<BrowserRouter>
<div>
<Link to="/">Home</Link>
<Link to="/Home1">Home1</Link>
<Link to="/Homeee">TO get error</Link>
</div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Home1' element={<Home1/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    
      </BrowserRouter>
  );
}

export default App;
