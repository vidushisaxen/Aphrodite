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

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={[<Navbar/>, <Main/>,<Footer/>]} />
      <Route path="/Home" element={[<Navbar/> ,<Main/>,<Footer/>]} />
      <Route path="/About" element={[<Navbar/>,<About/>]}/>
      <Route path='/All Books' element={[<Navbar/>,<All/>]}/>
      <Route path='/View' element={[<Navbar/>,<Viewbook/>]}/>
      <Route path='/News' element={[<Navbar/>,<News/>]}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
