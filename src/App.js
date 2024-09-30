import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './About'
import Cart from './Cart'
import Header from './components/Header'
import Contact from './Contact'
import Products from './Products'
import Error from './ErrorPage'
import Home from './Home'
import SingleProducts from './SingleProducts'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/SingleProducts/:id" element={<SingleProducts />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="*" element={<Error />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App