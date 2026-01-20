import React from 'react'
import { useLocation } from 'react-router-dom'
import CategoryFilter from './CategoryFilter'
import ArticleCard from './ArticleCard'
import { useNews } from '../hooks/UseNews'

function NewsPageContent() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const category = searchParams.get("category") || undefined
    const { articles = [], loading, error} = useNews(category, 5)

  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
        

        {/* Page Header */}
        <div className="bg-card border-b border-border py-8">
            <div className="container mx-auto px-4">
                <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                    {category ? category.charAt(0).toUpperCase() + category.slice(1) : "All"}
                </h1>
                <p className='text-muted-foreground'>Browse the latest news articles</p>
            </div>
        </div>

        {/* Content */}
        <div className="grow">
            <div className="container px-4 mx-auto py-12">
                {/* Filters */}
                <div className="mb-8">
                    <h2 className='text-lg font-semibold mb-4'></h2>
                    <CategoryFilter />
                </div>

                {/* Articles */}
                {error && (
                    <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive mb-8">{error}</div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 5}).map((_, i) => (
                            <div key={i} className="h-80 bg-muted rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                ) : articles.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <ArticleCard key={article.link} article={article} />
                        ))}
                        </div>

                        {/* Load More */}
                        <div className="flex justify-center mt-12">
                            <button className='px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold'>Load More Articles</button>
                        </div>
                    </>
                ) : (
                    <div className='text-center py-12'>
                        <p className='text-muted-foreground text-lg'>No articles found for this category</p>
                    </div>
                )}
            </div>
        </div>
        
      </div>
    </>
  )
}

export default NewsPageContent
