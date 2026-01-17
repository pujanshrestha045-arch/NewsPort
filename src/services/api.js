const API_KEY = "pub_9210e804f1e54d33ac0f3f7f0c95b4f0"
const BASE_URL = "https://newsdata.io/api/1"

export const getTrending = async (limit = 5) => {
    const url = `${BASE_URL}/latest?apikey=${API_KEY}&language=en&size=${limit}`
    
    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== "success") {
        throw new Error(data.message || "Failed to fetch trending news");
    }

    return data.results || []
};

export const getNews = async (category, limit = 5) => {

    const url = `${BASE_URL}/latest?apikey=${API_KEY}&language=en&category=${category}&size=${limit}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.status !== "success") {
        throw new Error(data.message || "Failed to fetch news");
    }

    return data.results || []
}

export const getBreakingNews = async ( limit = 5) => {

    const url = `${BASE_URL}/latest?apikey=${API_KEY}&language=en&size=${limit}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.status !== "success") {
        throw new Error(data.message || "Failed to fetch news");
    }

    return data.results || []
}