import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Main from './Components/Main';
import Footer from './Components/Footer'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import All from './All';
import Viewbook from './Viewbook';
import News from './Components/News';
import Mencollection from './Components/Mencollection';
import Womencollection from './Components/Womencollection';
import Electronic from './Components/Electronic';
import Accessories from './Components/Accessories';
import Login from './Components/Login';
import Products from './Components/Products';
import Signup from './Components/Signup';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Navbar/>, <Main/>,<Footer/>]} />
      <Route path="/Home" element={[<Navbar/> ,<Main/>,<Footer/>]} />
      <Route path="/products" element={[<Navbar/> ,<Products/>]} />
      <Route path="/About" element={[<Navbar/>,<About/>]}/>
      <Route path='/All Books' element={[<Navbar/>,<All/>]}/>
      <Route path='/View' element={[<Navbar/>,<Viewbook/>]}/>
      <Route path='/News' element={[<Navbar/>,<News/>]}/>
      <Route path='/men' element={[<Navbar/>,<Mencollection/>]}/>
      <Route path='/women' element={[<Navbar/>,<Womencollection/>]}/>
      <Route path='/electronic' element={[<Navbar/>,<Electronic/>]}/>
      <Route path='/accessories' element={[<Navbar/>,<Accessories/>]}/>
      <Route path='/login' element={[<Login/>]}/>
      <Route path='/signup' element={[<Signup/>]}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
