const API_KEY = "7b960d7fbf7f4997995c140485319c6d"
const BASE_URL = "https://newsapi.org/"

export async function fetchFromNewsAPI(endpoint, params = {}) {
    const url = new URL(`https://newsapi.org/v2/${endpoint}`)
    url.searchParams.append("apiKey", NEWS_API_KEY)

    Object.entries(params).forEach(([key, value]) => {
        if(value) url.searchParams.append(key, value)
    })

    try {
        const response = await fetch(url.toString())

        if (!response.ok){
            console.error(`NewsAPI error: ${response.status}`)
            return null
        }
        return await response.json()
    } catch(error) {
        console.error("NewsAPI fetch failed:", error)
        return null
    }
}