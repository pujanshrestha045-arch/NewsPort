import React from 'react'
import { useTrendingNews } from '../hooks/UseNews'
import Card from '../ui/Card'
import { TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

function TrendingPanel() {
    const {articles = [], loading} = useTrendingNews(5)

    return (
        <>
            <Card className='sticky top-20 bg-card border-border p-6'>
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className='w-5 h-5 text-accent' />
                    <h3 className='font-bold text-lg'>Trending Now</h3>
                </div>

                {loading ? (
                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className='h-12 bg-muted rounded animate-pulse' />
                        ))}
                    </div>
                ) : (
                    <ul className='space-y-4'>
                        {articles.map((article, idx) => (
                            <li key={article.link}>
                                <a href={article.link} target='_blank' rel='noopener noreferrer' className='block group'>
                                    <div className="flex gap-3">
                                        <span className='font-bold text-accent text-lg min-w-6'>{idx + 1}</span>
                                        <div className="min-w-0 flex-1">
                                            <h4 className='text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors'>
                                                {article.title}
                                            </h4>

                                            {article.pubDate && (
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {new Date(article.pubDate).toLocaleDateString()}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </Card>
        </>
    )
}

export default TrendingPanel
