import { fetchFromNewsAPI } from "../services/api"

const CATEGORY_MAP = {
    world : "general",
    technology : "technology",
    business : "business",
    sports : "sports",
    entertainment : "entertainment",
}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "general";
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const page = Number.parseInt(searchParams.get("page") || "1")

    const newsApiCategory = CATEGORY_MAP[category] || "general"

    const newsData = await fetchFromNewsAPI("top-headlines", {
        category: newsApiCategory,
        pageSize: String(limit),
        page: String(page),
        country: "Nepal",
    })

    if (newsData && newsData.articles) {
        return Response.json({
            articles: newsData.articles,
            totalResults: newsData.totalResults,
            status: newsData.status,
        })
    }

    return Response.json ({
        articles: [],
        totalResults: 0,
        status: "error",
        message: "No articles found"
    })
}