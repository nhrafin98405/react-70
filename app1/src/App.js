import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Nav from './components/Nav';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Props from './pages/Props';
import Event from './pages/Event';
import List from './pages/List';
import Forms from './pages/Forms';
import Form2 from './pages/Form2';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Header></Header>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/props" element={<Props />} />
        <Route path="/events" element={<Event />} />
        <Route path="/list" element={<List />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms2" element={<Form2/>} />
      </Routes>
    </BrowserRouter>
    </>


  )
}
