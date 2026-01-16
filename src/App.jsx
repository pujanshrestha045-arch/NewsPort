import React from 'react'
import './css/App.css'
import Header from './components/Header'
import BreakingNewsCarousel from './components/BreakingNewsCarousel'
import Footer from './components/Footer'
import NewsSection from './components/NewsSection'

function App() {
  return (
    <>
      <Header />
      <BreakingNewsCarousel />
      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* News Sections */}
            <NewsSection category="world" title="World News" />
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
