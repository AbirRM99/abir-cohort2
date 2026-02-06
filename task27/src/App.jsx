import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Course from './pages/Course'
import AnyCourse from './pages/AnyCourse'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product/men' element={<Men />}/>
        <Route path='/product/women' element={<Women />}/>
        <Route path='/course' element={<Course />}/>
        <Route path='/course/:id' element={<AnyCourse />}/>
        <Route path='/course/:id/details' element={<CourseDetail />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App