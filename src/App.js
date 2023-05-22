import './App.css';
import { Routes,Route, BrowserRouter as Router, BrowserRouter, Link } from 'react-router-dom';
import Home from './component/Home';
import Home1 from './component/Home1';
import NotFound from './component/NotFound';
import Logo from "./logo.svg";
// import SiteLogo from "../public/logo192.png";
import { ThemeProvider } from '@emotion/react';
import { theme } from "./Style"
function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
<BrowserRouter>
<div>


 


  {/* another way is to import from img folder */}

{/* <img src={Logo}/> */}

<img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`}/>

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
      </ThemeProvider>
      </div>
  );
}

export default App;
