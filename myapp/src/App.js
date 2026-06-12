import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Nav from './components/Nav';
import Header from './components/Header';
import Props from './page/Props';
import Form from './page/Form';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Header></Header>
    
    <Routes>
       <Route path='/' element={<Home></Home>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/props' element={<Props/>} />
      <Route path='/form' element={<Form/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
  );
}

export default App;
