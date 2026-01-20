const API_KEY = "pub_9210e804f1e54d33ac0f3f7f0c95b4f0"
const BASE_URL = "https://newsdata.io/api/1"
const CACHE_DURATION = 5 * 60 * 1000

async function fetchWithCache(url, storageKey) {
    const now = Date.now()

    // Check Local Storage
    if (storageKey) {
        const cached = localStorage.getItem(storageKey)
        if (cached) {
            try {
                const parsed = JSON.parse(cached)
                if (now - parsed.time < CACHE_DURATION) {
                    return parsed.data
                }
            } catch (err) {
                console.warn("Failed to parse cached data", err)
                localStorage.removeItem(storageKey)
            }
        }
    }

    // Fetch From API
    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "Failed to fetch news")
    }

    const results = data.results || []

    // Store in Local Storage
    if (storageKey) {
        localStorage.setItem(storageKey, JSON.stringify({ data: results, time: now}))
    }

    return results
}

export const getTrending = async (limit = 5) => {

    const url = `${BASE_URL}/latest?apikey=${API_KEY}&language=en&size=${limit}`
    return fetchWithCache(url, "trendingNews")
}

export const getNews = async (category, limit = 5) => {

    const url = `${BASE_URL}/latest?apikey=${API_KEY}&language=en&category=${category}&size=${limit}`
    return fetchWithCache(url, `news-${category}`);

}

export const getBreakingNews = async (limit = 5) => {

    const url = `${BASE_URL}/latest?apikey=${API_KEY}&language=en&size=${limit}`
    return fetchWithCache(url, "breakingNews")
}