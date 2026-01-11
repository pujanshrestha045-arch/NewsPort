import React, { useEffect, useState } from 'react'

export function useNews(category, limit) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)
                const params = new URLSearchParams()
                if (category) params.append("category", category)
                if (limit) params.append("limit", limit.toString())

                const response = await fetch(`/newsapi/news?${params}`)
                if (!response.ok) throw new Error("Failed to fetch news")

                const data = await response.json()
                setArticles(data.articles)
                setError(null)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
                setArticles([])
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [category, limit])

    return { articles, loading, error }
}

export function useTrendingNews(limit = 5) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                setLoading(true)
                const response = await fetch(`/newsapi/news/trending?limit=${limit}`)
                if (!response.ok) throw new Error("Failed to fetch trending news")

                const data = await response.json()
                setArticles(data.articles)
                setError(null)
            } catch (err) {
                console.error(err)
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchTrending()
    }, [limit])

    return { articles, loading, error }
}


