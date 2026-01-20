import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../ui/Button'


const categories = [
    { value: "all", label: "Home" },
    { value: 'world', label: 'World' },
    { value: 'technology', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'sports', label: 'Sports' },
    { value: 'entertainment', label: 'Entertainment' },
]
function CategoryFilter() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const currentCategory = searchParams.get("category") || "all"

    const handleCategoryChange = (category) => {
        if (category === "all") {
            navigate("/")
        }
        else {
            navigate(`/news?category=${category}`)
        }
    }
    return (
        <>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <Button
                        key={category.value}
                        variant={currentCategory === category.value ? "default" : "outline"}
                        onClick={() => handleCategoryChange(category.value)}
                        className='rounded-full'>                
                            {category.label}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default CategoryFilter
