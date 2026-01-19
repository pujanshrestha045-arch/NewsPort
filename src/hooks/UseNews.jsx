import React, { useEffect, useState } from 'react'
import { getNews, getTrending, getBreakingNews } from '../services/api'

export function useNews(category, limit) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true

        const fetchNews = async () => {
            try {
                setLoading(true)
                setError(null)

                const data = await getNews(category, limit)

                if (isMounted) {
                    setArticles(Array.isArray(data) ? data : [])
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An error occurred")
                    setArticles([])
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        fetchNews()

        return () => {
            isMounted = false
        }
    }, [category, limit])

    return { articles, loading, error }
}

export function useTrendingNews(limit = 5) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true

        const fetchNews = async () => {
            try {
                setLoading(true)
                setError(null)

                const data = await getTrending  (limit)

                if (isMounted) {
                    setArticles(Array.isArray(data) ? data : [])
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An error occurred")
                    setArticles([])
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        fetchNews()

        return () => {
            isMounted = false
        }
    }, [limit])

    return { articles, loading, error }
}

export function useBreakingNews(limit) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true

        const fetchNews = async () => {
            try {
                setLoading(true)
                setError(null)

                const data = await getBreakingNews(limit)

                if (isMounted) {
                    setArticles(Array.isArray(data) ? data : [])
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An error occurred")
                    setArticles([])
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        fetchNews()

        return () => {
            isMounted = false
        }
    }, [limit])

    return { articles, loading, error }
}
