import React from 'react'
import './css/App.css'
import Header from './components/Header'
import BreakingNewsCarousel from './components/BreakingNewsCarousel'
import Footer from './components/Footer'
import NewsSection from './components/NewsSection'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <BreakingNewsCarousel />
      {/* Main Content with Sidebar */}
      <div className="bg-linear-to-b from-background via-background/90 to-card text-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* News Sections */}
              <NewsSection category="world" title="World News" />
              <NewsSection category="technology" title="Technology" />
              <NewsSection category="business" title="Business" />
              <NewsSection category="sports" title="Sports" />
              <NewsSection category="entertainment" title="Entertainment" />
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
