import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Home from './Home/Home.js';
import Desserts from './Desserts/Desserts.js';
import Salads from './Salads/Salads.js';
import Offers from './Offers/Offers.js';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path= "/" element = {<Home/>}/>
          <Route path= "/Desserts" element = {<Desserts/>}/>
          <Route path= "/Salads" element = {<Salads/>}/>
          <Route path= "/Offers" element = {<Offers/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
