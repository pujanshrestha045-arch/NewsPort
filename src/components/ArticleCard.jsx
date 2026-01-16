import { Link } from 'react-router-dom'
import React from 'react'
import Card from '../ui/Card'


function ArticleCard({ article, featured = false }) {
  const publishedDate = article.pubDate ? new Date(article.pubDate) : null

  if (featured){
    return (
        <Link to={`${article.link}`}>
            <Card className = "group overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-full">
                <div className="relative w-full h-64 overflow-hidden">
                    <img src={article.image_url} alt={article.title} className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-xs font-semibold mb-2 uppercase">{article.source_id}</p>
                        <h3 className='font-bold line-clamp-2 text-lg'>{article.title}</h3>
                        <p className='text-xs text-white/80 mt-2'>{publishedDate.toLocaleString()}</p>
                    </div>
                </div>
            </Card>
        </Link>
    )
  }

  return (
    <>
      <Link to={`/news/${article.id}`}>
        <Card className="group overflow-hidden cursor-pointer hover:shadow-md transition-shadow h-full">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden ">
                    <img src={article.image} alt={article.title} className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex flex-col grow">
                    <p>{article.source}</p>
                    <h3 className='font-bold text-sm line-clamp-2 grow group-hover:text-primary'>{article.title}</h3>
                    <p className='text-xs mt-2'>{publishedDate.toLocaleString()}</p>
                </div>
            </CardContent>
        </Card>
      </Link>
    </>
  )
}

export default ArticleCard

