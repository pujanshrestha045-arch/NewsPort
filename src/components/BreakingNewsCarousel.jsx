import React, { useState, useRef, useEffect } from 'react'
import { useNews } from '../hooks/UseNews'
import Button from '../ui/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function BreakingNewsCarousel() {
  const{ articles: breakingNews } = useNews("general", 6)
  const[currentIndex, setCurrentIndex] = useState(0)
  const[isAutoplay, setIsAutoplay] = useState(true)
  const[isMobile, setIsMobile] = useState(false)
  const autoplayInterval = useRef()

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  

  const article = breakingNews[currentIndex]

  useEffect(() => {
    if (!isAutoplay || !breakingNews.length) return

    autoplayInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
    }, 5000)

    return () => {
        if (autoplayInterval.current) clearInterval(autoplayInterval.current)
    }
  }, [isAutoplay, breakingNews.length])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + breakingNews.length) % breakingNews.length)
    setIsAutoplay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
    setIsAutoplay(false)
  }

  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  const touchStartX = useRef(0)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX
  const diff = touchStartX.current - touchEndX

  if (diff > 50) handleNext()
  if (diff < -50) handlePrev()
  }

  if (!article) return null

  const sourceName = typeof article.source === "string" ? article.source : article.source?.name || "News"
  const imageUrl = article.urlToImage || article.image 

  return (
    <>
      <div 
        className="relative w-full h-80 md:h-96 bg-black overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Background */}
        <img 
            src={imageUrl}
            alt={article.title}
            className='object-cover w-full h-full'
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-16">
            <div className="container">
                {/* Breaking News Label */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-500 font-bold text-sm uppercase">Breaking News</span>
                </div>

                {/* Title */}
                <h1 className='text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 line-clamp-2 md:line-clamp-3'>{article.title}</h1>

                {/* Description */}
                <p className='text-white/80 text-base md:text-lg mb-4 md:mb-6 line-clamp-2'>{article.description}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-white/60 text-xs md:text-sm mb-4 md:mb-6">
                    <span>{sourceName}</span>
                    <span>{new Date(article.publishedAt).toLocaleString()}</span>
                </div>

                {/* CTA */}
                <a href={article.url} target='_blank' rel='noopener noreferrer'>
                  <Button size='lg' className='bg-accent hover:bg-accent/90 text-accent-foreground'>
                    Read Full Story
                  </Button>
                </a>
            </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <Button
            size='sm'
            variant='secondary'
            onClick={handlePrev}
            className='bg-white/20 hover:bg-white/30 border-white/30'
            aria-label='Previous Article'
          >
            <ChevronLeft className='w-4 h-4' />
          </Button>
          <Button
            size='sm'
            variant='secondary'
            onClick={handleNext}
            className='bg-white/20 hover:bg-white/30 border-white/30'
            aria-label='Next Article'
          >
            <ChevronRight className='w-4 h-4' />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-16 flex gap-2">
          {breakingNews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx)
                setIsAutoplay(false)
              }}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-8" : "bg-white/40"}`}
              aria-label={`Go to slide ${idx + 1}`}
           />
          ))}
        </div>
      </div>
    </>
  )
}

export default BreakingNewsCarousel
