import React from 'react'
import './css/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewsPageContent from './components/NewsPageContent'

function App() {
  return (
    <>
      <Header />
        <main>           
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<NewsPageContent />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
