import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ArticleCard from './ArticleCard'
import { useNews } from '../hooks/UseNews'

function NewsSection({category, title, displayCount = 3}) {
  const { articles, loading } = useNews(category, displayCount)
  return (
    <>
      <section className='py-12'>
        <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <div className='w-12 h-1 bg-accent mt-2' />
                </div>
                <Button variant='outline'>
                    <Link to={`/news?category=${category}`} className="flex items-center gap-2 font-semibold text-foreground">
                        View All <ArrowRight className='w-4 h-4' />
                    </Link>
                </Button>
            </div>

            {/* Articles Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: displayCount }).map((_,i) => (
                        <div key={i} className="h-64 bg-muted rounded-lg animate-pulse" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {(articles ?? []).slice(0, displayCount).map((article) => (
                        <ArticleCard key={article.link} article={article} />
                    ))}
                </div>
            )}
        </div>
      </section>
    </>
  )
}

export default NewsSection

